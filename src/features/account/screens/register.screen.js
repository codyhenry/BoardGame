import { useState, useContext } from "react";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  AuthInputFunction,
  Title,
  LoadingIndicator,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer.component";
import { CustomText } from "../../../components/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground location="flex-start">
      <AccountCover />
      <Spacer size="xxl" />
      <Spacer size="xxl" />
      <Title>Board Game App</Title>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          autocomplete="email"
          autoFocus="true"
          keyboardType="email-address"
          onChangeText={(email) => setEmail(email)}
          icon="email-outline"
        />
        <AuthInputFunction
          label="Password"
          value={password}
          textContextType="password"
          secureTextEntry={hidePassword}
          selectTextOnFocus={true}
          onChangeText={(password) => setPassword(password)}
          icon={hidePassword ? "eye-off-outline" : "eye-outline"}
          function={() => setHidePassword(!hidePassword)}
        />
        <AuthInputFunction
          label="Re-Type Password"
          value={repeatedPassword}
          textContextType="password"
          secureTextEntry={hidePassword}
          selectTextOnFocus={true}
          onChangeText={(repeatedPassword) =>
            setRepeatedPassword(repeatedPassword)
          }
          icon={hidePassword ? "eye-off-outline" : "eye-outline"}
          function={() => setHidePassword(!hidePassword)}
        />
        <Spacer />
        {error != "" && <CustomText variant="error">{error}</CustomText>}
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <AuthButton
            icon="account-plus-outline"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
            disabled={email == "" || password == ""}
          >
            Register
          </AuthButton>
        )}
      </AccountContainer>
      <Spacer size="sm" />
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
