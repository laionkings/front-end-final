import { useForm } from '../../hooks';
import {
    LoginPageContainer,
    FormContainer
} from './styled';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    Button
  } from '@chakra-ui/react';


export const LoginPage = () => {

    const [ form, onChangeInputs, clearInputs ] = useForm({
        email: "",
        password: ""

    });

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
       <LoginPageContainer>
        <FormContainer>
            <form onSubmit={onSubmit}>
        <FormControl isInvalid={false}>
          <FormLabel>Email</FormLabel>
           <Input name="email" type='email' value={form.email} onChange={onChangeInputs}
           placeholder='email'
            />
            {/* {!isError ? (
           <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
          ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
    </FormControl>
    <Button type='submit' variant="form">Enviar</Button>
            </form>
        </FormContainer>
       </LoginPageContainer>
    )
}