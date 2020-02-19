

import React, { Component } from 'react'
import { addTuesPlan } from '../../Actions/index'
import { connect } from 'react-redux'

export class TuesForm extends Component {

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
    this.props.addMonPlan( this.state );
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
    
        <div className="input-field">
          <input type="text" name="plan" id="plan" value={ this.state.plan } onChange={ this.handleChange }/>
          <label htmlFor="plan" />
        </div>

        <input type="submit" value="Create Plan" className="btn" />
      </form>
    )
  }
}

export default connect(null, { addTuesPlan })(TuesForm)