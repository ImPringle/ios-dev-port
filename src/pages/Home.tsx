import SidebarL from "../components/SidebarL";
import Content from "../components/Content";
import SidebarR from "../components/SidebarR";

const Home = () => {
  return (
    <div className="flex h-screen bg-slate-400">
      <SidebarL />
      <Content />
      <SidebarR />
    </div>
  );
};

export default Home;
