import SearchSection from "./Components/CompositeComponents/Sections/Search";
import ProfileSection from "./Components/CompositeComponents/Sections/Profile";
import DetailSection from "./Components/CompositeComponents/Sections/Details";

const MainContent = () => {
  return (
    <div className="w-4/5">
      <div className="w-5/6 mx-auto">
        <SearchSection />
        <ProfileSection />
        <DetailSection />
      </div>
    </div>
  );
};

export default MainContent;
