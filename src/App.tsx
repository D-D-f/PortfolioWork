import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import RoutesProject from "./Routes/RoutesProject";
import "./App.css";

const App = () => {
  return (
    <div id="pages">
      <Header />
      <RoutesProject />
      <Footer />
    </div>
  );
};

export default App;
