import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  StyledLottieView,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground location="center">
      <AccountCover />

      <Title>Board Game App</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer />
        <AuthButton
          icon="account-arrow-right-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
