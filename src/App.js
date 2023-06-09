// import { HashRouter, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/react-portfolio/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
