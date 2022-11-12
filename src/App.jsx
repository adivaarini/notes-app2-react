import { Link, Route, Routes } from "react-router-dom";
import Current from "./pages/CurrentPageAction";
import NotFoundPage from "./pages/NotFoundPage";
import Archives from "./pages/ArchivePageAction";
import ContentNote from "./pages/ContentNotePageAction";
import NewNote from "./pages/NewNotePageAction";
import ActionMenuHeader from "./components/ActionMenuHeader";
import EditNote from "./pages/EditNotePageAction";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">Adiva's Notes App</Link>
        </h1>
        <ActionMenuHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Current />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<ContentNote />} />
          <Route path="/notes/:id/edit" element={<EditNote />} />
          <Route path="*" element={<NotFoundPage  />} /> 
        </Routes>
      </main>
    </div>
  );
};

export default App;