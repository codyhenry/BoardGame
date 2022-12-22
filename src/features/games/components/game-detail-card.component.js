import { DetailCardToRender } from "./game-detail.component";

export const GameDetail = ({ route }) => {
  const { category, game } = route.params;

  return <>{DetailCardToRender(category, game)}</>;

  // return <View>{DetailCardToRender(category, item)}</View>;
};
