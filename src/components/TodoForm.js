import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          taskName: ""
        };
      }

handleChanges = e => {
    // update state with each keystroke
    this.setState({ taskName: e.target.value });
  };

  // class property to submit form
  handleAddItem = e => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleAddTask}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}


export default TodoForm;
