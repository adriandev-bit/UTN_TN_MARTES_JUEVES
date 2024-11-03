import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import WorkspaceScreen from './Screens/WorkspaceScreen'
import EstadoScreen from './Screens/EstadoScreen'

function App() {

  return (
    <div>
      <Routes>
        <Route path= '/'  element={<HomeScreen/>}/>
        <Route path= '/home' element={<HomeScreen/>}/>
        <Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
        <Route path= '/prueba' element={<h1>Hola soy la prueba</h1>}/>
        <Route path= '/estados' element={<EstadoScreen/>}/>
        </Routes>
    
    </div>
  )
}
export default App