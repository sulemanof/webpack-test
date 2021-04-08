import React, { Component, useState } from 'react';
import User from './components/User';
import Clock from './components/Clock';

const users = [
  { id: 1, name: 'Dima', age: 20 },
  { id: 2, name: 'Egor', age: 21 },
  { id: 3, name: 'Natalia', age: 21 },
  { id: 4, name: 'Yuliana', age: 19 },
  { id: 5, name: 'Valya', age: 18 },
  { id: 6, name: 'Artur', age: 20 },
  { id: 7, name: 'Katya', age: 23 },
];

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users
    }
  }

  onClickSwipe = () => {
    this.setState((prevState) => {
      const first = prevState.users[0];
      const last = prevState.users[prevState.users.length - 1];
      const newUsers = [...prevState.users];
      newUsers[0] = last;
      newUsers[prevState.users.length - 1] = first;

      return {
        users: newUsers,
      }
    })
  }

  onUserAgeChange = (id, newAge) => {
    this.setState((prevState) => ({
      users: prevState.users.map((user) => id === user.id ? { ...user, age: newAge } : user)
    }))
  }

  render() {
    const content = this.state.users.map(
      (user, index) =>
        <User
          key={index}
          {...user}
          onUserAgeChange={this.onUserAgeChange}
        />
      );
    const youngest = [...this.state.users].sort((a, b) => a.age - b.age)[0];

    return (
      <>
        <h2>The youngest user is: {youngest.name}, age: {youngest.age}</h2>
        <ul className="App">
          {content}
        </ul>
        <button onClick={this.onClickSwipe}>Swipe</button>
      </>
    );
  }
}

function App() {
  const [showClock, setShowClock] = useState(false);

  return (
    <>
      <button onClick={() => setShowClock(!showClock)} type="button">
        {showClock ? 'Hide' : 'Show'}
        {' '}
        Clock
      </button>
      {showClock ? <Clock /> : null}
    </>
  );
}

export default App;
