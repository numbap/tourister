import React from 'react'
import uuid from 'uuid'

class LocationRowForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            location: this.props.formSpot.location,
            id: this.props.formSpot.id || uuid(),
            description: this.props.formSpot.description,
            lat: this.props.formSpot.lat,
            lng: this.props.formSpot.lng,
            heading: Math.random() * 359
        }
        
        this.updateForm = this.updateForm.bind(this)
    }

    updateForm = (e) => {
        e.preventDefault()
        this.setState({description: e.target.value})
    }

    render(){
        return(
            <tr key={this.props.formSpot.id}>
                <th scope="row">-</th>
                <td>
                <input 
                    type="text" 
                    name="description"
                    value={this.state.description} 
                    onChange={this.updateForm}
                    className="form-control" />
                </td>
                <td>{this.props.formSpot.lat}</td>
                <td>{this.props.formSpot.lng}</td>
                <td><button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={() => this.props.clickHandler(this.state, this.props.uid)}
                    >Add Location</button>
                </td>
            </tr>
        )
    }
}

export default LocationRowForm
