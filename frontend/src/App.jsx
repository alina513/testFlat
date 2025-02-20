import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { Loader } from "./components/Loader";
import { RoutesEnum } from "./contants/RoutesEnum.jsx";

const HomePage = lazy(() => import("./pages/HomePage"));
const FlatesPage = lazy(() => import("./pages/FlatsPage"));
const Layout = lazy(() => import("./components/Layuot/Layout.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={RoutesEnum.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={RoutesEnum.FLATS} element={<FlatesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
