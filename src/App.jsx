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

  return (
    <>
      <Header onNavigate={(selectedPage) => setPage(selectedPage)} />

      <main>
        {page === "home" && <HomePage />}
        {page === "plants" && <ExhibitionList exhibitions={exhibitions} />}
        {page === "visit" && <VisitPage />}
      </main>

      <Footer />
    </>
  );
}