export const schema = {
  models: {
    UserProperties: {
      name: 'UserProperties',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        UserProperties: {
          name: 'UserProperties',
          isArray: true,
          type: {
            model: 'UserPropertiesProperties',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['userProperties'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'UserProperties',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                groupClaim: 'cognito:groups',
                provider: 'userPools',
                allow: 'groups',
                groups: ['owners'],
                operations: ['read', 'create', 'update', 'delete'],
              },
            ],
          },
        },
      ],
    },
    Properties: {
      name: 'Properties',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        noOfBhk: {
          name: 'noOfBhk',
          isArray: false,
          type: 'Int',
          isRequired: false,
          attributes: [],
        },
        price: {
          name: 'price',
          isArray: false,
          type: 'Float',
          isRequired: true,
          attributes: [],
        },
        builtUpArea: {
          name: 'builtUpArea',
          isArray: false,
          type: 'Float',
          isRequired: true,
          attributes: [],
        },
        description: {
          name: 'description',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        address: {
          name: 'address',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        pincode: {
          name: 'pincode',
          isArray: false,
          type: 'Int',
          isRequired: true,
          attributes: [],
        },
        city: {
          name: 'city',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        state: {
          name: 'state',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        ageOfProperty: {
          name: 'ageOfProperty',
          isArray: false,
          type: 'Float',
          isRequired: true,
          attributes: [],
        },
        propertyType: {
          name: 'propertyType',
          isArray: false,
          type: {
            enum: 'Propertytype',
          },
          isRequired: true,
          attributes: [],
        },
        salesType: {
          name: 'salesType',
          isArray: false,
          type: {
            enum: 'Salestype',
          },
          isRequired: true,
          attributes: [],
        },
        facing: {
          name: 'facing',
          isArray: false,
          type: {
            enum: 'Direction',
          },
          isRequired: true,
          attributes: [],
        },
        propertyImages: {
          name: 'propertyImages',
          isArray: true,
          type: 'String',
          isRequired: false,
          attributes: [],
          isArrayNullable: false,
        },
        shareHolders: {
          name: 'shareHolders',
          isArray: true,
          type: {
            nonModel: 'Shareholder',
          },
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
        },
        userpropertiess: {
          name: 'userpropertiess',
          isArray: true,
          type: {
            model: 'UserPropertiesProperties',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['properties'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Properties',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    UserPropertiesProperties: {
      name: 'UserPropertiesProperties',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        userPropertiesId: {
          name: 'userPropertiesId',
          isArray: false,
          type: 'ID',
          isRequired: false,
          attributes: [],
        },
        propertiesId: {
          name: 'propertiesId',
          isArray: false,
          type: 'ID',
          isRequired: false,
          attributes: [],
        },
        userProperties: {
          name: 'userProperties',
          isArray: false,
          type: {
            model: 'UserProperties',
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['userPropertiesId'],
          },
        },
        properties: {
          name: 'properties',
          isArray: false,
          type: {
            model: 'Properties',
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['propertiesId'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'UserPropertiesProperties',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byUserProperties',
            fields: ['userPropertiesId'],
          },
        },
        {
          type: 'key',
          properties: {
            name: 'byProperties',
            fields: ['propertiesId'],
          },
        },
      ],
    },
  },
  enums: {
    Direction: {
      name: 'Direction',
      values: [
        'NORTH',
        'SOUTH',
        'EAST',
        'WEST',
        'NORTH_EAST',
        'SOUTH_EAST',
        'SOUTH_WEST',
        'NORTH_WEST',
      ],
    },
    Salestype: {
      name: 'Salestype',
      values: ['NEW', 'RESALE'],
    },
    Propertytype: {
      name: 'Propertytype',
      values: ['APARTMENT', 'PLOT', 'VILLA', 'COMMERCIAL', 'AGRICULTURAL'],
    },
  },
  nonModels: {
    Shareholder: {
      name: 'Shareholder',
      fields: {
        userID: {
          name: 'userID',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        ownership: {
          name: 'ownership',
          isArray: false,
          type: 'Float',
          isRequired: true,
          attributes: [],
        },
      },
    },
  },
  codegenVersion: '3.4.4',
  version: '9c0d5f21b6a96959f9028d135db43547',
};
