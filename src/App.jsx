import BonusHeader from './components/BonusHeader';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import bg from '../src/assets/images/bg.webp';
import BlockdagApp from './components/BlockdagApp';
import LanguageSwitcher from './components/LanguageSwitcher';
import DevSlider from './components/DevSlider';
import OurSponsors from './components/OurSponsors';
import YoutubeSection from './components/YoutubeSection';
import AboutMe from './components/AboutMe';
import PoweredBy from './components/PoweredBy';
import GridSection from './components/GridSection';
import Invite from './components/Invite';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Sponsors from './components/Sponsors';
import Faqs from './components/Faqs';
import Donate from './components/Donate';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BonusHeader />
      <Header />
      <LanguageSwitcher />
      <main>
        <Hero />
        <BlockdagApp />
        <DevSlider />
        <OurSponsors />
        <YoutubeSection />
        <AboutMe />
        <PoweredBy />
        <GridSection />
        <Invite />
        <Roadmap />
        <Tokenomics />
        <Sponsors />
        <Faqs />
        <Donate />
        <SignUp />

        {/* background */}
        <div
          className="backgroundLayout"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      </main>

      <Footer />
    </>
  );
}

export default App;
