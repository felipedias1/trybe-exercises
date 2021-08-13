import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <label>
          <input
            value='' 
            type="text"
            name="name"
          />
        </label>
        <label>
          <input
            value='' 
            type="email"
            name="email"
          />
        </label>
        <label>
          <input
            value='' 
            type="text"
            name="name"
          />
        </label>
        <label>
          <input
            value='' 
            type="text"
            name="adress"
          />
        </label>
        <label>
          <input
            value='' 
            type="text"
            name="city"
          />
        </label>
        <label>
          <select
            value='' 
            type="text"
            name="city"
          />
        </label>

        
      </fieldset>
    );
  }
}

export default Form