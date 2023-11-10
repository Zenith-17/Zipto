
import React from 'react';

const PlaceList = ({ places }) => {
  const maxCardsPerRow = 6; 
  const maxRows = 3; 
  const maxHeight = 400; 

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedPlaces = chunkArray(places, maxCardsPerRow);

  return (
    <div className="places-container" style={{ maxHeight, overflowY: 'auto' }}>
      <h3>Places:</h3>
      {chunkedPlaces.slice(0, maxRows).map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((place, index) => (
            <div key={index} className={`col-md-${12 / maxCardsPerRow} mb-3`}>
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
      ))}
    </div>
  );
};

export default PlaceList;
