import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader";
import { RoutesEnum } from "./contants/RoutesEnum.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const FlatesPage = lazy(() => import("./pages/FlatsPage"));
const Layout = lazy(() => import("./components/Layuot/Layout.jsx"));
const RieltorPage = lazy(() => import("./pages/RieltorPage.jsx"));
const FavoritePage = lazy(() => import("./pages/FavotitePage.jsx"));
const FlatById = lazy(() => import("./pages/FlatById.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesEnum.FLATS} element={<FlatesPage />} />
           <Route path={RoutesEnum.RIELTOR} element={<RieltorPage />} />
           <Route path={RoutesEnum.FAVORITES} element={<FavoritePage />} />
           <Route path={RoutesEnum.FLAT_BY_ID} element={<FlatById />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
