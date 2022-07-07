import SearchSection from "./Components/CompositeComponents/Sections/Search";
import ProfileSection from "./Components/CompositeComponents/Sections/Profile";
import DetailSection from "./Components/CompositeComponents/Sections/Details";

import Tabs from "./Components/AtomicComponents/Tabs";

const MainContent = () => {
  return (
    <div className="w-4/5">
      <div className="bg-[#fafbfc]">
        <SearchSection />
      </div>
      <div className="bg-[#fafbfc]">
        <ProfileSection />
        <div className="w-5/6 mx-auto mt-4">
          <Tabs />
        </div>
      </div>
      <div className="bg-[#eff3f8] pb-8">
        <DetailSection />
      </div>
    </div>
  );
};

export default MainContent;
