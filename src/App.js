import { Features, Download, SectionWrapper } from "./components";
import assets from './assets'
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling & Growing"
        Description="Buy, Sell, Exchange, collect and earn NFTs, Join the community of 2+ Million users of MarketPlace."
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="User Friendly Optimize Marketplace"
        Description="Experience a smooth UI of ProNef NFT Marketplace. Fluently Featured, embraces you with the growing familiar communty made with 💜 "
        mockUpImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        Description="Our app is built using Expo which runs natively on all users. You can easily get our app on people hands."
        mockUpImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Elegant Showcase of store"
        Description="The app contains two screens. The first screen lists all NFTs, while the second one shows the description of specific NFT."
        mockUpImg={assets.homeCards}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️  by {" "}
          <span className="bold">
            Prajwal Urkude
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
