import SearchSection from "./Components/CompositeComponents/SearchSection";
import ProfileSection from "./Components/CompositeComponents/ProfileSection";
import DetailSection from "./Components/CompositeComponents/DetailSection";

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
