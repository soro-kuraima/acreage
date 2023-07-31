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
  Text,
  useTheme,
} from '@aws-amplify/ui-react';
import {
  getOverrideProps,
  useDataStoreBinding,
} from '@aws-amplify/ui-react/internal';
import {
  UserProperties as UserProperties0,
  Properties,
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
export default function UserPropertiesUpdateForm(props) {
  const {
    id: idProp,
    userProperties: userPropertiesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    UserProperties: [],
  };
  const [userProperties, setUserProperties] = React.useState(
    initialValues.UserProperties
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userPropertiesRecord
      ? {
          ...initialValues,
          ...userPropertiesRecord,
          userProperties: linkedUserProperties,
        }
      : initialValues;
    setUserProperties(cleanValues.UserProperties ?? []);
    setCurrentUserPropertiesValue(undefined);
    setCurrentUserPropertiesDisplayValue('');
    setErrors({});
  };
  const [userPropertiesRecord, setUserPropertiesRecord] = React.useState(
    userPropertiesModelProp
  );
  const [linkedUserProperties, setLinkedUserProperties] = React.useState([]);
  const canUnlinkUserProperties = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserProperties0, idProp)
        : userPropertiesModelProp;
      setUserPropertiesRecord(record);
      const linkedUserProperties = record
        ? await Promise.all(
            (
              await record.userProperties.toArray()
            ).map((r) => {
              return r.properties;
            })
          )
        : [];
      setLinkedUserProperties(linkedUserProperties);
    };
    queryData();
  }, [idProp, userPropertiesModelProp]);
  React.useEffect(resetStateValues, [
    userPropertiesRecord,
    linkedUserProperties,
  ]);
  const [
    currentUserPropertiesDisplayValue,
    setCurrentUserPropertiesDisplayValue,
  ] = React.useState('');
  const [currentUserPropertiesValue, setCurrentUserPropertiesValue] =
    React.useState(undefined);
  const userPropertiesRef = React.createRef();
  const getIDValue = {
    UserProperties: (r) => JSON.stringify({ id: r?.id }),
  };
  const userPropertiesIdSet = new Set(
    Array.isArray(userProperties)
      ? userProperties.map((r) => getIDValue.userProperties?.(r))
      : getIDValue.userProperties?.(userProperties)
  );
  const propertiesRecords = useDataStoreBinding({
    type: 'collection',
    model: Properties,
  }).items;
  const getDisplayValue = {
    UserProperties: (r) => `${r?.title ? r?.title + ' - ' : ''}${r?.id}`,
  };
  const validations = {
    UserProperties: [],
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
          UserProperties: userProperties,
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
          const userPropertiesToLinkMap = new Map();
          const userPropertiesToUnLinkMap = new Map();
          const userPropertiesMap = new Map();
          const linkedUserPropertiesMap = new Map();
          userProperties.forEach((r) => {
            const count = userPropertiesMap.get(getIDValue.userProperties?.(r));
            const newCount = count ? count + 1 : 1;
            userPropertiesMap.set(getIDValue.userProperties?.(r), newCount);
          });
          linkedUserProperties.forEach((r) => {
            const count = linkedUserPropertiesMap.get(
              getIDValue.userProperties?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedUserPropertiesMap.set(
              getIDValue.userProperties?.(r),
              newCount
            );
          });
          linkedUserPropertiesMap.forEach((count, id) => {
            const newCount = userPropertiesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                userPropertiesToUnLinkMap.set(id, diffCount);
              }
            } else {
              userPropertiesToUnLinkMap.set(id, count);
            }
          });
          userPropertiesMap.forEach((count, id) => {
            const originalCount = linkedUserPropertiesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                userPropertiesToLinkMap.set(id, diffCount);
              }
            } else {
              userPropertiesToLinkMap.set(id, count);
            }
          });
          userPropertiesToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const userPropertiesPropertiesRecords = await DataStore.query(
              UserPropertiesProperties,
              (r) =>
                r.and((r) => {
                  return [
                    r.propertiesId.eq(recordKeys.id),
                    r.userPropertiesId.eq(userProperties0Record.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(
                DataStore.delete(userPropertiesPropertiesRecords[i])
              );
            }
          });
          userPropertiesToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new UserPropertiesProperties({
                    userProperties: userProperties0Record,
                    properties: propertiesRecords.find((r) =>
                      Object.entries(JSON.parse(id)).every(
                        ([key, value]) => r[key] === value
                      )
                    ),
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {};
          promises.push(
            DataStore.save(
              UserProperties0.copyOf(userPropertiesRecord, (updated) => {
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
      {...getOverrideProps(overrides, 'UserPropertiesUpdateForm')}
      {...rest}>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              UserProperties: values,
            };
            const result = onChange(modelFields);
            values = result?.UserProperties ?? values;
          }
          setUserProperties(values);
          setCurrentUserPropertiesValue(undefined);
          setCurrentUserPropertiesDisplayValue('');
        }}
        currentFieldValue={currentUserPropertiesValue}
        label={'User properties'}
        items={userProperties}
        hasError={errors?.UserProperties?.hasError}
        errorMessage={errors?.UserProperties?.errorMessage}
        getBadgeText={getDisplayValue.UserProperties}
        setFieldValue={(model) => {
          setCurrentUserPropertiesDisplayValue(
            model ? getDisplayValue.UserProperties(model) : ''
          );
          setCurrentUserPropertiesValue(model);
        }}
        inputFieldRef={userPropertiesRef}
        defaultFieldValue={''}>
        <Autocomplete
          label="User properties"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Properties"
          value={currentUserPropertiesDisplayValue}
          options={propertiesRecords
            .filter(
              (r) => !userPropertiesIdSet.has(getIDValue.userProperties?.(r))
            )
            .map((r) => ({
              id: getIDValue.userProperties?.(r),
              label: getDisplayValue.userProperties?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserPropertiesValue(
              propertiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserPropertiesDisplayValue(label);
            runValidationTasks('UserProperties', label);
          }}
          onClear={() => {
            setCurrentUserPropertiesDisplayValue('');
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.UserProperties?.hasError) {
              runValidationTasks('UserProperties', value);
            }
            setCurrentUserPropertiesDisplayValue(value);
            setCurrentUserPropertiesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              'UserProperties',
              currentUserPropertiesDisplayValue
            )
          }
          errorMessage={errors.UserProperties?.errorMessage}
          hasError={errors.UserProperties?.hasError}
          ref={userPropertiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'UserProperties')}></Autocomplete>
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
          isDisabled={!(idProp || userPropertiesModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userPropertiesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
