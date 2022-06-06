import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/:type/:id' element={<PetDetailsPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/pet-details-not-found' element={<PetDetailsNotFound />} />
          <Route path='/:type' element={<HomePage />} />      
          <Route path='/' element={<HomePage />} />      
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
