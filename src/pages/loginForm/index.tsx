import React, {useState} from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Button, Text, View} from 'react-native';
import {styles} from './style';
import {EmailInput, PasswordInput} from '../../components';
import {AuthContext} from '../../../context/auth-context';

interface LoginFormProps {
  handleLogIn: (isOpen: boolean) => void;
}

const LoginForm: React.FunctionComponent<LoginFormProps> = () => {
  const [failedLogIn, setFailedLogIn] = useState(false);
  const {logIn} = React.useContext(AuthContext);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  const handleFormSubmit = (values: any) => {
    setFailedLogIn(false);
    if (
      values.email === 'test123@gmail.com' &&
      values.password === '1234567890'
    ) {
      logIn();
    } else {
      setFailedLogIn(true);
      setTimeout(() => {
        setFailedLogIn(false);
      }, 2000);
    }
  };

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => handleFormSubmit(values)}
      validationSchema={loginValidationSchema}
      onReset={() => setFailedLogIn(false)}>
      {({handleChange, handleSubmit, values, errors, isValid}) => (
        <View>
          <Text style={styles.sectionContainer}>Log in</Text>
          <EmailInput
            onChangeText={handleChange('email')}
            value={values.email}
            error={errors.email}
          />
          <PasswordInput
            error={errors.password}
            onChangeText={handleChange('password')}
            value={values.password}
          />
          {failedLogIn && (
            <Text style={styles.errorMessage}>Invalid Credentials</Text>
          )}
          <View style={styles.logInBtn}>
            <Button title="Submit" onPress={handleSubmit} disabled={!isValid} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
