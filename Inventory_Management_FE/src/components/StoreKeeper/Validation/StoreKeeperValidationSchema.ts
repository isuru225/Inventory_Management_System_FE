import * as yup from "yup";

export const StoreKeeperValidationSchema = yup.object().shape({
    amount: yup
        .number()
        .typeError('Amount must be a number')
        .min(0, 'Amount must be at least 0')
        .required('Amount is required'),

    adjustmentType: yup
        .string()
        .matches(/^\d+$/, "Adjustment type must contain only numbers")
        .required("Adjustment type is required"),

    amountAdjusted: yup.number()
        .typeError('Adjusted amount must be a number')
        .required('Adjusted amount is required')
        .when(['amount', 'adjustmentType'], ([amount, adjustmentType], schema) => {
            if (adjustmentType === "0") {
                return schema.max(amount, 'Adjusted amount cannot exceed current amount when stock decreasing');
            } else {
                return schema;
            }
        }
        ),
    reason: yup
        .string()
        .transform((value) => (value === "" ? null : value)) // convert "" → null
        .matches(/^[a-zA-Z0-9 ]*$/, "Comment must be alphanumeric")
        .max(50, "Comment must be at most 50 characters")
        .nullable()
        .notRequired(),
});
