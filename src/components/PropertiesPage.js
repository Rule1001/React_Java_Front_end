import React from 'react';
import PropTypes from 'prop-types';
import PropertyText from './PropertyText';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import '../../public/style.css';

class PropertiesPage extends React.Component {
    componentDidMount() {
        this.props.fetchPropertiesByID(this.props.match.params.propertyId);
    }

    render() {
        return (
            <div className="propertiesPage columns">
                <div className="column is-three-quarters">
                Your chosen display property is
                    <div className="columns">
                        <div className="column is-half">
                            <ul className="notification is-info">
                                <p className='Location '>{this.props.selectedProperty.location}</p>
                                <p className='Property Type '>{this.props.selectedProperty.propertyType}</p>
                                <p className='Number of Bedrooms'>{this.props.selectedProperty.numBedrooms}</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPropertiesByID: (id) => {
            dispatch(actions.fetchPropertiesByID(id));
        }
    };
}

function MapStateToProps(state) {
    return {
        selectedProperty: state.selectedProperty,
        loading: state.loading
    };
}

PropertiesPage.propTypes = {
    selectedProperty: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchPropertiesByID: PropTypes.func.isRequired,
};

export default connect(MapStateToProps, mapDispatchToProps)(PropertiesPage);
