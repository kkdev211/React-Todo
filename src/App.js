import React from 'react';
import ReactDOM from "react-dom";

import TodoForm from './components/TodoForm';
import TodoList from "./components/TodoList";

const tasks =[
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleCompleted = taskId => {
    console.log("bk: index.js: App: toggleCompleted: taskId: ", taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };

  addItem = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          id:Date.now(),
          completed: false
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("bk: index.js: App: clearCompleted");
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> To Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
