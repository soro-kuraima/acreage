/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from '@aws-amplify/ui-react';
import {
  getOverrideProps,
  useDataStoreBinding,
} from '@aws-amplify/ui-react/internal';
import {
  Properties,
  UserProperties,
  UserPropertiesProperties,
} from '../models';
import { fetchByPath, validateField } from './utils';
import { DataStore } from 'aws-amplify';
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== '' &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={'7rem'}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: 'pointer',
                  alignItems: 'center',
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? '#B8CEF9' : '',
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}>
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: 'pointer',
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
                      stroke: 'black',
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}>
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}>
            {selectedBadgeIndex !== undefined ? 'Save' : 'Add'}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PropertiesUpdateForm(props) {
  const {
    id: idProp,
    properties: propertiesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: '',
    noOfBhk: '',
    price: '',
    builtUpArea: '',
    description: '',
    address: '',
    pincode: '',
    city: '',
    state: '',
    ageOfProperty: '',
    propertyType: '',
    salesType: '',
    facing: '',
    propertyImages: [],
    shareHolders: [],
    userpropertiess: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [noOfBhk, setNoOfBhk] = React.useState(initialValues.noOfBhk);
  const [price, setPrice] = React.useState(initialValues.price);
  const [builtUpArea, setBuiltUpArea] = React.useState(
    initialValues.builtUpArea
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [pincode, setPincode] = React.useState(initialValues.pincode);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [ageOfProperty, setAgeOfProperty] = React.useState(
    initialValues.ageOfProperty
  );
  const [propertyType, setPropertyType] = React.useState(
    initialValues.propertyType
  );
  const [salesType, setSalesType] = React.useState(initialValues.salesType);
  const [facing, setFacing] = React.useState(initialValues.facing);
  const [propertyImages, setPropertyImages] = React.useState(
    initialValues.propertyImages
  );
  const [shareHolders, setShareHolders] = React.useState(
    initialValues.shareHolders
  );
  const [userpropertiess, setUserpropertiess] = React.useState(
    initialValues.userpropertiess
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertiesRecord
      ? {
          ...initialValues,
          ...propertiesRecord,
          userpropertiess: linkedUserpropertiess,
        }
      : initialValues;
    setTitle(cleanValues.title);
    setNoOfBhk(cleanValues.noOfBhk);
    setPrice(cleanValues.price);
    setBuiltUpArea(cleanValues.builtUpArea);
    setDescription(cleanValues.description);
    setAddress(cleanValues.address);
    setPincode(cleanValues.pincode);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setAgeOfProperty(cleanValues.ageOfProperty);
    setPropertyType(cleanValues.propertyType);
    setSalesType(cleanValues.salesType);
    setFacing(cleanValues.facing);
    setPropertyImages(cleanValues.propertyImages ?? []);
    setCurrentPropertyImagesValue('');
    setShareHolders(
      cleanValues.shareHolders?.map((item) =>
        typeof item === 'string' ? item : JSON.stringify(item)
      ) ?? []
    );
    setCurrentShareHoldersValue('');
    setUserpropertiess(cleanValues.userpropertiess ?? []);
    setCurrentUserpropertiessValue(undefined);
    setCurrentUserpropertiessDisplayValue('');
    setErrors({});
  };
  const [propertiesRecord, setPropertiesRecord] =
    React.useState(propertiesModelProp);
  const [linkedUserpropertiess, setLinkedUserpropertiess] = React.useState([]);
  const canUnlinkUserpropertiess = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Properties, idProp)
        : propertiesModelProp;
      setPropertiesRecord(record);
      const linkedUserpropertiess = record
        ? await Promise.all(
            (
              await record.userpropertiess.toArray()
            ).map((r) => {
              return r.userProperties;
            })
          )
        : [];
      setLinkedUserpropertiess(linkedUserpropertiess);
    };
    queryData();
  }, [idProp, propertiesModelProp]);
  React.useEffect(resetStateValues, [propertiesRecord, linkedUserpropertiess]);
  const [currentPropertyImagesValue, setCurrentPropertyImagesValue] =
    React.useState('');
  const propertyImagesRef = React.createRef();
  const [currentShareHoldersValue, setCurrentShareHoldersValue] =
    React.useState('');
  const shareHoldersRef = React.createRef();
  const [
    currentUserpropertiessDisplayValue,
    setCurrentUserpropertiessDisplayValue,
  ] = React.useState('');
  const [currentUserpropertiessValue, setCurrentUserpropertiessValue] =
    React.useState(undefined);
  const userpropertiessRef = React.createRef();
  const getIDValue = {
    userpropertiess: (r) => JSON.stringify({ id: r?.id }),
  };
  const userpropertiessIdSet = new Set(
    Array.isArray(userpropertiess)
      ? userpropertiess.map((r) => getIDValue.userpropertiess?.(r))
      : getIDValue.userpropertiess?.(userpropertiess)
  );
  const userPropertiesRecords = useDataStoreBinding({
    type: 'collection',
    model: UserProperties,
  }).items;
  const getDisplayValue = {
    userpropertiess: (r) => r?.id,
  };
  const validations = {
    title: [{ type: 'Required' }],
    noOfBhk: [],
    price: [{ type: 'Required' }],
    builtUpArea: [{ type: 'Required' }],
    description: [{ type: 'Required' }],
    address: [{ type: 'Required' }],
    pincode: [{ type: 'Required' }],
    city: [{ type: 'Required' }],
    state: [{ type: 'Required' }],
    ageOfProperty: [{ type: 'Required' }],
    propertyType: [{ type: 'Required' }],
    salesType: [{ type: 'Required' }],
    facing: [{ type: 'Required' }],
    propertyImages: [],
    shareHolders: [{ type: 'Required' }, { type: 'JSON' }],
    userpropertiess: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          noOfBhk,
          price,
          builtUpArea,
          description,
          address,
          pincode,
          city,
          state,
          ageOfProperty,
          propertyType,
          salesType,
          facing,
          propertyImages,
          shareHolders,
          userpropertiess,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === 'string' && value.trim() === '') {
              modelFields[key] = undefined;
            }
          });
          const promises = [];
          const userpropertiessToLinkMap = new Map();
          const userpropertiessToUnLinkMap = new Map();
          const userpropertiessMap = new Map();
          const linkedUserpropertiessMap = new Map();
          userpropertiess.forEach((r) => {
            const count = userpropertiessMap.get(
              getIDValue.userpropertiess?.(r)
            );
            const newCount = count ? count + 1 : 1;
            userpropertiessMap.set(getIDValue.userpropertiess?.(r), newCount);
          });
          linkedUserpropertiess.forEach((r) => {
            const count = linkedUserpropertiessMap.get(
              getIDValue.userpropertiess?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedUserpropertiessMap.set(
              getIDValue.userpropertiess?.(r),
              newCount
            );
          });
          linkedUserpropertiessMap.forEach((count, id) => {
            const newCount = userpropertiessMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                userpropertiessToUnLinkMap.set(id, diffCount);
              }
            } else {
              userpropertiessToUnLinkMap.set(id, count);
            }
          });
          userpropertiessMap.forEach((count, id) => {
            const originalCount = linkedUserpropertiessMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                userpropertiessToLinkMap.set(id, diffCount);
              }
            } else {
              userpropertiessToLinkMap.set(id, count);
            }
          });
          userpropertiessToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const userPropertiesPropertiesRecords = await DataStore.query(
              UserPropertiesProperties,
              (r) =>
                r.and((r) => {
                  return [
                    r.userPropertiesId.eq(recordKeys.id),
                    r.propertiesId.eq(propertiesRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(
                DataStore.delete(userPropertiesPropertiesRecords[i])
              );
            }
          });
          userpropertiessToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new UserPropertiesProperties({
                    properties: propertiesRecord,
                    userProperties: userPropertiesRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            noOfBhk: modelFields.noOfBhk,
            price: modelFields.price,
            builtUpArea: modelFields.builtUpArea,
            description: modelFields.description,
            address: modelFields.address,
            pincode: modelFields.pincode,
            city: modelFields.city,
            state: modelFields.state,
            ageOfProperty: modelFields.ageOfProperty,
            propertyType: modelFields.propertyType,
            salesType: modelFields.salesType,
            facing: modelFields.facing,
            propertyImages: modelFields.propertyImages,
            shareHolders: modelFields.shareHolders.map((s) => JSON.parse(s)),
          };
          promises.push(
            DataStore.save(
              Properties.copyOf(propertiesRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, 'PropertiesUpdateForm')}
      {...rest}>
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks('title', value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks('title', title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, 'title')}></TextField>
      <TextField
        label="No of bhk"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={noOfBhk}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk: value,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.noOfBhk ?? value;
          }
          if (errors.noOfBhk?.hasError) {
            runValidationTasks('noOfBhk', value);
          }
          setNoOfBhk(value);
        }}
        onBlur={() => runValidationTasks('noOfBhk', noOfBhk)}
        errorMessage={errors.noOfBhk?.errorMessage}
        hasError={errors.noOfBhk?.hasError}
        {...getOverrideProps(overrides, 'noOfBhk')}></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price: value,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks('price', value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks('price', price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, 'price')}></TextField>
      <TextField
        label="Built up area"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={builtUpArea}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea: value,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.builtUpArea ?? value;
          }
          if (errors.builtUpArea?.hasError) {
            runValidationTasks('builtUpArea', value);
          }
          setBuiltUpArea(value);
        }}
        onBlur={() => runValidationTasks('builtUpArea', builtUpArea)}
        errorMessage={errors.builtUpArea?.errorMessage}
        hasError={errors.builtUpArea?.hasError}
        {...getOverrideProps(overrides, 'builtUpArea')}></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description: value,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks('description', value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks('description', description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, 'description')}></TextField>
      <TextField
        label="Address"
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address: value,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks('address', value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks('address', address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, 'address')}></TextField>
      <TextField
        label="Pincode"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={pincode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode: value,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.pincode ?? value;
          }
          if (errors.pincode?.hasError) {
            runValidationTasks('pincode', value);
          }
          setPincode(value);
        }}
        onBlur={() => runValidationTasks('pincode', pincode)}
        errorMessage={errors.pincode?.errorMessage}
        hasError={errors.pincode?.hasError}
        {...getOverrideProps(overrides, 'pincode')}></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city: value,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks('city', value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks('city', city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, 'city')}></TextField>
      <TextField
        label="State"
        isRequired={true}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state: value,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks('state', value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks('state', state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, 'state')}></TextField>
      <TextField
        label="Age of property"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={ageOfProperty}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty: value,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.ageOfProperty ?? value;
          }
          if (errors.ageOfProperty?.hasError) {
            runValidationTasks('ageOfProperty', value);
          }
          setAgeOfProperty(value);
        }}
        onBlur={() => runValidationTasks('ageOfProperty', ageOfProperty)}
        errorMessage={errors.ageOfProperty?.errorMessage}
        hasError={errors.ageOfProperty?.hasError}
        {...getOverrideProps(overrides, 'ageOfProperty')}></TextField>
      <SelectField
        label="Property type"
        placeholder="Please select an option"
        isDisabled={false}
        value={propertyType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType: value,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.propertyType ?? value;
          }
          if (errors.propertyType?.hasError) {
            runValidationTasks('propertyType', value);
          }
          setPropertyType(value);
        }}
        onBlur={() => runValidationTasks('propertyType', propertyType)}
        errorMessage={errors.propertyType?.errorMessage}
        hasError={errors.propertyType?.hasError}
        {...getOverrideProps(overrides, 'propertyType')}>
        <option
          children="Apartment"
          value="APARTMENT"
          {...getOverrideProps(overrides, 'propertyTypeoption0')}></option>
        <option
          children="Plot"
          value="PLOT"
          {...getOverrideProps(overrides, 'propertyTypeoption1')}></option>
        <option
          children="Villa"
          value="VILLA"
          {...getOverrideProps(overrides, 'propertyTypeoption2')}></option>
        <option
          children="Commercial"
          value="COMMERCIAL"
          {...getOverrideProps(overrides, 'propertyTypeoption3')}></option>
        <option
          children="Agricultural"
          value="AGRICULTURAL"
          {...getOverrideProps(overrides, 'propertyTypeoption4')}></option>
      </SelectField>
      <SelectField
        label="Sales type"
        placeholder="Please select an option"
        isDisabled={false}
        value={salesType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType: value,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.salesType ?? value;
          }
          if (errors.salesType?.hasError) {
            runValidationTasks('salesType', value);
          }
          setSalesType(value);
        }}
        onBlur={() => runValidationTasks('salesType', salesType)}
        errorMessage={errors.salesType?.errorMessage}
        hasError={errors.salesType?.hasError}
        {...getOverrideProps(overrides, 'salesType')}>
        <option
          children="New"
          value="NEW"
          {...getOverrideProps(overrides, 'salesTypeoption0')}></option>
        <option
          children="Resale"
          value="RESALE"
          {...getOverrideProps(overrides, 'salesTypeoption1')}></option>
      </SelectField>
      <SelectField
        label="Facing"
        placeholder="Please select an option"
        isDisabled={false}
        value={facing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing: value,
              propertyImages,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            value = result?.facing ?? value;
          }
          if (errors.facing?.hasError) {
            runValidationTasks('facing', value);
          }
          setFacing(value);
        }}
        onBlur={() => runValidationTasks('facing', facing)}
        errorMessage={errors.facing?.errorMessage}
        hasError={errors.facing?.hasError}
        {...getOverrideProps(overrides, 'facing')}>
        <option
          children="North"
          value="NORTH"
          {...getOverrideProps(overrides, 'facingoption0')}></option>
        <option
          children="South"
          value="SOUTH"
          {...getOverrideProps(overrides, 'facingoption1')}></option>
        <option
          children="East"
          value="EAST"
          {...getOverrideProps(overrides, 'facingoption2')}></option>
        <option
          children="West"
          value="WEST"
          {...getOverrideProps(overrides, 'facingoption3')}></option>
        <option
          children="North east"
          value="NORTH_EAST"
          {...getOverrideProps(overrides, 'facingoption4')}></option>
        <option
          children="South east"
          value="SOUTH_EAST"
          {...getOverrideProps(overrides, 'facingoption5')}></option>
        <option
          children="South west"
          value="SOUTH_WEST"
          {...getOverrideProps(overrides, 'facingoption6')}></option>
        <option
          children="North west"
          value="NORTH_WEST"
          {...getOverrideProps(overrides, 'facingoption7')}></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages: values,
              shareHolders,
              userpropertiess,
            };
            const result = onChange(modelFields);
            values = result?.propertyImages ?? values;
          }
          setPropertyImages(values);
          setCurrentPropertyImagesValue('');
        }}
        currentFieldValue={currentPropertyImagesValue}
        label={'Property images'}
        items={propertyImages}
        hasError={errors?.propertyImages?.hasError}
        errorMessage={errors?.propertyImages?.errorMessage}
        setFieldValue={setCurrentPropertyImagesValue}
        inputFieldRef={propertyImagesRef}
        defaultFieldValue={''}>
        <TextField
          label="Property images"
          isRequired={false}
          isReadOnly={false}
          value={currentPropertyImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.propertyImages?.hasError) {
              runValidationTasks('propertyImages', value);
            }
            setCurrentPropertyImagesValue(value);
          }}
          onBlur={() =>
            runValidationTasks('propertyImages', currentPropertyImagesValue)
          }
          errorMessage={errors.propertyImages?.errorMessage}
          hasError={errors.propertyImages?.hasError}
          ref={propertyImagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'propertyImages')}></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders: values,
              userpropertiess,
            };
            const result = onChange(modelFields);
            values = result?.shareHolders ?? values;
          }
          setShareHolders(values);
          setCurrentShareHoldersValue('');
        }}
        currentFieldValue={currentShareHoldersValue}
        label={'Share holders'}
        items={shareHolders}
        hasError={errors?.shareHolders?.hasError}
        errorMessage={errors?.shareHolders?.errorMessage}
        setFieldValue={setCurrentShareHoldersValue}
        inputFieldRef={shareHoldersRef}
        defaultFieldValue={''}>
        <TextAreaField
          label="Share holders"
          isRequired={true}
          isReadOnly={false}
          value={currentShareHoldersValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.shareHolders?.hasError) {
              runValidationTasks('shareHolders', value);
            }
            setCurrentShareHoldersValue(value);
          }}
          onBlur={() =>
            runValidationTasks('shareHolders', currentShareHoldersValue)
          }
          errorMessage={errors.shareHolders?.errorMessage}
          hasError={errors.shareHolders?.hasError}
          ref={shareHoldersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'shareHolders')}></TextAreaField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              noOfBhk,
              price,
              builtUpArea,
              description,
              address,
              pincode,
              city,
              state,
              ageOfProperty,
              propertyType,
              salesType,
              facing,
              propertyImages,
              shareHolders,
              userpropertiess: values,
            };
            const result = onChange(modelFields);
            values = result?.userpropertiess ?? values;
          }
          setUserpropertiess(values);
          setCurrentUserpropertiessValue(undefined);
          setCurrentUserpropertiessDisplayValue('');
        }}
        currentFieldValue={currentUserpropertiessValue}
        label={'Userpropertiess'}
        items={userpropertiess}
        hasError={errors?.userpropertiess?.hasError}
        errorMessage={errors?.userpropertiess?.errorMessage}
        getBadgeText={getDisplayValue.userpropertiess}
        setFieldValue={(model) => {
          setCurrentUserpropertiessDisplayValue(
            model ? getDisplayValue.userpropertiess(model) : ''
          );
          setCurrentUserpropertiessValue(model);
        }}
        inputFieldRef={userpropertiessRef}
        defaultFieldValue={''}>
        <Autocomplete
          label="Userpropertiess"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search UserProperties"
          value={currentUserpropertiessDisplayValue}
          options={userPropertiesRecords
            .filter(
              (r) => !userpropertiessIdSet.has(getIDValue.userpropertiess?.(r))
            )
            .map((r) => ({
              id: getIDValue.userpropertiess?.(r),
              label: getDisplayValue.userpropertiess?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserpropertiessValue(
              userPropertiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserpropertiessDisplayValue(label);
            runValidationTasks('userpropertiess', label);
          }}
          onClear={() => {
            setCurrentUserpropertiessDisplayValue('');
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.userpropertiess?.hasError) {
              runValidationTasks('userpropertiess', value);
            }
            setCurrentUserpropertiessDisplayValue(value);
            setCurrentUserpropertiessValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              'userpropertiess',
              currentUserpropertiessDisplayValue
            )
          }
          errorMessage={errors.userpropertiess?.errorMessage}
          hasError={errors.userpropertiess?.hasError}
          ref={userpropertiessRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'userpropertiess')}></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}>
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || propertiesModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || propertiesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
