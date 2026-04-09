import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExhibitionList from "./pages/ExhibitionList";
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/exhibitions" element={<ExhibitionList />} />
{/* Add more routes as you build more pages */}
</Routes>
</BrowserRouter>
);
}
export default App