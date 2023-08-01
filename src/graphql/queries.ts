/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserAndProperties = /* GraphQL */ `
  query GetUserAndProperties($id: ID!) {
    getUserAndProperties(id: $id) {
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
export const listUserAndProperties = /* GraphQL */ `
  query ListUserAndProperties(
    $filter: ModelUserAndPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAndProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserAndProperties = /* GraphQL */ `
  query SyncUserAndProperties(
    $filter: ModelUserAndPropertiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserAndProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getProperties = /* GraphQL */ `
  query GetProperties($id: ID!) {
    getProperties(id: $id) {
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
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUserAndPropertiesProperties = /* GraphQL */ `
  query GetUserAndPropertiesProperties($id: ID!) {
    getUserAndPropertiesProperties(id: $id) {
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
export const listUserAndPropertiesProperties = /* GraphQL */ `
  query ListUserAndPropertiesProperties(
    $filter: ModelUserAndPropertiesPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAndPropertiesProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userAndPropertiesId
        propertiesId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserAndPropertiesProperties = /* GraphQL */ `
  query SyncUserAndPropertiesProperties(
    $filter: ModelUserAndPropertiesPropertiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserAndPropertiesProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userAndPropertiesId
        propertiesId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userAndPropertiesPropertiesByUserAndPropertiesId = /* GraphQL */ `
  query UserAndPropertiesPropertiesByUserAndPropertiesId(
    $userAndPropertiesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserAndPropertiesPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userAndPropertiesPropertiesByUserAndPropertiesId(
      userAndPropertiesId: $userAndPropertiesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userAndPropertiesId
        propertiesId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const userAndPropertiesPropertiesByPropertiesId = /* GraphQL */ `
  query UserAndPropertiesPropertiesByPropertiesId(
    $propertiesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserAndPropertiesPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userAndPropertiesPropertiesByPropertiesId(
      propertiesId: $propertiesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userAndPropertiesId
        propertiesId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
