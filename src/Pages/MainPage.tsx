import HeadBand from "../Component/HeadBand/HeadBand";
import Home from "../Component/Home/Home";
import "./MainPage.css";

const MainPage = () => {
  return (
    <main className="main-container">
      <HeadBand />
      <Home />
    </main>
  );
};

export default MainPage;
