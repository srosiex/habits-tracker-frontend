

import React, { Component } from 'react'
import { addHabit } from '../../Actions/Habit'
import { connect } from 'react-redux'

export class HabitForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHabit( this.state );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
    
        <div className="input-field">
          <input type="text" name="name" id="name" value={ this.state.name } onChange={ this.handleChange }/>
          <label htmlFor="name" />
        </div>

        <input type="submit" value="Create Habit" className="btn" />
      </form>
    )
  }
}

export default connect(null, { addHabit })(HabitForm)