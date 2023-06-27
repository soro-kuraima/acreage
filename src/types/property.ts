export type PropertyOwnerInput = {
  owner: number;
  units: number;
};

export type PropertyOwner = {
  owner: number;
  units: number;
  englishName: string;
  nationalId: string;
  email: string;
};

export type CreatePropertyFormType = {
  propertyLongName: string;
  propertyTradingName: string;
  propertyDescription: string;
  serviceType: number;
  propertyType: number;
  totalUnits: number;
  initialUnitPrice: number;
  yieldPercent: number;
  propertyOwners: PropertyOwnerInput;
};

export type ServiceType = {
  id: number;
  name: string;
  arName: string;
};

export type PropertyType = {
  id: number;
  name: string;
  arName: string;
};
