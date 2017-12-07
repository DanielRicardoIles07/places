import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';

import{
  BrowserRouter as ReactRouter,
  Route,
  Link
} from 'react-router-dom';
export default class Login extends React.Component {
  render (){
    return(

      <div className="row middle-xs">
          <div className="col-xs-12 col-sm-6">
            <Container>
              <div style={{'textAlign': 'left'}}>
                <Title />
                <TextField
                  floatingLabelText="Correo Electronico"
                  type="email"
                  className="textField"
                />
                <TextField
                  floatingLabelText="Contraseña"
                  type="password"
                  className="textField"
                />

                  <div className="Login-actions">
                    <Route path="/login" exact render={()=>{
                        return(
                          <div>
                            <Link to="/signup" style={{'marginRight':'1em', 'textDecoration': 'none'}}>Crear Nueva Cuenta</Link>
                            <RaisedButton label="Ingresar" primary={true}/>
                          </div>
                        );
                      }}>
                    </Route>
                    <Route path="/signup" exact render={()=>{
                        return(
                          <div>
                            <Link to="/login" style={{'marginRight':'1em', 'textDecoration': 'none'}}>Ya tengo Cuenta</Link>
                            <RaisedButton label="Crear Cuenta" primary={true}/>
                          </div>
                        );
                      }}>
                    </Route>
                  </div>
              </div>
            </Container>

          </div>
          <div className="col-xs-12 col-sm-6">
            <div>
              <Route path="/login" exact render={()=>
                  <div className="Login-Background" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/images/login.jpg' +")"}}></div>
                }>
              </Route>
              <Route path="/signup" exact render={()=>
                  <div className="Login-Background" style={{'backgroundImage': "url("+ process.env.PUBLIC_URL + '/images/signup.jpg' +")"}}></div>
                }>
              </Route>
            </div>

          </div>
      </div>

    )
  }
}
