import React from 'react';
import './styles.scss';

class Td extends React.Component {
  render = () => {
    return (
      <div className={this.props.className + ' td'}>
        {this.props.children}
      </div>
    );
  }
}

export default Td;