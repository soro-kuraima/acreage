import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { Control, FieldValues } from 'react-hook-form';

import { RadioInput } from 'components/common';
import { Direction } from 'models';

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
              { value: Direction.NORTH, label: 'North' },
              { value: Direction.SOUTH, label: 'South' },
              { value: Direction.EAST, label: 'East' },
              { value: Direction.WEST, label: 'West' },
              { value: Direction.NORTH_EAST, label: 'North East' },
              { value: Direction.NORTH_WEST, label: 'North West' },
              { value: Direction.SOUTH_EAST, label: 'South East' },
              { value: Direction.SOUTH_WEST, label: 'South West' },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
