import { BasicGameDetailScreen } from "./basic-games/basic-game-detail.screen";
import { WishlistGameDetailScreen } from "./wishlist-games/wishlist-game-detail.screen";
import { SellingGameDetailScreen } from "./selling-games/selling-game-detail.screen";
import { CrowdfundGameDetailScreen } from "./crowdfund-games/crowdfund-game-detail.screen";

export const DetailCardToRender = (type, item) => {
  switch (type) {
    case "basic":
      return <BasicGameDetailScreen game={item} />;
    case "wishlist":
      return <WishlistGameDetailScreen game={item} />;
    case "selling":
      return <SellingGameDetailScreen game={item} />;
    case "crowdfund":
      return <CrowdfundGameDetailScreen game={item} />;
  }
};
