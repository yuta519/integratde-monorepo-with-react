import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '@integratde-monorepo-with-react/shared-ui';
import { adapters } from '@integratde-monorepo-with-react/adapters';
import NxWelcome from './nx-welcome';

function Home() {
  return <h1>Home</h1>;
}

const Proudcts = () => {
  return <>aaaaaaaaaaaaaaaaaa</>;
};

export function App() {
  adapters();
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<NxWelcome title="web" />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Proudcts />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
