import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Catalog from "./pages/Catalog/Catalog";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { fetchCampers } from "./redux/camper/camperOperation";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
