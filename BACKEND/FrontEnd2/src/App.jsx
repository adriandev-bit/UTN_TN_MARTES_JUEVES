import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Asegúrate de importar Route
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/' element={<RegisterScreen />} /> {/* Redirigir a Register por defecto */}
      </Routes>
    </div>
  );
}

export default App;
