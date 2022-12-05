import { StatusBar as ExpoStatusBar } from "expo-status-bar";
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
import { GamesContextProvider } from "./src/services/games/games.context";
import { CollectionContextProvider } from "./src/services/collections/collections.context";
/*

import { Navigation } from "./src/infrastructure/navigation/index";
*/
import { GamesScreen } from "./src/features/games/screens/games.screen";

export default function App() {
  const [loadedFonts] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Prompt_400Regular,
    Prompt_500Medium,
    Prompt_700Bold,
  });

  return (
    <>
      {!loadedFonts ? (
        <Text>Replace this with splash screen</Text>
      ) : (
        <ThemeProvider theme={theme}>
          <ExpoStatusBar style="auto" />
          <CollectionContextProvider>
            <GamesContextProvider>
              <GamesScreen></GamesScreen>
            </GamesContextProvider>
          </CollectionContextProvider>
        </ThemeProvider>
      )}
    </>
  );
}
