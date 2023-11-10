
import React from 'react';

const PlaceList = ({ places }) => {
  const maxHeight = 400; // Adjust the maximum height of the container

  return (
    <div className="places-container" style={{ maxHeight, overflowY: 'auto' }}>
      <h3>Places:</h3>
      {places.map((place, index) => (
        <div key={index} className="row mb-3">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{place['place name']}</h5>
                <p className="card-text"><strong>Longitude:</strong> {place.longitude}</p>
                <p className="card-text"><strong>Latitude:</strong> {place.latitude}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceList;
