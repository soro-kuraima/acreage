/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from '@aws-amplify/ui-react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Users } from '../models';
import { fetchByPath, validateField } from './utils';
import { DataStore } from 'aws-amplify';
export default function UsersUpdateForm(props) {
  const {
    id: idProp,
    users: usersModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: '',
    lastName: '',
    profession: '',
    about: '',
    profilePicture: '',
    properties: '',
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [profession, setProfession] = React.useState(initialValues.profession);
  const [about, setAbout] = React.useState(initialValues.about);
  const [profilePicture, setProfilePicture] = React.useState(
    initialValues.profilePicture
  );
  const [properties, setProperties] = React.useState(initialValues.properties);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersRecord
      ? { ...initialValues, ...usersRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setProfession(cleanValues.profession);
    setAbout(cleanValues.about);
    setProfilePicture(cleanValues.profilePicture);
    setProperties(
      typeof cleanValues.properties === 'string'
        ? cleanValues.properties
        : JSON.stringify(cleanValues.properties)
    );
    setErrors({});
  };
  const [usersRecord, setUsersRecord] = React.useState(usersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Users, idProp)
        : usersModelProp;
      setUsersRecord(record);
    };
    queryData();
  }, [idProp, usersModelProp]);
  React.useEffect(resetStateValues, [usersRecord]);
  const validations = {
    firstName: [],
    lastName: [],
    profession: [],
    about: [],
    profilePicture: [],
    properties: [{ type: 'JSON' }],
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
          firstName,
          lastName,
          profession,
          about,
          profilePicture,
          properties,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          const modelFieldsToSave = {
            firstName: modelFields.firstName,
            lastName: modelFields.lastName,
            profession: modelFields.profession,
            about: modelFields.about,
            profilePicture: modelFields.profilePicture,
            properties: modelFields.properties
              ? JSON.parse(modelFields.properties)
              : modelFields.properties,
          };
          await DataStore.save(
            Users.copyOf(usersRecord, (updated) => {
              Object.assign(updated, modelFieldsToSave);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, 'UsersUpdateForm')}
      {...rest}>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              profession,
              about,
              profilePicture,
              properties,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks('firstName', value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks('firstName', firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, 'firstName')}></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              profession,
              about,
              profilePicture,
              properties,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks('lastName', value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks('lastName', lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, 'lastName')}></TextField>
      <TextField
        label="Profession"
        isRequired={false}
        isReadOnly={false}
        value={profession}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              profession: value,
              about,
              profilePicture,
              properties,
            };
            const result = onChange(modelFields);
            value = result?.profession ?? value;
          }
          if (errors.profession?.hasError) {
            runValidationTasks('profession', value);
          }
          setProfession(value);
        }}
        onBlur={() => runValidationTasks('profession', profession)}
        errorMessage={errors.profession?.errorMessage}
        hasError={errors.profession?.hasError}
        {...getOverrideProps(overrides, 'profession')}></TextField>
      <TextField
        label="About"
        isRequired={false}
        isReadOnly={false}
        value={about}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              profession,
              about: value,
              profilePicture,
              properties,
            };
            const result = onChange(modelFields);
            value = result?.about ?? value;
          }
          if (errors.about?.hasError) {
            runValidationTasks('about', value);
          }
          setAbout(value);
        }}
        onBlur={() => runValidationTasks('about', about)}
        errorMessage={errors.about?.errorMessage}
        hasError={errors.about?.hasError}
        {...getOverrideProps(overrides, 'about')}></TextField>
      <TextField
        label="Profile picture"
        isRequired={false}
        isReadOnly={false}
        value={profilePicture}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              profession,
              about,
              profilePicture: value,
              properties,
            };
            const result = onChange(modelFields);
            value = result?.profilePicture ?? value;
          }
          if (errors.profilePicture?.hasError) {
            runValidationTasks('profilePicture', value);
          }
          setProfilePicture(value);
        }}
        onBlur={() => runValidationTasks('profilePicture', profilePicture)}
        errorMessage={errors.profilePicture?.errorMessage}
        hasError={errors.profilePicture?.hasError}
        {...getOverrideProps(overrides, 'profilePicture')}></TextField>
      <TextAreaField
        label="Properties"
        isRequired={false}
        isReadOnly={false}
        value={properties}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              profession,
              about,
              profilePicture,
              properties: value,
            };
            const result = onChange(modelFields);
            value = result?.properties ?? value;
          }
          if (errors.properties?.hasError) {
            runValidationTasks('properties', value);
          }
          setProperties(value);
        }}
        onBlur={() => runValidationTasks('properties', properties)}
        errorMessage={errors.properties?.errorMessage}
        hasError={errors.properties?.hasError}
        {...getOverrideProps(overrides, 'properties')}></TextAreaField>
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
          isDisabled={!(idProp || usersModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
