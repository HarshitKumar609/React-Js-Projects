import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import AboutSection from "./components/AboutSection";
import MenuBar from "../../inotebook/src/components/MenuBar";

const App = () => {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <MenuBar />
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
