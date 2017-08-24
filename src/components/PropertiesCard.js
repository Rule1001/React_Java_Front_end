import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertiesCard = function (props) {
  return (
    <div className='box'>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <Link to={'/properties/' + props.property.propertyId}>
              <h2 className="title is-3">{props.property.location}</h2>
              <div className="columns">
                <div className="column is-half">
                  <ul className="notification is-info">
                    <p className=''>{props.property.propertyId}</p>
                    <p className=''>{props.property.propertyType}</p>
                    <p className=''>{props.property.numBedrooms}</p>
                    <p className=''>{props.property.location}</p>
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>

  );
};


export default PropertiesCard;
