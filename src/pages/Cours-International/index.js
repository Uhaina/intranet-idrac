import React from 'react';
import './styles.scss';

class CoursInternational extends React.Component {
  render = () => {
    return (
      <iframe className="iframe-resources" src="http://ressources.davidvelten.fr/International" frameborder="0" height="100%" width="100%"></iframe>
    );
  }
}

export default CoursInternational;