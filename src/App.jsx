import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router';

import { UserContext } from './context/UserContext';


// Routes
// components
import Navbar from './views/components/Navbar/Navbar';
// import Footer from './views/components/Footer/Footer';

//pages
import LoginForm from './views/components/forms/LoginForm/LoginForm';
import RegisterForm from './views/components/forms/RegisterForm/RegisterForm';
import AllRecipes from './views/pages/AllRecipes/AllRecipes';

// Test
import Dashboard from './views/pages/HomePage/HomePage';

const App = () => {
  const { user } = useContext(UserContext);
  const [selectedCuisine, setSelectedCuisine] = useState(null);

  
  const handleCuisineClick = (cuisine) => {
    setSelectedCuisine(cuisine);
  }

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Dashboard   handleCuisineClick={handleCuisineClick}/> } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/allrecipes" element={<AllRecipes cuisine={selectedCuisine} />} />

        </Routes>
      {/* <Footer /> */}
    </>

  );
};

export default App;