import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";

function WebController() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default WebController;
