import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { Control, FieldValues } from 'react-hook-form';

import { TextInput } from 'components/common';

interface BasicDetailsProps<PropertyType extends FieldValues> {
  control: Control<PropertyType>;
}

export function BasicDetails<PropertyType extends FieldValues>({
  control,
}: BasicDetailsProps<PropertyType>) {
  return (
    <div className="w-full px-2">
      <Card>
        <div className="mb-8 grid w-full grid-cols-1 items-center justify-between gap-x-10 gap-y-8 p-1 py-8 lg:grid-cols-2">
          <TextInput
            name="title"
            type="text"
            control={control}
            placeholder="Enter a title"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="noOfBhk"
            type="number"
            placeholder="No of BHK"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="price"
            type="number"
            control={control}
            placeholder="Enter Price"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="builtUpArea"
            type="number"
            control={control}
            placeholder="Built up area in sq. m"
            className="bg-transparent"
            fullWidth
          />
          <TextInput
            name="description"
            control={control}
            placeholder="Enter Description"
            className="bg-transparent lg:col-span-2"
            fullWidth
            multiline
            rows={4}
          />
        </div>
      </Card>
    </div>
  );
}
