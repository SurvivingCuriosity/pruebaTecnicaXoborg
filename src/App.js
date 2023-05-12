import { PaginaInicio } from "./pages/PaginaInicio";
import { PaginaDetalle } from "./pages/PaginaDetalle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Modal } from "./utils/Modal.js";
const App = () => {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-gray-800">
      <Modal />
      <Router>
        <Routes>
          <Route index exact path="/" element={<PaginaInicio />} />
          <Route exact path="/detalles/:id" element={<PaginaDetalle />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
