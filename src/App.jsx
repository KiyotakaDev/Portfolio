import React, { lazy, Suspense } from "react";
import PrincipalLoader from "./loaders/PrincipalLoader";
import Scene from "./canvas/Scene";
import NavBar from "./components/NavBar";
import Head from "./components/Head";
import Experience from "./components/Experience";

const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <>
      {/* Principal content */}
      <Scene />
      <NavBar />
      <Head />
      <Suspense fallback={<PrincipalLoader />}>
        <div className="bg-leveled-900">
          <About />
          <Experience />
        </div>
      </Suspense>
    </>
  );
};

export default App;
