import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from '@aws-amplify/datastore';
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from '@aws-amplify/datastore';

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

type EagerPropertyshare = {
  readonly propertyId?: string | null;
  readonly ownership?: number | null;
};

type LazyPropertyshare = {
  readonly propertyId?: string | null;
  readonly ownership?: number | null;
};

export declare type Propertyshare = LazyLoading extends LazyLoadingDisabled
  ? EagerPropertyshare
  : LazyPropertyshare;

export declare const Propertyshare: new (
  init: ModelInit<Propertyshare>
) => Propertyshare;

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

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly profession?: string | null;
  readonly about?: string | null;
  readonly profilePicture?: string | null;
  readonly properties?: Propertyshare | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly profession?: string | null;
  readonly about?: string | null;
  readonly profilePicture?: string | null;
  readonly properties?: Propertyshare | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Users = LazyLoading extends LazyLoadingDisabled
  ? EagerUsers
  : LazyUsers;

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(
    source: Users,
    mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void
  ): Users;
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
