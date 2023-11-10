import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setLocation, clearLocation } from '../store/reducers/appSlice';

const PostalCodeForm = () => {
  const [postalCode, setPostalCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setPostalCode(e.target.value.trim());
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
      const { country, places } = response.data;
  
      dispatch(setLocation({
        country: country,
        state: places[0]?.state || 'N/A',
        placeName: places[0]?.place_name || 'N/A',
        places: places || [], // Ensure places is an array
      }));
    } catch (err) {
      setError('Error fetching location information. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    dispatch(clearLocation());
    setPostalCode('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Postal Code"
          value={postalCode}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mx-2 " disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                {' '}Fetching...
              </>
            ) : 'Fetch Location'}
          </button>
        </div>
        <div className="input-group-append">
          <button type="button" className="btn btn-danger" onClick={handleClear}>
            Clear Information
          </button>
        </div>
      </div>
      {error && <p className="text-danger mt-2 fs-5">{error}</p>}
    </form>
  );
};

export default PostalCodeForm;
