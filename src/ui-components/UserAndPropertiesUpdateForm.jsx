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
  UserAndProperties,
  Properties,
  UserAndPropertiesProperties,
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
export default function UserAndPropertiesUpdateForm(props) {
  const {
    id: idProp,
    userAndProperties: userAndPropertiesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userAndProperties: [],
  };
  const [userAndProperties, setUserAndProperties] = React.useState(
    initialValues.userAndProperties
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userAndPropertiesRecord
      ? {
          ...initialValues,
          ...userAndPropertiesRecord,
          userAndProperties: linkedUserAndProperties,
        }
      : initialValues;
    setUserAndProperties(cleanValues.userAndProperties ?? []);
    setCurrentUserAndPropertiesValue(undefined);
    setCurrentUserAndPropertiesDisplayValue('');
    setErrors({});
  };
  const [userAndPropertiesRecord, setUserAndPropertiesRecord] = React.useState(
    userAndPropertiesModelProp
  );
  const [linkedUserAndProperties, setLinkedUserAndProperties] = React.useState(
    []
  );
  const canUnlinkUserAndProperties = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserAndProperties, idProp)
        : userAndPropertiesModelProp;
      setUserAndPropertiesRecord(record);
      const linkedUserAndProperties = record
        ? await Promise.all(
            (
              await record.userAndProperties.toArray()
            ).map((r) => {
              return r.properties;
            })
          )
        : [];
      setLinkedUserAndProperties(linkedUserAndProperties);
    };
    queryData();
  }, [idProp, userAndPropertiesModelProp]);
  React.useEffect(resetStateValues, [
    userAndPropertiesRecord,
    linkedUserAndProperties,
  ]);
  const [
    currentUserAndPropertiesDisplayValue,
    setCurrentUserAndPropertiesDisplayValue,
  ] = React.useState('');
  const [currentUserAndPropertiesValue, setCurrentUserAndPropertiesValue] =
    React.useState(undefined);
  const userAndPropertiesRef = React.createRef();
  const getIDValue = {
    userAndProperties: (r) => JSON.stringify({ id: r?.id }),
  };
  const userAndPropertiesIdSet = new Set(
    Array.isArray(userAndProperties)
      ? userAndProperties.map((r) => getIDValue.userAndProperties?.(r))
      : getIDValue.userAndProperties?.(userAndProperties)
  );
  const propertiesRecords = useDataStoreBinding({
    type: 'collection',
    model: Properties,
  }).items;
  const getDisplayValue = {
    userAndProperties: (r) => `${r?.title ? r?.title + ' - ' : ''}${r?.id}`,
  };
  const validations = {
    userAndProperties: [],
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
          userAndProperties,
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
          const userAndPropertiesToLinkMap = new Map();
          const userAndPropertiesToUnLinkMap = new Map();
          const userAndPropertiesMap = new Map();
          const linkedUserAndPropertiesMap = new Map();
          userAndProperties.forEach((r) => {
            const count = userAndPropertiesMap.get(
              getIDValue.userAndProperties?.(r)
            );
            const newCount = count ? count + 1 : 1;
            userAndPropertiesMap.set(
              getIDValue.userAndProperties?.(r),
              newCount
            );
          });
          linkedUserAndProperties.forEach((r) => {
            const count = linkedUserAndPropertiesMap.get(
              getIDValue.userAndProperties?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedUserAndPropertiesMap.set(
              getIDValue.userAndProperties?.(r),
              newCount
            );
          });
          linkedUserAndPropertiesMap.forEach((count, id) => {
            const newCount = userAndPropertiesMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                userAndPropertiesToUnLinkMap.set(id, diffCount);
              }
            } else {
              userAndPropertiesToUnLinkMap.set(id, count);
            }
          });
          userAndPropertiesMap.forEach((count, id) => {
            const originalCount = linkedUserAndPropertiesMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                userAndPropertiesToLinkMap.set(id, diffCount);
              }
            } else {
              userAndPropertiesToLinkMap.set(id, count);
            }
          });
          userAndPropertiesToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const userAndPropertiesPropertiesRecords = await DataStore.query(
              UserAndPropertiesProperties,
              (r) =>
                r.and((r) => {
                  return [
                    r.propertiesId.eq(recordKeys.id),
                    r.userAndPropertiesId.eq(userAndPropertiesRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(
                DataStore.delete(userAndPropertiesPropertiesRecords[i])
              );
            }
          });
          userAndPropertiesToLinkMap.forEach((count, id) => {
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new UserAndPropertiesProperties({
                    userAndProperties: userAndPropertiesRecord,
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
              UserAndProperties.copyOf(userAndPropertiesRecord, (updated) => {
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
      {...getOverrideProps(overrides, 'UserAndPropertiesUpdateForm')}
      {...rest}>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userAndProperties: values,
            };
            const result = onChange(modelFields);
            values = result?.userAndProperties ?? values;
          }
          setUserAndProperties(values);
          setCurrentUserAndPropertiesValue(undefined);
          setCurrentUserAndPropertiesDisplayValue('');
        }}
        currentFieldValue={currentUserAndPropertiesValue}
        label={'User and properties'}
        items={userAndProperties}
        hasError={errors?.userAndProperties?.hasError}
        errorMessage={errors?.userAndProperties?.errorMessage}
        getBadgeText={getDisplayValue.userAndProperties}
        setFieldValue={(model) => {
          setCurrentUserAndPropertiesDisplayValue(
            model ? getDisplayValue.userAndProperties(model) : ''
          );
          setCurrentUserAndPropertiesValue(model);
        }}
        inputFieldRef={userAndPropertiesRef}
        defaultFieldValue={''}>
        <Autocomplete
          label="User and properties"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Properties"
          value={currentUserAndPropertiesDisplayValue}
          options={propertiesRecords
            .filter(
              (r) =>
                !userAndPropertiesIdSet.has(getIDValue.userAndProperties?.(r))
            )
            .map((r) => ({
              id: getIDValue.userAndProperties?.(r),
              label: getDisplayValue.userAndProperties?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserAndPropertiesValue(
              propertiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserAndPropertiesDisplayValue(label);
            runValidationTasks('userAndProperties', label);
          }}
          onClear={() => {
            setCurrentUserAndPropertiesDisplayValue('');
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.userAndProperties?.hasError) {
              runValidationTasks('userAndProperties', value);
            }
            setCurrentUserAndPropertiesDisplayValue(value);
            setCurrentUserAndPropertiesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              'userAndProperties',
              currentUserAndPropertiesDisplayValue
            )
          }
          errorMessage={errors.userAndProperties?.errorMessage}
          hasError={errors.userAndProperties?.hasError}
          ref={userAndPropertiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, 'userAndProperties')}></Autocomplete>
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
          isDisabled={!(idProp || userAndPropertiesModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userAndPropertiesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
