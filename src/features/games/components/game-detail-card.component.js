import { DetailCardToRender } from "./game-detail.component";

//TODO: fix logic with game-detail.component.js
export const GameDetail = ({ route }) => {
  const { category, game } = route.params;

  return <>{DetailCardToRender(category, game)}</>;

  // return <View>{DetailCardToRender(category, item)}</View>;
};
