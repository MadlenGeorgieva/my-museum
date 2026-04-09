import Layout from "./Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExhibitionList from "./pages/ExhibitionList";

// import your data
import exhibitions from "./data/museum.json";

export default function App() {
  return (
    <Layout>
      <Header />

      <main>
        <ExhibitionList exhibitions={exhibitions} />
      </main>

      <Footer />
    </Layout>
  );
}