import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import GlobalStyle from './styles/global';

import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

import { FavoritesContextProvider } from './contexts/FavoritesContext'


function App() {
  return (
    <FavoritesContextProvider>
    <Router>
      <Routes>
        <Route  path="/" element={ <Home /> } />
        <Route path="/favorites"  element= {< Favorites />} />
      </Routes>
      <GlobalStyle />
    </Router>
    </FavoritesContextProvider>
  )
}
 

export default App;
