import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class NewProperty extends React.Component {
    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render () {
        return (
            <div className="newProperty">
                <h3>Add a new Property:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input id="propertyType-input" className="input" type="text" placeholder="Property Type" />
                    <input id="bedroomsinput" className="input" type="number" placeholder="Num Bedrooms" />
                    <input id="locations-input" className="input" type="text" placeholder="Location?" />
                    <button className="submitButton" type="submit">
                        Add Property
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit (event) {
        event.preventDefault();
        let propertyTypeValue = event.target[0].value;
        let numBedroomsValue = event.target[1].value;
        let locationValue = event.target[2].value;

        let propertyToSave = {
            propertyType: propertyTypeValue,
            numBedrooms: numBedroomsValue,
            location: locationValue
        };
        this.props.postnewProperty(propertyToSave);
    }
}

function mapDispatchToProps (dispatch) {
    return {
        postnewProperty: function (newProperty) {
            dispatch(actions.addProperty(newProperty));
        }
    };
}

function mapStateToProps (state) {
    return {
        propertyType: state.propertyType,
        numBedrooms: state.bedrooms,
        location: state.location
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewProperty);