import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { Control, FieldValues } from 'react-hook-form';

import { RadioInput } from 'components/common';

interface FacingProps<PropertyType extends FieldValues> {
  control: Control<PropertyType>;
}

export function Facing<PropertyType extends FieldValues>({
  control,
}: FacingProps<PropertyType>) {
  return (
    <div className="w-full px-2">
      <Card>
        <div className="mb-8 grid w-full grid-cols-1 items-center justify-between gap-x-10 gap-y-8 p-1 py-8">
          <RadioInput
            name="facing"
            control={control}
            className="bg-transparent"
            fullWidth
            label="Select the Direction"
            options={[
              'North',
              'South',
              'East',
              'West',
              'North-East',
              'South-East',
              'South-West',
              'North-West',
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
