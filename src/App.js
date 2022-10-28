import './App.css';
import Wall from "./components/wall/Wall";
import AboutUs from "./pages/aboutUs/AboutUs";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ContactPage from "./pages/contactsPage/ContactsPage";

const App = () => {
  return (
    <div className="App center">
      <AboutUs/>
      <Wall/>
      <PortfolioPage/>
      <Wall/>
      <ContactPage/>
    </div>
  );
}

export default App;