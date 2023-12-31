export const schema = {
  models: {
    Users: {
      name: 'Users',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        firstName: {
          name: 'firstName',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        lastName: {
          name: 'lastName',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        profession: {
          name: 'profession',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        about: {
          name: 'about',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        profilePicture: {
          name: 'profilePicture',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        properties: {
          name: 'properties',
          isArray: false,
          type: {
            nonModel: 'Propertyshare',
          },
          isRequired: false,
          attributes: [],
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
      pluralName: 'Users',
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
    Propertyshare: {
      name: 'Propertyshare',
      fields: {
        propertyId: {
          name: 'propertyId',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        ownership: {
          name: 'ownership',
          isArray: false,
          type: 'Float',
          isRequired: false,
          attributes: [],
        },
      },
    },
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
  version: 'aaef91ce1d4fd999145a5d9f5b51370a',
};
