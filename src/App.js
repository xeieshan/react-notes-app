import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Welcome from "./pages/Welcome";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact element={<NotesListPage />} />
            <Route path="/welcome" exact element={<Welcome />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
