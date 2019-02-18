import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonsHandler = (personIndex, event) => {
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1> Hi, I'm a React App</h1>
          <p className={classes.join(' ')}> This is really working! </p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
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

export default Radium(App);
