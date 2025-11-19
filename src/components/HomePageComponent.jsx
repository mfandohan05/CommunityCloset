import HomePageMainCard from "./HomePageMainCard";
import WhyCCComponent from "./WhyCCComponent";
import HowItWorksComponent from "./HowItWorksComponent";
import RecentlyDonatedComponent from "./RecentlyDonatedComponent";
import './HomePageComponent.css'

function HomePageComponent() {

    return (
        <div className='home-page'>
          <HomePageMainCard />
          <WhyCCComponent />
          <HowItWorksComponent />
          <RecentlyDonatedComponent />
        </div>
    );
}
export default HomePageComponent;