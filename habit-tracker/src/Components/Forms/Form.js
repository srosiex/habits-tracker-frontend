

import React, { Component } from 'react'


export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      plan: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlan( this.props.day, this.state );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
    
        <div className="input-field">
          <input type="text" name="plan" id="plan" value={ this.state.plan } onChange={ this.handleChange }/>
          <label htmlFor="plan" />
        </div>

        <input type="submit" value="Create Plan" className="form-submit" />
      </form>
    )
  }
}
