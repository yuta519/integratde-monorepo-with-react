import { Route, Routes } from 'react-router-dom';

import NxWelcome from './nx-welcome';

function Home() {
  return <h1>Home</h1>;
}

const Proudcts = () => {
  return <>aaaaaaaaaaaaaaaaaa</>;
};

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="web" />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/products" element={<Proudcts />}></Route>
    </Routes>
  );
}

export default App;
