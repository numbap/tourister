import React from 'react'
import uuid from 'uuid'

class HomeRowForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            id:  this.props.formLocation.id || uuid(),
            description: this.props.formLocation.description,
            lat: this.props.formLocation.lat,
            lng: this.props.formLocation.lng,
            range: 40
        }
    }

    updateForm = (e) => {
        e.preventDefault()
        this.setState({description: e.target.value})
    }

    render(){
        return(
            <tr key={this.props.formLocation.id}>
                <th scope="row">-</th>
                <td>
                    <input 
                    type="text" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.updateForm}
                    className="form-control" />
                </td>
                <td>{this.props.formLocation.lat}</td>
                <td>{this.props.formLocation.lng}</td>
                <td>
                    <button 
                    className="btn btn-primary" 
                    type="submit"
                    onClick={() => { this.props.clickHandler(this.state) }}
                    >Add Location</button>
                </td>
            </tr>
        )
    }
}

export default HomeRowForm