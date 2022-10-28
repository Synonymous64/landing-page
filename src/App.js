import { Features, Download, SectionWrapper } from "./components";
import assets from './assets'
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        Description="Buy, Sell, Exchange, collect and earn NFTs, Join the community of 2+ Million user of MarketPlace"
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="User Friendly Optimize Marketplace"
        Description="Experience a smooth UI of ProNef NFT Marketplace. Fluently Featured, embraces you with the growing familiar communty made with 💜 "
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
