import React, { lazy, Suspense } from "react";
import PrincipalLoader from "./loaders/PrincipalLoader";
import Scene from "./canvas/Scene";
import NavBar from "./components/NavBar";
import Head from "./components/Head";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <>
      {/* Principal content */}
      <Scene />
      <NavBar />
      <Head />
      <div className="bg-leveled-900">
        <Suspense fallback={<PrincipalLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<PrincipalLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<PrincipalLoader />}>
          <Project />
        </Suspense>
        <Suspense fallback={<PrincipalLoader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;
