import MainContent from "./MainContent";

const SideBar = () => {
  return <div className="w-1/5">This is sidebar</div>;
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
