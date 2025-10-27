import { ForgotPassword } from "../Constants/Actions/ForgotPassword.ts"

const
    {
        FORGOT_PASSWORD,
        FORGOT_PASSWORD_SUCCESS,
        FORGOT_PASSWORD_FAIL

    } = ForgotPassword


export const forgotPasswordActions = {
    password: {
        forgot: (data: any) => ({

            type: FORGOT_PASSWORD,
            payload: {
                data,
                isLoading: true
            },
        }),
        success: (data: any) => ({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: {
                data,
                isLoading: false,
            },
        }),
        fail: (error: any) => ({
            type: FORGOT_PASSWORD_FAIL,
            payload: {
                error,
                isLoading: false,
            },
        })

    }
}