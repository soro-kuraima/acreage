import * as yup from 'yup';

export const createPropertySchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  noOfBHk: yup.number().max(8).min(1),
  price: yup.number().min(1).required('Price is required'),
  builtUpArea: yup.number().min(1).required('Built up area is required'),
  description: yup.string().required('Description is required'),
  address: yup.string().required('Provide a valid address'),
  pincode: yup
    .number()
    .min(100000)
    .max(999999)
    .required('Please provide a valid pincode'),
  city: yup.string().required('City is Required'),
  state: yup.string().required('State is Required'),
  ageOfProperty: yup.number().required('Age of Property is required'),
  propertyType: yup.string().required('Property type is required'),
  salesType: yup.string().required('Sales type is required'),
  facing: yup.string().required('Facing is required'),
  amenities: yup.array().of(yup.string()),
});
