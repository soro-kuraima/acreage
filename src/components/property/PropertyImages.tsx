import React from 'react';

import { Card } from '@aws-amplify/ui-react';
import { toast } from 'react-hot-toast';

import { DropArea, Typography } from 'components/common';

interface PropertyImagesProps {
  propertyImages: File[];
  setPropertyImages: React.Dispatch<React.SetStateAction<File[]>>;
}

export function PropertyImages({
  propertyImages,
  setPropertyImages,
}: PropertyImagesProps) {
  const previewImages = propertyImages.map((image) =>
    URL.createObjectURL(image)
  );
  const handleImageChange = (files: File[]) => {
    if (files.length + propertyImages.length > 5) {
      toast.error('You can only upload up to 5 images');

      return;
    }
    files.forEach((file) => {
      setPropertyImages((prev) => [...prev, file]);
    });
  };

  return (
    <div className="w-full">
      <Card>
        <div className="my-4">
          <Typography variant="h2">Property Images</Typography>
        </div>
        <DropArea
          fullWidth
          onChange={handleImageChange}
          title="property images"
        />
        <div className="m-4 mb-8 grid grid-cols-5 items-center justify-center gap-x-2 rounded">
          {previewImages?.length > 0 ? (
            previewImages?.map((image) => (
              <div
                className="flex h-20 w-32 items-center rounded border border-primary-main"
                key={image}>
                <img
                  className="h-full w-full rounded object-cover"
                  src={image}
                  alt={image}
                />
              </div>
            ))
          ) : (
            <>
              <div className="h-20 w-32 rounded border border-primary-main" />
              <div className="h-20 w-32 rounded border border-primary-main" />
              <div className="h-20 w-32 rounded border border-primary-main" />
              <div className="h-20 w-32 rounded border border-primary-main" />
              <div className="h-20 w-32 rounded border border-primary-main" />
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
