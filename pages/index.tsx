import { MainLayout } from "../components/Layout";
import { NextPageWithLayout } from "../models/common";

const Home: NextPageWithLayout = () => {
  return <div className="bg-red-400">Home</div>;
};

Home.Layout = MainLayout;

export default Home;
