import "./App.css";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
