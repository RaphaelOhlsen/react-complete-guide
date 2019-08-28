import React, {useEffect, useRef } from 'react';
import classes from './styles.css';

const cockpit = (props) => {

  const toogleBtnRef = useRef(null);
  

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000)
    toogleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  });


  const assignedClasses = [];
  let btnClass = '';
  
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personLength <=1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button 
        ref = {toogleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>    
  );
}

export default React.memo(cockpit);