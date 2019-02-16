import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// React Component

class App extends Component {
  state = {
    persons: [
      { id: 'asg', name: 'Max', age: 28 },
      { id: 'qwt', name: 'Manu', age: 21 },
      { id: 'ass', name: 'Stephanie', age: 31 }
    ],
    otherState: 'Some other value',
    showPersons: false
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

  deletePersonsHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really work! </p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
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
