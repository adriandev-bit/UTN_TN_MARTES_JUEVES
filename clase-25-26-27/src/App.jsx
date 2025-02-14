import React from 'react'
import './global.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import WorkspaceScreen from './Screens/WorkspaceScreen'
import EstadosScreen from './Screens/EstadosScreen'
import FomulariosScreen from './Screens/FormulariosScreen'


/* 
Lista de rutas de mi aplicacion
<Routes>
</Routes>

Ruta de mi aplicacion
<Route/>
*/
function App() {
	
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomeScreen/>}/>
				<Route path='/home' element={<HomeScreen/>}/>
				<Route path='/workspace/:workspace_id' element={<WorkspaceScreen/>}/>
				<Route path='/prueba' element={<h1>Hola soy la prueba</h1>}/>
				<Route 
					path='/estados' 
					element={<EstadosScreen/>}
				/>
				<Route 
					path='/formularios' 
					element={<FomulariosScreen/>}
				/>
			</Routes>
		</div>
	)
}

export default App