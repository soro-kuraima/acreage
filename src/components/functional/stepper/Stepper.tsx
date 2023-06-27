import React, { useEffect } from 'react';

import { useFormContext } from 'react-hook-form';
import { HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import { Button, Steps, Typography } from 'components/common';

type PropertyOwner = {
  owner: number;
  units: number;
  englishName: string;
  nationalId: string;
  email: string;
};

type StepperProps = {
  totalSteps: number;
  currentStep: number;
  children: React.ReactNode;
  onStepChange: (step: number) => void;
  onStepsComplete: () => void;
  title: string;
  propertyOwners?: PropertyOwner[];
};

const pageFields = [
  ['propertyLongName', 'propertyTradingName', 'propertyDescription'],
  ['serviceType', 'propertyType', 'initialUnitPrice', 'yieldPercent'],
  ['totalUnits'],
];

export function Stepper({
  totalSteps,
  currentStep,
  children,
  onStepChange,
  onStepsComplete,
  title,
  propertyOwners,
}: StepperProps) {
  const navigate = useNavigate();
  const methods = useFormContext();

  const totalUnitsFormValue = methods.watch('totalUnits');

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const handleStepChange = async () => {
    const isValidInput = await methods.trigger(pageFields?.[currentStep - 1]);
    const collectiveUnitsOwned = propertyOwners?.reduce(
      (acc: number, owner) => Number(acc) + Number(owner.units),
      0
    );
    if (currentStep === 3) {
      if (collectiveUnitsOwned !== Number(totalUnitsFormValue)) {
        methods.setError('totalUnits', {
          type: 'custom',
          message: 'Total units should match the collective units owned',
        });

        return;
      }
    }
    if (isValidInput) {
      onStepChange(currentStep + 1);
    }
  };

  return (
    <div className="stepper-parent">
      <div className="stepper-header">
        <div className="stepper-title px-4 flex gap-3 justify-start items-center">
          {currentStep === 1 && (
            <Button variant="text" size="small" onClick={() => navigate(-1)}>
              <HiChevronLeft
                className="text-background-contrastText"
                size={32}
              />
            </Button>
          )}
          {currentStep !== 1 && (
            <Button
              variant="text"
              size="small"
              onClick={() => onStepChange(currentStep - 1)}>
              <HiChevronLeft
                className="text-background-contrastText"
                size={32}
              />
            </Button>
          )}
          <Typography variant="h2">{title}</Typography>
        </div>
        <div className="steps-container w-full px-12 py-4">
          <div className="steps flex justify-start items-center">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
              if (step < totalSteps) {
                return (
                  <div key={step} className="flex justify-start items-center">
                    <Steps
                      color={step === currentStep ? 'primary' : 'secondary'}>
                      {step}
                    </Steps>
                    <div className="step-line w-24 h-[1px] bg-primary-contrastText" />
                  </div>
                );
              }

              return (
                <div key={step}>
                  <Steps color={step === currentStep ? 'primary' : 'secondary'}>
                    {step}
                  </Steps>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full px-12 py-4 flex flex-col justify-between items-center">
        <div className="flex justify-between w-full">{children}</div>
        <div className="step-buttons w-full flex justify-end">
          {currentStep < totalSteps && (
            <Button size="extraLarge" onClick={handleStepChange}>
              Next
            </Button>
          )}
          {currentStep === totalSteps && (
            <Button size="extraLarge" onClick={onStepsComplete}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
