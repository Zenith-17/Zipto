
import React from 'react';
import { useSelector } from 'react-redux';
import PlaceList from './PlaceList';

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
              <PlaceList places={location.places} />
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
