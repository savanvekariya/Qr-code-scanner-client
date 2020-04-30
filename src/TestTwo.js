import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import './index.css';

class TestTwo extends Component {
   state = {
      result: 'No result',
   };

   handleScan = (data) => {
      if (data) {
         this.setState({
            result: data,
         });
      }
   };
   handleError = (err) => {
      console.error(err);
   };
   render() {
      return (
         <div>
            <QrReader
               delay={300}
               onError={this.handleError}
               onScan={this.handleScan}
               style={{ width: '30%' }}
            />
            <form action="http://localhost:3001/users">
               <span>QR code value:</span>
               <input type="text" name="qrvalue" value={this.state.result} />

               <button type="Submit" variant="contained" color="primary">
                  Submit
               </button>
            </form>
         </div>
      );
   }
}

export default TestTwo;
