
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import PostalCodeForm from './components/PostalCodeForm';
import LocationInfo from './components/LocationInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="bg position-relative"
        style={{
          backgroundImage: 'url(https://wallpapercave.com/wp/wp8712177.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="overlay position-absolute w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="container-fluid d-flex justify-content-center align-items-center text-light vh-100 position-relative">
          <div className="text-center ">
            <h1 className="mb-4">Zip Code Information App</h1>
            <PostalCodeForm />
            <LocationInfo />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
