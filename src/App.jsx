import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExhibitionList from "./pages/ExhibitionList";
import HomePage from "./pages/HomePage";
import VisitPage from "./pages/VisitPage";

// import your data
import exhibitions from "./data/museum.json";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedPlantTag, setSelectedPlantTag] = useState("");

  const handleNavigate = (selectedPage, tag = "") => {
    setPage(selectedPage);
    setSelectedPlantTag(selectedPage === "plants" ? tag : "");
  };

  return (
    <>
      <Header onNavigate={handleNavigate} />

      <main>
        {page === "home" && <HomePage onNavigate={handleNavigate} />}
        {page === "plants" && (
          <ExhibitionList exhibitions={exhibitions} initialFilterTag={selectedPlantTag} />
        )}
        {page === "visit" && <VisitPage />}
      </main>

      <Footer />
    </>
  );
}