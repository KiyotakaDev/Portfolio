import React, { lazy, Suspense } from "react";
import PrincipalLoader from "./loaders/PrincipalLoader";

const Scene = lazy(() => import("./canvas/Scene"));
const NavBar = lazy(() => import("./components/NavBar"));
const Head = lazy(() => import("./components/Head"))

const App = () => {
  return (
    <>
    {/* Principal content */}
    <Suspense fallback={<PrincipalLoader />}>
      <Scene />
      <NavBar />
      <Head />
    </Suspense>
    </>
  );
};

export default App;
