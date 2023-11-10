// LocationInfo.js
import React from 'react';
import { useSelector } from 'react-redux';

const LocationInfo = () => {
  const location = useSelector((state) => state.app.location);

  return (
    <div className={`location-info mt-4${location && location.places && location.places.length === 1 ? ' text-center' : ''}`}>
      {location ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Location Information</h2>
            <p className="card-text"><strong>Country:</strong> {location.country}</p>
            <p className="card-text"><strong>State:</strong> {location.state}</p>
            {location.places && location.places.length > 0 ? (
              <div>
                <h3>Places:</h3>
                <div className="row">
                  {location.places.map((place, index) => (
                    <div key={index} className={`col-md-${12 / location.places.length} mb-3`}>
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
            ) : (
              <p>No places found.</p>
            )}
          </div>
        </div>
      ) : (
        <p className="text-muted">Enter a postal code to fetch location information.</p>
      )}
    </div>
  );
};

export default LocationInfo;
