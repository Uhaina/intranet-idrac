import React from 'react';
import './styles.scss';

class Tr extends React.Component {
  render = () => {
    return (
      <div className={this.props.className + ' tr'}>
        {this.props.children}
      </div>
    );
  }
}

export default Tr;