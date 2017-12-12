import React from 'react';
import Title from '../components/Title';
import Container from '../components/Container';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {login, signUp} from '../requests/auth';
import {connect} from 'react-redux';
import * as actions from '../actions/userActions';

import{

  Route,
  Link
} from 'react-router-dom';
class Login extends React.Component {

  constructor(props){
    super(props);
    this.requestAuth = this.requestAuth.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }
  requestAuth(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue(),
    }
    login(credentials).then(data => {
      this.props.dispatch(actions.login(data.jwt));
    }).catch(console.log);
  }

  createAccount(){
    const credentials = {
      email: this.refs.emailField.getValue(),
      password: this.refs.passwordField.getValue()
    }
    signUp(credentials).then(console.log).catch(console.log);
  }
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
                  ref="emailField"
                />
                <TextField
                  floatingLabelText="Contraseña"
                  type="password"
                  className="textField"
                  ref="passwordField"
                />
                  <div className="Login-actions">
                    <Route path="/login" exact render={()=>{
                        return(
                          <div>
                            <Link to="/signup" style={{'marginRight':'1em', 'textDecoration': 'none'}}>Crear Nueva Cuenta</Link>
                            <RaisedButton onClick={this.requestAuth} label="Ingresar" primary={true}/>
                          </div>
                        );
                      }}>
                    </Route>
                    <Route path="/signup" exact render={()=>{
                        return(
                          <div>

                            <Link to="/login" style={{'marginRight':'1em', 'textDecoration': 'none'}}>Ya tengo Cuenta</Link>
                            <RaisedButton onClick={this.createAccount} label="Crear Cuenta" primary={true}/>
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
                  <div className="Login-Background" style={{'backgroundImage': "url(" + process.env.PUBLIC_URL + "'/images/login.jpg')"}}></div>
                }>
              </Route>
              <Route path="/signup" exact render={()=>
                  <div className="Login-Background" style={{'backgroundImage': "url(" + process.env.PUBLIC_URL + "'/images/signup.jpg')"}}></div>
                }>
              </Route>
            </div>

          </div>
      </div>

    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
