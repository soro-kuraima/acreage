import { Direction, Propertytype, Salestype } from 'models';

export type Property = {
  title: string;
  noOfBhk: number;
  price: number;
  builtUpArea: number;
  description: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  ageOfProperty: number;
  propertyType: Propertytype;
  salesType: Salestype;
  facing: Direction;
  amenities: string[];
};
