import './App.css';
import Eventos from './components/Eventos';
import Effect from './components/Hooks/Effect';
import States from './components/Hooks/States';
import LoginYLogout from './components/Mini-Proyectos/LoginYLogout';
import Props from './components/Props';
import Saludo from './components/Saludo';
import TitulosContainer from './components/TitulosContainer';

function App() {
  return (
    <main>

      <h2 style={{marginTop: '0px'}}>Renderizado condicional e interpolación</h2>
      <hr />
      <Saludo />

      <h2>Props (padre-hijo)</h2>
      <hr />
      <Props mensaje="Yo soy tu padre..."/>

      <h2>Renderizado de Arrays</h2>
      <hr />
      <TitulosContainer />

      <h2>Eventos</h2>
      <hr />
      <Eventos />

      <h2>useState</h2>
      <hr />
      <States />

      <h2>useEffect</h2>
      <hr/>
      <Effect />

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />

      <h2>Login y logout - Ejercicio 1</h2>

      <LoginYLogout />
    </main>
  );
}

export default App;
