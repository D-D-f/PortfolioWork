import HeadBand from "../Component/HeadBand/HeadBand";
import Home from "../Component/Home/Home";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <main className="main-container">
      <Header />
      <HeadBand />
      <Home />
      <Footer />
    </main>
  );
};

export default MainPage;
