import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { Control, FieldValues } from 'react-hook-form';

import { TextInput } from 'components/common';

interface LocationDetailsProps<PropertyType extends FieldValues> {
  control: Control<PropertyType>;
}

export function LocationDetails<PropertyType extends FieldValues>({
  control,
}: LocationDetailsProps<PropertyType>) {
  return (
    <div className="w-full px-2">
      <Card>
        <div className="mb-8 grid w-full grid-cols-1 items-center justify-between gap-x-10 gap-y-8 p-1 py-8 lg:grid-cols-2">
          <TextInput
            name="address"
            type="text"
            control={control}
            placeholder="Enter address"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="pincode"
            type="number"
            placeholder="Enter Pincode"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="city"
            type="text"
            control={control}
            placeholder="Enter City"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="state"
            type="text"
            placeholder="Enter State"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="ageOfProperty"
            type="number"
            control={control}
            placeholder="Age Of Property"
            className="bg-transparent"
            fullWidth
          />
        </div>
      </Card>
    </div>
  );
}
