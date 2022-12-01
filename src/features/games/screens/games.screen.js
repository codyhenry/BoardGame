import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { GameInfoCard } from "../components/game-info-card.component";
export const GamesScreen = () => {
  return (
    <SafeAreaView>
      <Searchbar />
      <GameInfoCard />
    </SafeAreaView>
  );
};
