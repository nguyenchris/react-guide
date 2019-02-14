import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// React Component

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 21 },
      { name: 'Stephanie', age: 31 }
    ],
    otherState: 'Some other value'
  };

  switchNameHandler = newName => {
    console.log('Was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Maxmilian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 21 },
        { name: 'Stephanie', age: 12 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really work! </p>
        <button style={style} onClick={() => this.switchNameHandler('Chris')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Chris!!!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Does This work now?')
    // );
  }
}

// // React Hook

// import React, {
//   useState
// } from 'react';

// const app = props => {
//   const [this.state, setthis.state] = useState({
//     persons: [
//       {
//         name: 'Max',
//         age: 28
//       },
//       {
//         name: 'Manu',
//         age: 21
//       },
//       { name: 'Stephanie', age: 31 }
//     ],
//     otherState: 'Some other value'
//   });

//   const switchNameHandler = () => {
//     console.log('Was clicked!');
//     // DONT DO THIS: this.state.persons[0].name = 'Maxmilian'
//     setthis.state({
//       persons: [
//         {
//           name: 'Chris',
//           age: 28
//         },
//         {
//           name: 'Manu',
//           age: 21
//         },
//         {
//           name: 'Stephanie',
//           age: 12
//         }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really work!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={this.state.persons[0].name}
//         age={this.state.persons[0].age}
//       />
//       <Person
//         name={this.state.persons[1].name}
//         age={this.state.persons[1].age}
//       >
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={this.state.persons[2].name}
//         age={this.state.persons[2].age}
//       />
//     </div>
//   );
// };

export default App;
