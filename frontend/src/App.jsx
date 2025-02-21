import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader";
import { RoutesEnum } from "./contants/RoutesEnum.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const FlatesPage = lazy(() => import("./pages/FlatsPage"));
const Layout = lazy(() => import("./components/Layuot/Layout.jsx"));
const RieltorPage = lazy(() => import("./pages/RieltorPage.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesEnum.FLATS} element={<FlatesPage />} />
           <Route path={RoutesEnum.RIELTOR} element={<RieltorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
