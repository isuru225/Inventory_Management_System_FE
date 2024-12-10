import * as yup from "yup";

export const RawDrugsValidationSchema = yup.object().shape({
    itemName: yup.string().matches(/^[a-zA-Z]/, 'Item name must be alphanumeric').min(1, 'Item name must have at least 1 characters').max(20, 'Item name must be at most 15 characters').required("Item name is required."),
    expirationDate: yup.string().required("Expiration date is required."),
    category: yup.string().required("Category is required."),
    measurementUnit: yup.string().required("Measurement unit is required."),
    amount: yup.number()
        .min(1, 'Amount must be at least 1')
        .required('Amount is required'),
}) 

export const EditDrugValidationSchema = yup.object().shape({
    itemNameEdit: yup.string().matches(/^[a-zA-Z]/, 'Item name must be alphanumeric').min(1, 'Item name must have at least 1 characters').max(20, 'Item name must be at most 15 characters').required("Item name is required."),
    expirationDateEdit: yup.string().required('Expiration date is required'),
    categoryEdit: yup.string().required('Category is required'),
    measurementUnitEdit: yup.string().required('Measurement unit is required'),
    amountEdit: yup.number().required('Amount is required').min(1, 'Amount must be at least one')
  });
