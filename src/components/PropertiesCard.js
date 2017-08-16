import React from 'react';
import PropTypes from 'prop-types';

const PropertiesCard = function (props) {
  const property = props.property
  return (
    <div className="columns">
      <div className="column is-half">
        <ul className="notification is-info">
          <p className=''>{property.propertyId}</p>
          <p className=''>{property.propertyType}</p>
          <p className=''>{property.numBedrooms}</p>
          <p className=''>{property.location}</p>
        </ul>
      </div>
    </div>
  );
};


export default PropertiesCard;