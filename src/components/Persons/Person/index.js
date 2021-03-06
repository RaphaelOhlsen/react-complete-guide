import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './styles.css';

class Person extends Component { 

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
          // ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </div>
    )
  }
  
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person;