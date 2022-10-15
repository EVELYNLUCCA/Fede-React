import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css';
 import Eventos from './components/Eventos';
 import Effect from './components/Hooks/Effect';
 import States from './components/Hooks/States';
 import LoginYLogout from './components/Mini-Proyectos/LoginYLogout';
 import Props from './components/Props';
 import Saludo from './components/Saludo';
 import TitulosContainer from './components/TitulosContainer';
 import React, { useState, useEffect } from 'react';
 import userAxios from './Helpers/useAxios';
import Ref from './components/Hooks/Ref';
import FormReactive from './components/FormReactive';
import UsarCss from './components/estilizado/UsarCss';
import Bootstrap from './components/estilizado/Bootstrap';
import Iconitos from './components/Iconitos';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    userAxios('https://pokeapi.co/api/v2/pokemon/pikachu', setData);
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data]);
  

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

      <hr />
      <hr />
      <hr />

      <h2>Referencias</h2>

      <Ref />

      <hr />
      <hr />
      <hr />

      <h2>Formulario reactivito</h2>

      <FormReactive />

      <hr />
      <hr />
      <hr />

      <h2>¿Cómo usamos estilos? 😎😃🥰😱</h2> {/* Windows + . para emojis */ }

      <UsarCss />

      <hr />
      <hr />
      <hr />

      <h2> Bootstrap 🤢🤢🤮🤮🤮</h2>

      <Bootstrap />

      <hr />
      <hr />

      <h2> Iconos de fontawesome </h2>

      <Iconitos />

    </main>
  );
};

export default App;
