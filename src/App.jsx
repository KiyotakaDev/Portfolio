import React, { lazy, Suspense } from "react";
import PrincipalLoader from "./loaders/PrincipalLoader";

const Scene = lazy(() => import("./canvas/Scene"));
const NavBar = lazy(() => import("./components/NavBar"));

const App = () => {
  return (
    <Suspense fallback={<PrincipalLoader />}>
      <Scene />
      <NavBar />
    </Suspense>
  );
};

export default App;
