import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExhibitionList from "./pages/ExhibitionList";

// import your data
import exhibitions from "./data/museum.json";

export default function App() {
  const [searchValue, setSearchValue] = useState("");

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
      />

      <main>
        <ExhibitionList exhibitions={filteredExhibitions} />
      </main>

      <Footer />
    </>
  );
}