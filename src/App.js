import './App.css';
import { useState } from 'react';
import {Switch, Route} from "react-router-dom";
import Home from './page/home';
import Cadastro from './page/cadastro';
import Login from './page/login/login';





function App() {
  const [cadastro, setCadastro] = useState([])
 


  
    return(
      <div className="App">
        <div className="container">
          <Switch>

            {/* rota para HOME */}
            <Route path='/home'>
              <Home  cadastro={cadastro}/>
            </Route>

            {/* rota para CADASTRO */}
            <Route exact path='/'>
              <Cadastro setCadastro={setCadastro}/>
            </Route>

            {/* rota para LOGIN */}
            <Route path='/login'>
              <Login/>
            </Route>

          </Switch>


        </div>
      </div>

    )
}

export default App;
