import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { CollectionInfoCard } from "../components/collection-info-card.component";
export const CollectionsScreen = () => {
  return (
    <SafeAreaView>
      <Searchbar />
      <CollectionInfoCard />
    </SafeAreaView>
  );
};
