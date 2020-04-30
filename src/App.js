import React, { Component } from 'react';
// import logo from './logo.svg';
import TestTwo from './TestTwo';
// import './App.css';

class App extends Component {
   //  state = {
   //     users: [],
   //  };

   //  componentDidMount() {
   //     fetch('/users')
   //        .then((res) => res.json())
   //        .then((data) => {
   //           this.setState({ users: data });
   //        });
   //  }
   render() {
      return (
         <div className="App">
            <TestTwo />
            {/* <h1>Users</h1>
            <ul>
               {this.state.users.map((users) => (
                  <li>{users.username}</li>
               ))}
            </ul> */}
         </div>
      );
   }
}

export default App;
