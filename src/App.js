import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Routes className="col-span-5">
        <Route path="/" element={ <Sidebar /> } />
        <Route path="/accordion" element={ <AccordionPage /> } />
        <Route path="/dropdown" element={ <DropdownPage /> } />
        <Route path="/buttons" element={ <ButtonPage /> } />
      </Routes>
    </div>
  );
}

export default App;

