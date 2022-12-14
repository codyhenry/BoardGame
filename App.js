import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { useFonts } from "expo-font";
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
} from "@expo-google-fonts/ubuntu";
import {
  Prompt_400Regular,
  Prompt_500Medium,
  Prompt_700Bold,
} from "@expo-google-fonts/prompt";

import { Text } from "react-native";
//import {AuthenticationContextProvider} from "./src/services/authentication/authentication.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [loadedFonts] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Prompt_400Regular,
    Prompt_500Medium,
    Prompt_700Bold,
  });

  {
    if (loadedFonts) {
      return (
        <ThemeProvider theme={theme}>
          <ExpoStatusBar style="auto" />
          <PaperProvider>
            <AuthenticationContextProvider>
              <Navigation />
            </AuthenticationContextProvider>
          </PaperProvider>
        </ThemeProvider>
      );
    }
  }
}
