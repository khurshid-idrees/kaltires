import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/PageNotFound.jpg';
class NotFoundPage extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'coloumn',
          alignItems: 'center',
        }}
      >
        <img src={PageNotFound} width="900px" />
        <p style={{ textAlign: 'center' }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
