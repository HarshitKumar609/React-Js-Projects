import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import AiMenu from "./components/AiMenu";
import AboutSection from "./components/AboutSection";

const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <AiMenu />
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
