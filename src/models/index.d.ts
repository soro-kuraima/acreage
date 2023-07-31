import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from '@aws-amplify/datastore';
// @ts-ignore
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
  AsyncItem,
} from '@aws-amplify/datastore';

export enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
  NORTH_EAST = 'NORTH_EAST',
  SOUTH_EAST = 'SOUTH_EAST',
  SOUTH_WEST = 'SOUTH_WEST',
  NORTH_WEST = 'NORTH_WEST',
}

export enum Salestype {
  NEW = 'NEW',
  RESALE = 'RESALE',
}

export enum Propertytype {
  APARTMENT = 'APARTMENT',
  PLOT = 'PLOT',
  VILLA = 'VILLA',
  COMMERCIAL = 'COMMERCIAL',
  AGRICULTURAL = 'AGRICULTURAL',
}

type EagerShareholder = {
  readonly userID: string;
  readonly ownership: number;
};

type LazyShareholder = {
  readonly userID: string;
  readonly ownership: number;
};

export declare type Shareholder = LazyLoading extends LazyLoadingDisabled
  ? EagerShareholder
  : LazyShareholder;

export declare const Shareholder: new (
  init: ModelInit<Shareholder>
) => Shareholder;

type EagerUserProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProperties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserProperties?: (UserPropertiesProperties | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUserProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProperties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UserProperties: AsyncCollection<UserPropertiesProperties>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type UserProperties = LazyLoading extends LazyLoadingDisabled
  ? EagerUserProperties
  : LazyUserProperties;

export declare const UserProperties: (new (
  init: ModelInit<UserProperties>
) => UserProperties) & {
  copyOf(
    source: UserProperties,
    mutator: (
      draft: MutableModel<UserProperties>
    ) => MutableModel<UserProperties> | void
  ): UserProperties;
};

type EagerProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Properties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly noOfBhk?: number | null;
  readonly price: number;
  readonly builtUpArea: number;
  readonly description: string;
  readonly address: string;
  readonly pincode: number;
  readonly city: string;
  readonly state: string;
  readonly ageOfProperty: number;
  readonly propertyType: Propertytype | keyof typeof Propertytype;
  readonly salesType: Salestype | keyof typeof Salestype;
  readonly facing: Direction | keyof typeof Direction;
  readonly propertyImages: (string | null)[];
  readonly shareHolders: Shareholder[];
  readonly userpropertiess?: (UserPropertiesProperties | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Properties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly noOfBhk?: number | null;
  readonly price: number;
  readonly builtUpArea: number;
  readonly description: string;
  readonly address: string;
  readonly pincode: number;
  readonly city: string;
  readonly state: string;
  readonly ageOfProperty: number;
  readonly propertyType: Propertytype | keyof typeof Propertytype;
  readonly salesType: Salestype | keyof typeof Salestype;
  readonly facing: Direction | keyof typeof Direction;
  readonly propertyImages: (string | null)[];
  readonly shareHolders: Shareholder[];
  readonly userpropertiess: AsyncCollection<UserPropertiesProperties>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Properties = LazyLoading extends LazyLoadingDisabled
  ? EagerProperties
  : LazyProperties;

export declare const Properties: (new (
  init: ModelInit<Properties>
) => Properties) & {
  copyOf(
    source: Properties,
    mutator: (
      draft: MutableModel<Properties>
    ) => MutableModel<Properties> | void
  ): Properties;
};

type EagerUserPropertiesProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPropertiesProperties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userPropertiesId?: string | null;
  readonly propertiesId?: string | null;
  readonly userProperties: UserProperties;
  readonly properties: Properties;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUserPropertiesProperties = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPropertiesProperties, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userPropertiesId?: string | null;
  readonly propertiesId?: string | null;
  readonly userProperties: AsyncItem<UserProperties>;
  readonly properties: AsyncItem<Properties>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type UserPropertiesProperties =
  LazyLoading extends LazyLoadingDisabled
    ? EagerUserPropertiesProperties
    : LazyUserPropertiesProperties;

export declare const UserPropertiesProperties: (new (
  init: ModelInit<UserPropertiesProperties>
) => UserPropertiesProperties) & {
  copyOf(
    source: UserPropertiesProperties,
    mutator: (
      draft: MutableModel<UserPropertiesProperties>
    ) => MutableModel<UserPropertiesProperties> | void
  ): UserPropertiesProperties;
};
