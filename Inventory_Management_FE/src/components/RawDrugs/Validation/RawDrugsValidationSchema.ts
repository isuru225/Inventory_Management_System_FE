import * as yup from "yup";

export const RawDrugsValidationSchema = yup.object().shape({
    itemname: yup.string().matches(/^[a-zA-Z]/, 'Item name must be alphanumeric').min(1, 'Item name must have at least 1 characters').max(20, 'Item name must be at most 15 characters').required("Item name is required."),
    expirationdate: yup.string().required("Expiration date is required."),
    category: yup.string().required("Category is required."),
    measurementunit: yup.string().required("Measurement unit is required."),
    amount: yup.number()
        .min(1, 'Amount must be at least 1')
        .required('Amount is required'),
}) 
