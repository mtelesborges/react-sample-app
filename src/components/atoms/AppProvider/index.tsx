import { ChakraProvider } from '@chakra-ui/react';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => <ChakraProvider>{children}</ChakraProvider>;
