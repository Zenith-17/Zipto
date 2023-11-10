
import React from 'react';

const PlaceList = ({ places }) => {
  return (
    <div>
      <h3>Places:</h3>
      <div className="row">
        {places.map((place, index) => (
          <div key={index} className={`col-md-${12 / places.length} mb-3`}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{place['place name']}</h5>
                <p className="card-text"><strong>Longitude:</strong> {place.longitude}</p>
                <p className="card-text"><strong>Latitude:</strong> {place.latitude}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceList;
