import { Suspense } from 'react';
import patryk from './patryk.jpeg';
import './App.css';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Donut from './Donut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Co tam Ewla?</h1>
        <a
          className="App-link"
          href="#donut"
        >
          1. Jestem głodna
        </a>
        <a
          className="App-link"
          href="#patryk"
        >
          2. Stęskniłam się
        </a>
      </header>
      <div id="donut">
        <h3>To jeszcze nie jest ładne, ale działa!!</h3>
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Donut />
          </Suspense>
        </Canvas>
      </div>
      <div id="patryk">
        <img src={patryk} />
      </div>
    </div>
  );
}

export default App;
