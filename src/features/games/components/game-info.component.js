import { BasicGameInfoCard } from "./basic-games/basic-game-card.component";
import { WishlistGameInfoCard } from "./wishlist-games/wishlist-game-card.component";
import { SellingGameInfoCard } from "./selling-games/selling-game-card.component";
import { CrowdfundGameInfoCard } from "./crowdfund-games/crowdfund-game-card.component";

export const InfoCardToRender = (type, item) => {
  switch (type) {
    case "basic":
      return <BasicGameInfoCard game={item} />;
    case "wishlist":
      return <WishlistGameInfoCard game={item} />;
    case "selling":
      return <SellingGameInfoCard game={item} />;
    case "crowdfund":
      return <CrowdfundGameInfoCard game={item} />;
  }
};
