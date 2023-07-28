import React, { useEffect } from 'react';

import { useFormContext } from 'react-hook-form';
import { HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

import { Button, Steps, Typography } from 'components/common';

type StepperProps = {
  totalSteps: number;
  currentStep: number;
  children: React.ReactNode;
  onStepChange: (step: number) => void;
  onStepsComplete: () => void;
  title: string;
  pageFields: string[][];
};

export function Stepper({
  totalSteps,
  currentStep,
  children,
  onStepChange,
  onStepsComplete,
  title,
  pageFields,
}: StepperProps) {
  const navigate = useNavigate();
  const methods = useFormContext();

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const handleStepChange = async () => {
    const isValidInput = await methods.trigger(pageFields?.[currentStep - 1]);
    if (isValidInput) {
      onStepChange(currentStep + 1);
    }
  };

  return (
    <div className="stepper-parent lg:w-3/4">
      <div className="stepper-title flex items-center justify-start gap-3">
        <Button
          variant="text"
          size="small"
          onClick={() => {
            if (currentStep === 1) {
              navigate(-1);
            } else if (currentStep < totalSteps) {
              onStepChange(currentStep - 1);
            }
          }}>
          <HiChevronLeft className="text-background-contrastText" size={32} />
        </Button>

        <Typography variant="h3">{title}</Typography>
      </div>

      <div className="flex lg:flex-col">
        <div className="steps-container py-2">
          <div className="steps items flex flex-col items-center justify-center lg:flex-row lg:justify-start lg:px-12">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => {
              if (step < totalSteps) {
                return (
                  <div
                    key={step}
                    className="flex flex-col items-center justify-center lg:flex-row">
                    <Steps
                      color={step === currentStep ? 'primary' : 'secondary'}>
                      {step}
                    </Steps>
                    <div className="step-line h-24 w-[1px] bg-primary-contrastText lg:h-[1px] lg:w-24" />
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

        <div className="flex w-full flex-1 flex-col items-center justify-center py-4 lg:justify-between lg:px-12 lg:py-24">
          <div className="flex w-full justify-between">{children}</div>
        </div>
      </div>
      <div className="step-buttons flex w-full justify-end">
        <Button
          size="large"
          onClick={() => {
            if (currentStep < totalSteps) {
              handleStepChange();
            } else if (currentStep === totalSteps) {
              onStepsComplete();
            }
          }}>
          {currentStep === totalSteps ? 'Submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
