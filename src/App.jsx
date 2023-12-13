import React, { lazy, Suspense } from 'react'
import PrincipalLoader from './loaders/PrincipalLoader'


const Scene = lazy(() => import("./canvas/Scene"))

const App = () => {
  return (
    <Suspense fallback={<PrincipalLoader />}>
      <Scene />
    </Suspense>
  )
}

export default App