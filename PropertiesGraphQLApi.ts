/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserAndPropertiesInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelUserAndPropertiesConditionInput = {
  and?: Array<ModelUserAndPropertiesConditionInput | null> | null;
  or?: Array<ModelUserAndPropertiesConditionInput | null> | null;
  not?: ModelUserAndPropertiesConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type UserAndProperties = {
  __typename: 'UserAndProperties';
  id: string;
  userAndProperties?: ModelUserAndPropertiesPropertiesConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelUserAndPropertiesPropertiesConnection = {
  __typename: 'ModelUserAndPropertiesPropertiesConnection';
  items: Array<UserAndPropertiesProperties | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type UserAndPropertiesProperties = {
  __typename: 'UserAndPropertiesProperties';
  id: string;
  userAndPropertiesId: string;
  propertiesId: string;
  userAndProperties: UserAndProperties;
  properties: Properties;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type Properties = {
  __typename: 'Properties';
  id: string;
  title: string;
  noOfBhk?: number | null;
  price: number;
  builtUpArea: number;
  description: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  ageOfProperty: number;
  propertyType: PROPERTYTYPE;
  salesType: SALESTYPE;
  facing: DIRECTION;
  propertyImages: Array<string | null>;
  shareHolders: Array<Shareholder>;
  userpropertiess?: ModelUserAndPropertiesPropertiesConnection | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export enum PROPERTYTYPE {
  APARTMENT = 'APARTMENT',
  PLOT = 'PLOT',
  VILLA = 'VILLA',
  COMMERCIAL = 'COMMERCIAL',
  AGRICULTURAL = 'AGRICULTURAL',
}

export enum SALESTYPE {
  NEW = 'NEW',
  RESALE = 'RESALE',
}

export enum DIRECTION {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
  NORTH_EAST = 'NORTH_EAST',
  SOUTH_EAST = 'SOUTH_EAST',
  SOUTH_WEST = 'SOUTH_WEST',
  NORTH_WEST = 'NORTH_WEST',
}

export type Shareholder = {
  __typename: 'Shareholder';
  userID: string;
  ownership: number;
};

export type UpdateUserAndPropertiesInput = {
  id: string;
  _version?: number | null;
};

export type DeleteUserAndPropertiesInput = {
  id: string;
  _version?: number | null;
};

export type CreatePropertiesInput = {
  id?: string | null;
  title: string;
  noOfBhk?: number | null;
  price: number;
  builtUpArea: number;
  description: string;
  address: string;
  pincode: number;
  city: string;
  state: string;
  ageOfProperty: number;
  propertyType: PROPERTYTYPE;
  salesType: SALESTYPE;
  facing: DIRECTION;
  propertyImages: Array<string | null>;
  shareHolders: Array<ShareholderInput>;
  _version?: number | null;
};

export type ShareholderInput = {
  userID: string;
  ownership: number;
};

export type ModelPropertiesConditionInput = {
  title?: ModelStringInput | null;
  noOfBhk?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  builtUpArea?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  pincode?: ModelIntInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  ageOfProperty?: ModelFloatInput | null;
  propertyType?: ModelPROPERTYTYPEInput | null;
  salesType?: ModelSALESTYPEInput | null;
  facing?: ModelDIRECTIONInput | null;
  propertyImages?: ModelStringInput | null;
  and?: Array<ModelPropertiesConditionInput | null> | null;
  or?: Array<ModelPropertiesConditionInput | null> | null;
  not?: ModelPropertiesConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelPROPERTYTYPEInput = {
  eq?: PROPERTYTYPE | null;
  ne?: PROPERTYTYPE | null;
};

export type ModelSALESTYPEInput = {
  eq?: SALESTYPE | null;
  ne?: SALESTYPE | null;
};

export type ModelDIRECTIONInput = {
  eq?: DIRECTION | null;
  ne?: DIRECTION | null;
};

export type UpdatePropertiesInput = {
  id: string;
  title?: string | null;
  noOfBhk?: number | null;
  price?: number | null;
  builtUpArea?: number | null;
  description?: string | null;
  address?: string | null;
  pincode?: number | null;
  city?: string | null;
  state?: string | null;
  ageOfProperty?: number | null;
  propertyType?: PROPERTYTYPE | null;
  salesType?: SALESTYPE | null;
  facing?: DIRECTION | null;
  propertyImages?: Array<string | null> | null;
  shareHolders?: Array<ShareholderInput> | null;
  _version?: number | null;
};

export type DeletePropertiesInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserAndPropertiesPropertiesInput = {
  id?: string | null;
  userAndPropertiesId: string;
  propertiesId: string;
  _version?: number | null;
};

export type ModelUserAndPropertiesPropertiesConditionInput = {
  userAndPropertiesId?: ModelIDInput | null;
  propertiesId?: ModelIDInput | null;
  and?: Array<ModelUserAndPropertiesPropertiesConditionInput | null> | null;
  or?: Array<ModelUserAndPropertiesPropertiesConditionInput | null> | null;
  not?: ModelUserAndPropertiesPropertiesConditionInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateUserAndPropertiesPropertiesInput = {
  id: string;
  userAndPropertiesId?: string | null;
  propertiesId?: string | null;
  _version?: number | null;
};

export type DeleteUserAndPropertiesPropertiesInput = {
  id: string;
  _version?: number | null;
};

export type ModelUserAndPropertiesFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelUserAndPropertiesFilterInput | null> | null;
  or?: Array<ModelUserAndPropertiesFilterInput | null> | null;
  not?: ModelUserAndPropertiesFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelUserAndPropertiesConnection = {
  __typename: 'ModelUserAndPropertiesConnection';
  items: Array<UserAndProperties | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelPropertiesFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  noOfBhk?: ModelIntInput | null;
  price?: ModelFloatInput | null;
  builtUpArea?: ModelFloatInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  pincode?: ModelIntInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  ageOfProperty?: ModelFloatInput | null;
  propertyType?: ModelPROPERTYTYPEInput | null;
  salesType?: ModelSALESTYPEInput | null;
  facing?: ModelDIRECTIONInput | null;
  propertyImages?: ModelStringInput | null;
  and?: Array<ModelPropertiesFilterInput | null> | null;
  or?: Array<ModelPropertiesFilterInput | null> | null;
  not?: ModelPropertiesFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelPropertiesConnection = {
  __typename: 'ModelPropertiesConnection';
  items: Array<Properties | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserAndPropertiesPropertiesFilterInput = {
  id?: ModelIDInput | null;
  userAndPropertiesId?: ModelIDInput | null;
  propertiesId?: ModelIDInput | null;
  and?: Array<ModelUserAndPropertiesPropertiesFilterInput | null> | null;
  or?: Array<ModelUserAndPropertiesPropertiesFilterInput | null> | null;
  not?: ModelUserAndPropertiesPropertiesFilterInput | null;
  _deleted?: ModelBooleanInput | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelSubscriptionUserAndPropertiesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserAndPropertiesFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserAndPropertiesFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionPropertiesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  noOfBhk?: ModelSubscriptionIntInput | null;
  price?: ModelSubscriptionFloatInput | null;
  builtUpArea?: ModelSubscriptionFloatInput | null;
  description?: ModelSubscriptionStringInput | null;
  address?: ModelSubscriptionStringInput | null;
  pincode?: ModelSubscriptionIntInput | null;
  city?: ModelSubscriptionStringInput | null;
  state?: ModelSubscriptionStringInput | null;
  ageOfProperty?: ModelSubscriptionFloatInput | null;
  propertyType?: ModelSubscriptionStringInput | null;
  salesType?: ModelSubscriptionStringInput | null;
  facing?: ModelSubscriptionStringInput | null;
  propertyImages?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionPropertiesFilterInput | null> | null;
  or?: Array<ModelSubscriptionPropertiesFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionUserAndPropertiesPropertiesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  userAndPropertiesId?: ModelSubscriptionIDInput | null;
  propertiesId?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionUserAndPropertiesPropertiesFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserAndPropertiesPropertiesFilterInput | null> | null;
  _deleted?: ModelBooleanInput | null;
};

export type CreateUserAndPropertiesMutationVariables = {
  input: CreateUserAndPropertiesInput;
  condition?: ModelUserAndPropertiesConditionInput | null;
};

export type CreateUserAndPropertiesMutation = {
  createUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateUserAndPropertiesMutationVariables = {
  input: UpdateUserAndPropertiesInput;
  condition?: ModelUserAndPropertiesConditionInput | null;
};

export type UpdateUserAndPropertiesMutation = {
  updateUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteUserAndPropertiesMutationVariables = {
  input: DeleteUserAndPropertiesInput;
  condition?: ModelUserAndPropertiesConditionInput | null;
};

export type DeleteUserAndPropertiesMutation = {
  deleteUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreatePropertiesMutationVariables = {
  input: CreatePropertiesInput;
  condition?: ModelPropertiesConditionInput | null;
};

export type CreatePropertiesMutation = {
  createProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdatePropertiesMutationVariables = {
  input: UpdatePropertiesInput;
  condition?: ModelPropertiesConditionInput | null;
};

export type UpdatePropertiesMutation = {
  updateProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeletePropertiesMutationVariables = {
  input: DeletePropertiesInput;
  condition?: ModelPropertiesConditionInput | null;
};

export type DeletePropertiesMutation = {
  deleteProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type CreateUserAndPropertiesPropertiesMutationVariables = {
  input: CreateUserAndPropertiesPropertiesInput;
  condition?: ModelUserAndPropertiesPropertiesConditionInput | null;
};

export type CreateUserAndPropertiesPropertiesMutation = {
  createUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type UpdateUserAndPropertiesPropertiesMutationVariables = {
  input: UpdateUserAndPropertiesPropertiesInput;
  condition?: ModelUserAndPropertiesPropertiesConditionInput | null;
};

export type UpdateUserAndPropertiesPropertiesMutation = {
  updateUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type DeleteUserAndPropertiesPropertiesMutationVariables = {
  input: DeleteUserAndPropertiesPropertiesInput;
  condition?: ModelUserAndPropertiesPropertiesConditionInput | null;
};

export type DeleteUserAndPropertiesPropertiesMutation = {
  deleteUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type GetUserAndPropertiesQueryVariables = {
  id: string;
};

export type GetUserAndPropertiesQuery = {
  getUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListUserAndPropertiesQueryVariables = {
  filter?: ModelUserAndPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserAndPropertiesQuery = {
  listUserAndProperties?: {
    __typename: 'ModelUserAndPropertiesConnection';
    items: Array<{
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserAndPropertiesQueryVariables = {
  filter?: ModelUserAndPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserAndPropertiesQuery = {
  syncUserAndProperties?: {
    __typename: 'ModelUserAndPropertiesConnection';
    items: Array<{
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetPropertiesQueryVariables = {
  id: string;
};

export type GetPropertiesQuery = {
  getProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListPropertiesQueryVariables = {
  filter?: ModelPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPropertiesQuery = {
  listProperties?: {
    __typename: 'ModelPropertiesConnection';
    items: Array<{
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncPropertiesQueryVariables = {
  filter?: ModelPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncPropertiesQuery = {
  syncProperties?: {
    __typename: 'ModelPropertiesConnection';
    items: Array<{
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type GetUserAndPropertiesPropertiesQueryVariables = {
  id: string;
};

export type GetUserAndPropertiesPropertiesQuery = {
  getUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type ListUserAndPropertiesPropertiesQueryVariables = {
  filter?: ModelUserAndPropertiesPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserAndPropertiesPropertiesQuery = {
  listUserAndPropertiesProperties?: {
    __typename: 'ModelUserAndPropertiesPropertiesConnection';
    items: Array<{
      __typename: 'UserAndPropertiesProperties';
      id: string;
      userAndPropertiesId: string;
      propertiesId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type SyncUserAndPropertiesPropertiesQueryVariables = {
  filter?: ModelUserAndPropertiesPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  lastSync?: number | null;
};

export type SyncUserAndPropertiesPropertiesQuery = {
  syncUserAndPropertiesProperties?: {
    __typename: 'ModelUserAndPropertiesPropertiesConnection';
    items: Array<{
      __typename: 'UserAndPropertiesProperties';
      id: string;
      userAndPropertiesId: string;
      propertiesId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserAndPropertiesPropertiesByUserAndPropertiesIdQueryVariables = {
  userAndPropertiesId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserAndPropertiesPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserAndPropertiesPropertiesByUserAndPropertiesIdQuery = {
  userAndPropertiesPropertiesByUserAndPropertiesId?: {
    __typename: 'ModelUserAndPropertiesPropertiesConnection';
    items: Array<{
      __typename: 'UserAndPropertiesProperties';
      id: string;
      userAndPropertiesId: string;
      propertiesId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type UserAndPropertiesPropertiesByPropertiesIdQueryVariables = {
  propertiesId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserAndPropertiesPropertiesFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type UserAndPropertiesPropertiesByPropertiesIdQuery = {
  userAndPropertiesPropertiesByPropertiesId?: {
    __typename: 'ModelUserAndPropertiesPropertiesConnection';
    items: Array<{
      __typename: 'UserAndPropertiesProperties';
      id: string;
      userAndPropertiesId: string;
      propertiesId: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    } | null>;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
};

export type OnCreateUserAndPropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionUserAndPropertiesFilterInput | null;
};

export type OnCreateUserAndPropertiesSubscription = {
  onCreateUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateUserAndPropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionUserAndPropertiesFilterInput | null;
};

export type OnUpdateUserAndPropertiesSubscription = {
  onUpdateUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteUserAndPropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionUserAndPropertiesFilterInput | null;
};

export type OnDeleteUserAndPropertiesSubscription = {
  onDeleteUserAndProperties?: {
    __typename: 'UserAndProperties';
    id: string;
    userAndProperties?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreatePropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionPropertiesFilterInput | null;
};

export type OnCreatePropertiesSubscription = {
  onCreateProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdatePropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionPropertiesFilterInput | null;
};

export type OnUpdatePropertiesSubscription = {
  onUpdateProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeletePropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionPropertiesFilterInput | null;
};

export type OnDeletePropertiesSubscription = {
  onDeleteProperties?: {
    __typename: 'Properties';
    id: string;
    title: string;
    noOfBhk?: number | null;
    price: number;
    builtUpArea: number;
    description: string;
    address: string;
    pincode: number;
    city: string;
    state: string;
    ageOfProperty: number;
    propertyType: PROPERTYTYPE;
    salesType: SALESTYPE;
    facing: DIRECTION;
    propertyImages: Array<string | null>;
    shareHolders: Array<{
      __typename: 'Shareholder';
      userID: string;
      ownership: number;
    }>;
    userpropertiess?: {
      __typename: 'ModelUserAndPropertiesPropertiesConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnCreateUserAndPropertiesPropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionUserAndPropertiesPropertiesFilterInput | null;
};

export type OnCreateUserAndPropertiesPropertiesSubscription = {
  onCreateUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnUpdateUserAndPropertiesPropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionUserAndPropertiesPropertiesFilterInput | null;
};

export type OnUpdateUserAndPropertiesPropertiesSubscription = {
  onUpdateUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};

export type OnDeleteUserAndPropertiesPropertiesSubscriptionVariables = {
  filter?: ModelSubscriptionUserAndPropertiesPropertiesFilterInput | null;
};

export type OnDeleteUserAndPropertiesPropertiesSubscription = {
  onDeleteUserAndPropertiesProperties?: {
    __typename: 'UserAndPropertiesProperties';
    id: string;
    userAndPropertiesId: string;
    propertiesId: string;
    userAndProperties: {
      __typename: 'UserAndProperties';
      id: string;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    properties: {
      __typename: 'Properties';
      id: string;
      title: string;
      noOfBhk?: number | null;
      price: number;
      builtUpArea: number;
      description: string;
      address: string;
      pincode: number;
      city: string;
      state: string;
      ageOfProperty: number;
      propertyType: PROPERTYTYPE;
      salesType: SALESTYPE;
      facing: DIRECTION;
      propertyImages: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
    };
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null;
};
