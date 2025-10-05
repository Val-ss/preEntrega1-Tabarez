
import './App.css'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"Bienvenida/o a nuestra tienda online!"} />
      
    </>
  );
}

export default App
