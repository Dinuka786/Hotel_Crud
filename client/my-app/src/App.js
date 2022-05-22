import React, { Component } from 'react';
import Hotel_Adding_form from './components/hotel_form';
class APP extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <main className='container'>
          <Hotel_Adding_form/>
        </main>
      </React.Fragment>
    );
  }
}
 
export default APP ;