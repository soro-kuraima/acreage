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
        <div className="stepper-title flex items-center justify-start gap-3 px-4">
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
          <div className="steps flex items-center justify-start">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
              if (step < totalSteps) {
                return (
                  <div key={step} className="flex items-center justify-start">
                    <Steps
                      color={step === currentStep ? 'primary' : 'secondary'}>
                      {step}
                    </Steps>
                    <div className="step-line h-[1px] w-24 bg-primary-contrastText" />
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
      <div className="flex w-full flex-col items-center justify-between px-12 py-4">
        <div className="flex w-full justify-between">{children}</div>
        <div className="step-buttons flex w-full justify-end">
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
