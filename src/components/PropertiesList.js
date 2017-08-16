import React from 'react';
import {connect} from 'react-redux';
import PropertiesCard from './PropertiesCard';
import * as actions from '../actions/actions';


class PropertiesList extends React.Component {

  componentDidMount () {
    this.props.fetchProperties();
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-three-quarters" id='PropertiesList'>
        {this.props.properties.map((property, i) =>
                <PropertiesCard
                  key={i}
                  property={property}
                />)}
          </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchProperties: () => {
      dispatch(actions.fetchProperties());
    }
  };
}

function MapStateToProps (state) {
  return {
    properties: state.properties,
    loading :state.loading
  };
}

export default connect(MapStateToProps, mapDispatchToProps) (PropertiesList);