import MainContent from "./MainContent";

const SideBar = () => {
  return <div className="w-1/5 bg-white"></div>;
};

const Layout = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Layout;
