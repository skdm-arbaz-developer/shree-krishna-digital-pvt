import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dynamicRoutes from "./components/support/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {dynamicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
