import { Route, Routes } from "react-router";

import "./App.css";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import OrdersPage from "./Pages/OrdersPage";
import TrackingPage from "./Pages/TrackingPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="checkout" element={<Checkout/>}/>
        <Route path="orders" element={<OrdersPage/>}/>
        <Route path="tracking" element={<TrackingPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>

      </Routes>
    </>
  );
}

export default App;
