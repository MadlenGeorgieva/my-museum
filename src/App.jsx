import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExhibitionList from "./pages/ExhibitionList";
import HomePage from "./pages/HomePage";

// import your data
import exhibitions from "./data/museum.json";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [showVisitForm, setShowVisitForm] = useState(false);

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
        onPlanVisit={() => setShowVisitForm(true)}
      />

      <main>
        <HomePage
          showVisitForm={showVisitForm}
          onPlanVisit={() => setShowVisitForm(true)}
          onCloseVisitForm={() => setShowVisitForm(false)}
        />
      </main>

      <Footer />
    </>
  );
}