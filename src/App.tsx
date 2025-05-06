import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import dynamicRoutes from "./components/support/AppRoute";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CaseStudyView from "./pages/CaseStudyView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {dynamicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
        <Route path="/case-study-view/:id" element={<CaseStudyView />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
