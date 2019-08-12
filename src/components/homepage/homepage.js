import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {selectSpotsById} from '../../redux/reducers/spots.selectors'
import HomeRowForm from './homerowform'
import uuid from 'uuid'
import database from '../../firebase/firebase'
import Footer from '../footer/footer'

class HomePage extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.state = { slectedRow: null }
        this.slectRow = this.slectRow.bind(this)
    }

    slectRow = (id) => {
        this.setState({slectedRow: id})
    } 

    addUpdate = (location, uid) => {
        this.setState({ slectedRow: null }) 

        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(location.description) + '.json?access_token=pk.eyJ1IjoicGpvYmluIiwiYSI6ImNqdzkyYW04azF5azU0Ymw5d3pubWZ0ajYifQ.yfUUDFgq4poK7JyNhhOz_g&limit=1'
        fetch(url)
        .then(function(response) {
              return response.json();
         })
         .then((myJson) => {
              console.log('Processing Form', myJson);
    
              if(myJson.features[0]){
                location.lat = myJson.features[0].center[1];
                location.lng = myJson.features[0].center[0];
                console.log(location)
                this.props.addUpdateLocation(location, uid)
                const range = 0.005
                var i
                for (i = 0; i < 16; i++) { 
                    this.props.addUpdateSpot({
                        id: uuid(),
                        location: location.id,
                        lat: location.lat - range + Math.random() * (2 * range),
                        lng: location.lng - range + Math.random() * (2 * range),
                        heading: Math.random() * 359,
                        description: 'Random Generated'
                    }, 
                    this.props.user.uid)
                }



              }  
         })
         .then(() => this.setState({slectedRow: null}))

        // this.props.addUpdateLocation(location)
    }

    render(){
        console.log(this.props)
        return (
            <div className="container">
              <div className="row">




                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Location</th>
                                <th scope="col">Lat</th>
                                <th scope="col">Lon</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.locations.concat({}).map(({id, lat, lng, description}, i) => (
                            
                            (this.state.slectedRow != id) ? 
                            
                            <tr key={i + 1} >
                                <th scope="row">{i + 1}</th>
                                <td><Link to={`/locations/${id}`}>{description}</Link></td>
                                <td>{lat} {this.state.slectedRow !== id} </td>
                                <td>{lng}</td>
                                <td>
                                {(id == null) ?
                                    <div><i style={{cursor: 'pointer'}}  
                                    className="far fa-plus-square"
                                    onClick={() => this.setState({slectedRow: id})} ></i></div>
                                :
                                    <div><i style={{cursor: 'pointer'}} 
                                    className="far fa-trash-alt" 
                                    onClick={() => this.props.deleteLocation(id, this.props.spots, this.props.user.uid)} ></i>
                                    </div>}
                                </td>
                            </tr>

                            :

                            <HomeRowForm 
                                key={id ? id : i + 1} 
                                formLocation={{id, lat, lng, description}}
                                uid={this.props.user.uid}
                                clickHandler={this.addUpdate} />
                        ))}
                        </tbody>
                    </table>
                </div>
                <Footer name={this.props.user.displayName}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        locations: state.locations,
        spots: state.spots,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       deleteLocation: (id, spots, uid) => {
           database.ref(uid + '/locations/' + id).set(null)
           .then(() => dispatch({type: 'REMOVE_LOCATION', id: id}))
           .then(() => spots.map(x => {
                x.location == id &&
                database.ref(uid + '/spots/' + x.id).set(null)
                .then(() => dispatch({type: 'REMOVE_SPOT', id: x.id}))
                .catch(e => console.log(e))
           }))
           .catch((e) => console.log(e))
        },
       addUpdateLocation: (location, uid) => { 
           database.ref(uid + '/locations/' + location.id).update(location)
           .then(() => dispatch({type: 'ADD_LOCATION', location: location}))
        .catch((e) => console.log(e)) },
        addUpdateSpot: (spot, uid) => { 
            database.ref(uid + '/spots/' + spot.id).update(spot)
            .then(() => dispatch({type: 'ADD_SPOT', spot: spot}))
         .catch((e) => console.log(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
