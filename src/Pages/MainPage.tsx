import HeadBand from "../Component/HeadBand/HeadBand";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import RoutesProject from "../Routes/RoutesProject";
import "./MainPage.css";

const MainPage = () => {
  return (
    <main className="main-container">
      <Header />
      <HeadBand />
      <div className="container-pages">
        <RoutesProject />
      </div>
      <Footer />
    </main>
  );
};

export default MainPage;
