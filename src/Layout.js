import MainContent from "./MainContent";

const SideBar = () => {
  return <div className="text-3xl">This is sidebar</div>;
};

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Layout;
