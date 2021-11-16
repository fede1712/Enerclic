import { NavBar } from './components/NavBar/NavBar';
import { AppRouter } from './Router/AppRouter';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
