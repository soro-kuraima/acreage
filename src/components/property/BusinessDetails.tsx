import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { Control, FieldValues } from 'react-hook-form';

import { RadioInput } from 'components/common';
import { Propertytype, Salestype } from 'models';

interface BusinessDetailsProps<PropertyType extends FieldValues> {
  control: Control<PropertyType>;
}

export function BusinessDetails<PropertyType extends FieldValues>({
  control,
}: BusinessDetailsProps<PropertyType>) {
  return (
    <div className="w-full px-2">
      <Card>
        <div className="mb-8 grid w-full grid-cols-1 items-center justify-between gap-x-10 gap-y-8 p-1 py-8">
          <RadioInput
            name="propertyType"
            control={control}
            className="bg-transparent"
            fullWidth
            label="Select the type of Property"
            options={[
              { value: Propertytype.APARTMENT, label: 'Apartment' },
              { value: Propertytype.VILLA, label: 'Villa' },
              { value: Propertytype.PLOT, label: 'Plot' },
              { value: Propertytype.COMMERCIAL, label: 'Commercial' },
              { value: Propertytype.AGRICULTURAL, label: 'Agricultural' },
            ]}
          />
          <RadioInput
            name="salesType"
            control={control}
            className="bg-transparent"
            fullWidth
            label="Select the sales type"
            options={[
              { value: Salestype.NEW, label: 'New' },
              { value: Salestype.RESALE, label: 'Resale' },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}
