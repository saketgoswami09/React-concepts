import { Route, Routes } from "react-router";

import "./App.css";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="checkout" element={<div>test</div>}/>

      </Routes>
    </>
  );
}

export default App;
