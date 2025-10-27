import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Result,Modal } from 'antd';
import { Form, Formik } from 'formik';
import { $Input } from '../../components/CustomComponents/index.ts';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';
import { resetPasswordValidationSchema } from './Validations/ResetPasswordValidationSchema.ts';
import { connect, ConnectedProps } from 'react-redux';
import { PasswordResetActions } from '../../actions/PasswordReset/PasswordReset.ts';
import { resetPasswordInitValues, IResetPassword, forgotRequestParams } from './Constants/constants.ts'

type props = propsFromRedux;
type passwordResetRequest = {
  email: string,
  passwordResetToken: string,
  newPassword: string
  confirmedNewPassword: string,
}

const ResetPassword: React.FC<props> = (props) => {

  const { passwordReset, isLoading, data } = props;
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [missingTokenOrEmail, setMissingTokenOrEmail] = useState<boolean>(false);
  const [resetPasswordFail, setResetPasswordFail] = useState<boolean>(false);
  const isInitialRender = useRef(true);

  const email = queryParams.get(forgotRequestParams.EMAIL);
  const passwordResetToken = queryParams.get(forgotRequestParams.PASSWORD_RESET_TOKEN);

  

  

  

  const submit = (value: IResetPassword, actions: any) => {
    
    if (email !== null && passwordResetToken !== null) {
      const requestPayload: passwordResetRequest = {
        ...value,
        email,
        passwordResetToken
      }
      passwordReset(requestPayload);
      actions.resetForm();
    } else {
      setMissingTokenOrEmail(true);
    }

  }

  useEffect(() => {
    if (!isInitialRender && !data?.isSuccessful) {
      setResetPasswordFail(true);
    }else{
      isInitialRender.current = false;
    }
  }, [data])


  return (
    <>
      <div className="reset-wrapper">
        <div className="reset-card">
          <div className="reset-header">
            <div className="reset-icon">
              <LockOutlined />
            </div>
            <h2>Enter your new password</h2>
            <p>Your new password must be different from previous passwords.</p>
          </div>

          <Formik
            initialValues={resetPasswordInitValues}
            onSubmit={submit}
            validationSchema={resetPasswordValidationSchema}
          >
            {() => (
              <Form className="reset-form">
                <$Input
                  label="Enter new password"
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  placeholder="Enter new password"
                  prefix={<LockOutlined />}
                  suffix={
                    showPassword ? (
                      <EyeTwoTone onClick={() => setShowPassword(false)} />
                    ) : (
                      <EyeInvisibleOutlined onClick={() => setShowPassword(true)} />
                    )
                  }
                />
                <br />
                <br />
                <$Input
                  label="Confirm new password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmedNewPassword"
                  placeholder="Confirm new password"
                  prefix={<LockOutlined />}
                  suffix={
                    showConfirmPassword ? (
                      <EyeTwoTone onClick={() => setShowConfirmPassword(false)} />
                    ) : (
                      <EyeInvisibleOutlined onClick={() => setShowConfirmPassword(true)} />
                    )
                  }
                />
                {missingTokenOrEmail ? (
                  <small className="error-msg">
                    *email or token is missing.Please check and try again.
                  </small>
                ) : resetPasswordFail ? (
                  <small className="error-msg">
                    *Password reset failed. Please check and try again.
                  </small>
                ) : null}
                <br />
                <br />
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                  block
                  className="reset-btn"
                >
                  Reset password
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Modal
        open={data?.isSuccessful}
        footer={null}
        closable={false} 
      >
        <Result
          status="success"
          title="Password has been successfully reset!"
          extra={
            <Button type="primary" key="console" onClick={()=>{navigate("/login")}}>
              Go Login
            </Button>
          }
        />
      </Modal>

    </>

  )
}


const mapStatetoProps = (state: any) => {
  const { PasswordResetReducer } = state;
  const { data, isLoading } = PasswordResetReducer;
  return {
    data,
    isLoading
  }
}

const mapDispathToProps = {
  passwordReset: PasswordResetActions.password.reset
}

const connector = connect(mapStatetoProps, mapDispathToProps);
type propsFromRedux = ConnectedProps<typeof connector>;
export default connector(ResetPassword)


