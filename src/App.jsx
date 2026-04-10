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
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState("home");

  const filteredExhibitions = exhibitions.filter((exhibit) =>
    exhibit.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    exhibit.category.toLowerCase().includes(searchValue.toLowerCase()) ||
    exhibit.scientific_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header
        searchValue={searchValue}
        onSearch={(event) => setSearchValue(event.target.value)}
        onNavigate={(selectedPage) => setPage(selectedPage)}
      />

      <main>
        {page === "home" && <HomePage />}
        {page === "plants" && <ExhibitionList exhibitions={filteredExhibitions} />}
        {page === "visit" && <VisitPage />}
      </main>

      <Footer />
    </>
  );
}