import React, { useState } from 'react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Storage } from 'aws-amplify';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Stepper } from 'components/functional';
import { BasicDetails } from 'components/property/BasicDetails';
import { BusinessDetails } from 'components/property/BusinessDetails';
import { Facing } from 'components/property/Facing';
import { LocationDetails } from 'components/property/LocationDetails';
import { PropertyImages } from 'components/property/PropertyImages';
import { Review } from 'components/property/Review';
import { createPropertySchema } from 'constants/validation-schema';
import { useAmplifyMutation } from 'hooks/useAmplifyMutation';
import { PropertyService } from 'services/properties/property';

const totalSteps = 5;

export function CreateProperty() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [propertyImages, setPropertyImages] = useState<File[]>([]);
  const [disableSumbit, setDisableSubmit] = useState(false);

  const { user } = useAuthenticator();

  const methods = useForm({ resolver: yupResolver(createPropertySchema) });

  const createPropertyMutation = useAmplifyMutation(
    PropertyService.createProperty,
    {}
  );

  const { control, handleSubmit } = methods;

  const pageFields = [
    ['title', 'noOfBhk', 'price', 'builtUpArea', 'description'],
    ['propertyAddress'],
    ['propertyType', 'salesType'],
    ['facing'],
  ];

  const onSubmit = handleSubmit(async (data) => {
    setDisableSubmit(true);

    try {
      const keys = await Promise.all(
        propertyImages.map(async (image) => {
          const fileName = `${Date.now()}-${image.name}`;
          const result = await Storage.put(fileName, image, {
            contentType: image.type,
          });

          return result.key;
        })
      );
      try {
        await createPropertyMutation.mutateAsync({
          data,
          propertyImages: keys,
          userID: user.getUsername(),
        });
        methods.reset();
        setPropertyImages([]);
        setDisableSubmit(false);
        toast.success('Property created successfully!');
        setCurrentStep(6);
      } catch (error) {
        toast.error('Error in creating property! Try again');
        setDisableSubmit(false);
      }
    } catch (error) {
      toast.error('Error in uploading images! Try again');
      setDisableSubmit(false);
    }
  });

  return (
    <div className="create-property mx-0">
      <div className="stepper-wrapper px-2 py-4">
        <FormProvider {...methods}>
          <form className="">
            {currentStep <= totalSteps && (
              <Stepper
                totalSteps={totalSteps}
                currentStep={currentStep}
                pageFields={pageFields}
                onStepChange={setCurrentStep}
                onStepsComplete={onSubmit}
                disableSubmit={disableSumbit}
                title="Create a new property">
                <div className="step w-full">
                  {currentStep === 1 && <BasicDetails control={control} />}
                  {currentStep === 2 && <LocationDetails control={control} />}
                  {currentStep === 3 && <BusinessDetails control={control} />}
                  {currentStep === 4 && <Facing control={control} />}
                  {currentStep === 5 && (
                    <PropertyImages
                      propertyImages={propertyImages}
                      setPropertyImages={setPropertyImages}
                    />
                  )}
                </div>
              </Stepper>
            )}{' '}
            {currentStep === 6 && <Review onClick={() => setCurrentStep(1)} />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
