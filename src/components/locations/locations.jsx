import React from 'react'
import {connect} from 'react-redux'
import {selectSpotsById} from '../../redux/reducers/spots.selectors'
import {selectLocationById} from '../../redux/reducers/locations.selectors'
import LocationRowForm from './locationrowform'
import database from '../../firebase/firebase'
import Footer from '../footer/footer'


class Locations extends React.Component{
    constructor(props){
        super(props)

        this.state = { slectedRow: null }
        this.slectRow = this.slectRow.bind(this)
    }

    slectRow = (id) => {
        this.setState({slectedRow: id})
    } 


    addUpdate = (spot, uid) => {
        // this.props.addUpdateSpot(spot)
        console.log('addupdate')
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(spot.description) + '.json?access_token=pk.eyJ1IjoicGpvYmluIiwiYSI6ImNqdzkyYW04azF5azU0Ymw5d3pubWZ0ajYifQ.yfUUDFgq4poK7JyNhhOz_g&limit=1'
        fetch(url)
        .then(function(response) {
             return response.json();
        })
        .then((myJson) => {   
             if(myJson.features[0]){
                spot.lat = myJson.features[0].center[1];
                spot.lng = myJson.features[0].center[0];
                spot.heading = Math.random() * 359;
                this.props.addUpdateSpot(spot, uid)
             }  
        })
        .then(() => this.setState({slectedRow: null}))

    }

    render(){
        return(
            <div>
                <div className="accordion" id="accordionExample">
                <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h1 className="display-4">{this.props.currentLocation[0].description}</h1>
                    </button>
                    </h2>
                </div>
            
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">

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
                        {this.props.spots.concat({}).map(({id, lat, lng, description}, i) => (
                            (this.state.slectedRow != id) ?
        
                            <tr key={id? id : i + 1}>
                                <th scope="row">{i + 1}</th>
                                <td>{description}</td>
                                <td>{lat}</td>
                                <td>{lng}</td>
                                <td>
                                    {(id == null) ?
                                        <div><i style={{cursor: 'pointer'}}  
                                        className="far fa-plus-square"
                                        onClick={() => this.setState({slectedRow: id})}
                                        ></i></div>
                                    :
                                        <div><i style={{cursor: 'pointer'}} 
                                        className="far fa-trash-alt" 
                                        onClick={() => this.props.deleteSpot(id, this.props.user.uid)}
                                         >
                                        </i> - 
                                        <i style={{cursor: 'pointer'}}  
                                        className="fas fa-edit" 
                                        onClick={() => this.setState({slectedRow: id})}  >
                                        </i>
                                         </div>  }
                                </td>
                            </tr>
                            :
                            <LocationRowForm 
                                key={id ? id : i + 1} 
                                formSpot={{location: this.props.match.params.collectionId, id, lat, lng, description}} 
                                uid={this.props.user.uid}
                                clickHandler={this.addUpdate} />
                        ))}
                        </tbody>
                    </table>


                    </div>
                </div>
                </div>
            </div>
            
            <div className="container">
            <div className="row">

            {this.props.spots.map(({id, lat, lng, description, heading}, i) => (



                <div className="col-md-4" key={`a${i}`}>
                <div className="card mb-4 shadow-sm">
                    <a 
                        href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${parseFloat(lat)},${parseFloat(lng)}&heading=-45&pitch=38&fov=80`} 
                        target="_blank" >
                    <img 
                        key={`a${i}`} 
                        width="100%" 
                        height="225" 
                        xmlns="http://www.w3.org/2000/svg" 
                        preserveAspectRatio="xMidYMid slice" 
                        focusable="false" 
                        role="img" 
                        src={`https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${parseFloat(lat)},${parseFloat(lng)}&fov=90&heading=${parseFloat(heading)}&pitch=10&key=AIzaSyAshBQx-Et3oAP6gb8ZcuCPtztZbuJrIMM`} 
                        className="img-fluid img-thumbnail" 
                        alt="" />
                    </a>
                  <div className="card-body">
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" 
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => this.props.deleteSpot(id, this.props.user.uid)} >
                            <i className="far fa-trash-alt"  ></i> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>






              ))}

            </div>
          </div>
          <Footer name={this.props.user.displayName}/>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        spots: selectSpotsById(ownProps.match.params.collectionId)(state),
        currentLocation: selectLocationById(ownProps.match.params.collectionId)(state),
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       deleteSpot: (id, uid) => { 
        database.ref(uid + '/spots/' + id).set(null)
        .then( dispatch({type: 'REMOVE_SPOT', id: id}) )
        .catch((e) => console.log(e))

        }, 
       addUpdateSpot: (spot, uid) => { 
        database.ref(uid + '/spots/' + spot.id).update(spot)
        .then(() => dispatch({type: 'ADD_SPOT', spot: spot}))
     .catch((e) => console.log(e)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations)






// <div  className="col-sm-3">
// <a href={`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${parseFloat(lat)},${parseFloat(lng)}&heading=-45&pitch=38&fov=80`} target="_blank" >

// </a>
// <div  onClick={() => this.props.deleteSpot(id)}>

// </div>