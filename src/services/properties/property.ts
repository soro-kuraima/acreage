import { DataStore } from 'aws-amplify';
import { FieldValues } from 'react-hook-form';

import { Properties } from 'models';

interface createrPropertyProps {
  data: FieldValues;
  propertyImages: string[];
  userID: string;
}

export class PropertyService {
  static createProperty = async ({
    data,
    propertyImages,
    userID,
  }: createrPropertyProps) => {
    await DataStore.save(
      new Properties({
        title: data.title,
        noOfBhk: data.noOfBhk,
        price: data.price,
        builtUpArea: data.builtUpArea,
        description: data.description,
        address: data.address,
        pincode: data.pincode,
        city: data.city,
        state: data.state,
        ageOfProperty: data.ageOfProperty,
        propertyType: data.propertyType,
        salesType: data.salesType,
        facing: data.facing,
        propertyImages,
        shareHolders: [
          {
            userID,
            ownership: 100.0,
          },
        ],
      })
    );
  };
}
