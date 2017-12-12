import React from 'react';
import {Card} from 'material-ui/Card';
import {withRouter} from 'react-router-dom';

import {getPlace} from '../requests/places';

import Container from '../components/Container';

class Place extends React.Component{
  constructor(props){
    super(props);

    const slug = props.match.params.slug;
    this.loadPlace(slug);

    this.state = {
      place: {}
    }
  }

  loadPlace(slug){
    getPlace(slug).then(json=>{
      this.setState({
        place: json
      })
    })
  }
  render(){
    const{place} = this.state;
    return(
      <div className="Place-container">
        <header
            className="Place-cover"
            style={{'backgroundImage':'url('+place.coverImage+')' }}>
        </header>
        <Container>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <Card className="Place-card">
                <div className="row">
                  <div className="col-xs-12 col-sm-3 col-lg-2">
                    <img alt={"avatar-card-img"} src={place.avatarImage} style={{"maxWidth": "100%"}}/>
                  </div>
                  <div className="col-xs">
                    <h1>{place.title}</h1>
                    <address>{place.address}</address>
                    <p>{place.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Place);
