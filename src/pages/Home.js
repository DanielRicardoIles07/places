import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {indigo400} from 'material-ui/styles/colors';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {connect} from 'react-redux';

import Title from '../components/Title';
import Container from '../components/Container';
import Benefits from '../components/Benefits';
import PlaceCard from '../components/places/PlaceCard';
import data from '../requests/places';
import {getPlaces} from '../requests/places';

import {Link} from 'react-router-dom';

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      places: data.places
    }

    console.log(this.props.places);
    this.hidePlace = this.hidePlace.bind(this);
  }

  loadPlace(){
    getPlaces().then(jsonR=>{
        const places = jsonR.docs;
    })
  }

  places(){
    return this.state.places.map((place,index)=>{
      return(
        <PlaceCard onRemove={this.hidePlace} place={place} index={index} />
      );
    })
  }

  hidePlace(place){
    this.setState({
      places: this.state.places.filter(el => el !== place)
    })
  }

  render(){
    return(
      <section>
        <div className="Header-background">
          <Container style={{"width":"80%", "margin":"0 auto"}}>
            <div className="Header-main">
              <Title></Title>
              <Link to="/signup">
                <RaisedButton label="Crear cuenta gratuita" primary={true} />
              </Link>
              <img alt={"place-3-gif"} className="Header-illustration" src={process.env.PUBLIC_URL + "/images/place-3.gif"}/>
            </div>
            <div>
              <Benefits/>
            </div>
          </Container>

        </div>
        <div style={{'backgroundColor': indigo400, 'padding': '50px', color: 'white'}}>
          <h3 style={{'fontSize': '24px'}}>Sitios Populares</h3>
          <TransitionGroup className="row">
            {this.places()}
          </TransitionGroup>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    places: state.places
  }
}

export default connect(mapStateToProps)(Home);
