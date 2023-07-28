import React, { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';

import { Stepper } from 'components/functional';
import { BasicDetails } from 'components/property/BasicDetails';
import { BusinessDetails } from 'components/property/BusinessDetails';
import { Facing } from 'components/property/Facing';
import { LocationDetails } from 'components/property/LocationDetails';
import { PropertyImages } from 'components/property/PropertyImages';
import { Review } from 'components/property/Review';
import { createPropertySchema } from 'constants/validation-schema';

const totalSteps = 5;

export function CreateProperty() {
  const [currentStep, setCurrentStep] = React.useState(5);

  const methods = useForm({ resolver: yupResolver(createPropertySchema) });

  const { control } = methods;

  const onSubmit = () => null;
  const pageFields = [
    ['title', 'noOfBhk', 'price', 'builtUpArea', 'description'],
    ['propertyAddress'],
    ['propertyType', 'salesType'],
    ['facing'],
  ];

  const [propertyImages, setPropertyImages] = useState<File[]>([]);

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
            {currentStep === 5 && <Review />}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
