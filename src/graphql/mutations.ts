/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserAndProperties = /* GraphQL */ `
  mutation CreateUserAndProperties(
    $input: CreateUserAndPropertiesInput!
    $condition: ModelUserAndPropertiesConditionInput
  ) {
    createUserAndProperties(input: $input, condition: $condition) {
      id
      userAndProperties {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUserAndProperties = /* GraphQL */ `
  mutation UpdateUserAndProperties(
    $input: UpdateUserAndPropertiesInput!
    $condition: ModelUserAndPropertiesConditionInput
  ) {
    updateUserAndProperties(input: $input, condition: $condition) {
      id
      userAndProperties {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUserAndProperties = /* GraphQL */ `
  mutation DeleteUserAndProperties(
    $input: DeleteUserAndPropertiesInput!
    $condition: ModelUserAndPropertiesConditionInput
  ) {
    deleteUserAndProperties(input: $input, condition: $condition) {
      id
      userAndProperties {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createProperties = /* GraphQL */ `
  mutation CreateProperties(
    $input: CreatePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    createProperties(input: $input, condition: $condition) {
      id
      title
      noOfBhk
      price
      builtUpArea
      description
      address
      pincode
      city
      state
      ageOfProperty
      propertyType
      salesType
      facing
      propertyImages
      shareHolders {
        userID
        ownership
        __typename
      }
      userpropertiess {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateProperties = /* GraphQL */ `
  mutation UpdateProperties(
    $input: UpdatePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    updateProperties(input: $input, condition: $condition) {
      id
      title
      noOfBhk
      price
      builtUpArea
      description
      address
      pincode
      city
      state
      ageOfProperty
      propertyType
      salesType
      facing
      propertyImages
      shareHolders {
        userID
        ownership
        __typename
      }
      userpropertiess {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteProperties = /* GraphQL */ `
  mutation DeleteProperties(
    $input: DeletePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    deleteProperties(input: $input, condition: $condition) {
      id
      title
      noOfBhk
      price
      builtUpArea
      description
      address
      pincode
      city
      state
      ageOfProperty
      propertyType
      salesType
      facing
      propertyImages
      shareHolders {
        userID
        ownership
        __typename
      }
      userpropertiess {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createUserAndPropertiesProperties = /* GraphQL */ `
  mutation CreateUserAndPropertiesProperties(
    $input: CreateUserAndPropertiesPropertiesInput!
    $condition: ModelUserAndPropertiesPropertiesConditionInput
  ) {
    createUserAndPropertiesProperties(input: $input, condition: $condition) {
      id
      userAndPropertiesId
      propertiesId
      userAndProperties {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      properties {
        id
        title
        noOfBhk
        price
        builtUpArea
        description
        address
        pincode
        city
        state
        ageOfProperty
        propertyType
        salesType
        facing
        propertyImages
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateUserAndPropertiesProperties = /* GraphQL */ `
  mutation UpdateUserAndPropertiesProperties(
    $input: UpdateUserAndPropertiesPropertiesInput!
    $condition: ModelUserAndPropertiesPropertiesConditionInput
  ) {
    updateUserAndPropertiesProperties(input: $input, condition: $condition) {
      id
      userAndPropertiesId
      propertiesId
      userAndProperties {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      properties {
        id
        title
        noOfBhk
        price
        builtUpArea
        description
        address
        pincode
        city
        state
        ageOfProperty
        propertyType
        salesType
        facing
        propertyImages
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteUserAndPropertiesProperties = /* GraphQL */ `
  mutation DeleteUserAndPropertiesProperties(
    $input: DeleteUserAndPropertiesPropertiesInput!
    $condition: ModelUserAndPropertiesPropertiesConditionInput
  ) {
    deleteUserAndPropertiesProperties(input: $input, condition: $condition) {
      id
      userAndPropertiesId
      propertiesId
      userAndProperties {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      properties {
        id
        title
        noOfBhk
        price
        builtUpArea
        description
        address
        pincode
        city
        state
        ageOfProperty
        propertyType
        salesType
        facing
        propertyImages
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
