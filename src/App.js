import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/menu" element={<Main />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
