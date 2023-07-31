// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Direction = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST',
  NORTH_EAST: 'NORTH_EAST',
  SOUTH_EAST: 'SOUTH_EAST',
  SOUTH_WEST: 'SOUTH_WEST',
  NORTH_WEST: 'NORTH_WEST',
};

const Salestype = {
  NEW: 'NEW',
  RESALE: 'RESALE',
};

const Propertytype = {
  APARTMENT: 'APARTMENT',
  PLOT: 'PLOT',
  VILLA: 'VILLA',
  COMMERCIAL: 'COMMERCIAL',
  AGRICULTURAL: 'AGRICULTURAL',
};

const { UserProperties, Properties, UserPropertiesProperties, Shareholder } =
  initSchema(schema);

export {
  UserProperties,
  Properties,
  UserPropertiesProperties,
  Direction,
  Salestype,
  Propertytype,
  Shareholder,
};
