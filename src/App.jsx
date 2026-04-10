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
  const [history, setHistory] = useState([]);

  const handleNavigate = (selectedPage, tag = "") => {
    if (selectedPage === "back") {
      setHistory((prevHistory) => {
        if (prevHistory.length === 0) return prevHistory;

        const { page: previousPage, tag: previousTag = "" } = prevHistory[prevHistory.length - 1];
        setPage(previousPage);
        setSelectedPlantTag(previousPage === "plants" ? previousTag : "");
        return prevHistory.slice(0, -1);
      });
      return;
    }

    setHistory((prevHistory) => {
      const currentEntry = { page, tag: selectedPlantTag };
      if (prevHistory.length === 0 || prevHistory[prevHistory.length - 1].page !== page) {
        return [...prevHistory, currentEntry];
      }
      return prevHistory;
    });

    setPage(selectedPage);
    setSelectedPlantTag(selectedPage === "plants" ? tag : "");
  };

  return (
    <>
      <Header
        onNavigate={handleNavigate}
        canGoBack={history.length > 0}
        currentPage={page}
      />

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