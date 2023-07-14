import './App.css';
import { AppProvider } from './components/atoms/AppProvider';
import { Menu } from './components/organisms/Menu';
import { useMenu } from './hooks';

function App() {
  const menus = useMenu();

  return (
    <AppProvider>
      <Menu menus={menus} />
    </AppProvider>
  );
}

export default App;
