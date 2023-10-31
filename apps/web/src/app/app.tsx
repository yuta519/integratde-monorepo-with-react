import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { Header } from '@integratde-monorepo-with-react/shared-ui';
import { adapters } from '@integratde-monorepo-with-react/adapters';
import Articles from './views/articles';
import NxWelcome from './nx-welcome';

export default function App() {
  adapters();
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<NxWelcome title="web" />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
    </ChakraProvider>
  );
}
