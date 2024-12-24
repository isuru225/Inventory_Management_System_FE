import * as yup from "yup";

export const StoreKeeperValidationSchema = yup.object().shape({
    adjustmentType : yup.string()
    .matches(/^\d+$/, "The string must contain only numbers")
    .required("This field is required"),
    amountAdjusted : yup.number()
    .min(0, 'Adjusted amount must be at least 0')
    .required('Adjusted amount is required'),
    comment : yup.string()
    .matches(/^[a-zA-Z]/, 'comment must be alphanumeric')
    .min(1, 'comment must have at least 1 characters')
    .max(50, 'Comment must be at most 20 characters').notRequired(),
}) 
