import * as yup from "yup";

export const forgotPasswordValidationSchema = yup.object().shape({
    registeredEmail: yup.string().test(
        "is-valid-username-or-email",
        "Username must be a registered email address.",
        (value: any) => // Alphanumeric check
            yup.string().email().isValidSync(value) // Email validation check
    )
        .min(1, 'Username must be at least 1 character.')
        .max(50, 'Username must be at most 50 characters.')
        .required("Email is required!"),
}) 
