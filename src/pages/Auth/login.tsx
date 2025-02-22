import React, { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginFormInputs } from '../../Interfaces/authentication';
import { useAuthPassword } from '../../hooks/Auth/useAuthPassword';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';

import { AuthContainer, AuthForm, AuthTitle, InputGroup, Label, Input, 
  ErrorMessage, RememberMeContainer, RememberMeCheckbox, 
  ForgotPasswordLink, RememberMeLabel, RememberAndForgotContainer, 
  InputContainer ,InputIcon} from "../../styles/styled/auth.styles";
import Button from '../../components/ui/buttons/button';
import { useAuth } from '../../hooks/Auth/useAuth';

const loginSchema = yup.object().shape({
  email: yup.string().required('El correo es obligatorio').email('Correo inválido'),
  password: yup.string().required('La contraseña es obligatoria'),
  rememberMe: yup.boolean().default(false).transform((value) => value ?? false),
});

const Login: React.FC = () => {
  const methods = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  const { register, handleSubmit, formState: { errors }, setValue } = methods;
  const { showPassword, togglePasswordVisibility } = useAuthPassword();
  const { handleLogin, rememberMe, setRememberMe, email } = useAuth();

  useEffect(() => {
    if (email) {
      setValue("email", email);
      setValue("rememberMe", true); 
      setRememberMe(true);
    } else {
      setValue("rememberMe", false);
      setRememberMe(false);
    }
  }, [email, setValue, setRememberMe]);

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    handleLogin(data.email, data.password, data.rememberMe);
  };

  return (
    <AuthContainer>
    <FormProvider {...methods}>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>Iniciar Sesión</AuthTitle>

        <InputGroup>
          <Label htmlFor="email">Correo Electrónico</Label>
          <InputContainer>
            <InputIcon $position="left">
              <FaEnvelope />
            </InputIcon>
            <Input id="email" type="email" {...register("email")} $hasError={!!errors.email} defaultValue={email} />
          </InputContainer>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Contraseña</Label>
          <InputContainer>
            <Input id="password" type={showPassword ? "text" : "password"} {...register("password")} $hasError={!!errors.password} />
            <InputIcon $position="right" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </InputIcon>
          </InputContainer>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputGroup>

        <RememberAndForgotContainer>
          <RememberMeContainer>
            <RememberMeCheckbox type="checkbox" {...register("rememberMe")} id="rememberMe" checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} />
            <RememberMeLabel htmlFor="rememberMe">Recordar usuario</RememberMeLabel>
          </RememberMeContainer>
            <ForgotPasswordLink href="#">¿Olvidaste tu contraseña?</ForgotPasswordLink>
        </RememberAndForgotContainer>


        <Button type="submit" variant="primary">Ingresar</Button>
      </AuthForm>
    </FormProvider>
  </AuthContainer>
  );
};

export default Login;