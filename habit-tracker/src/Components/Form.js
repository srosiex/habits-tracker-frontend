// // Add BandInput component
// import React, { Component } from 'react'

// class Form extends Component {

//   constructor(props){
//     super(props)
//     this.state ={
//       name: ""
//     }
//   }

//   handleChange = e =>{
//     this.setState({
//       name: e.target.value
//     })
//   }

//   handleSubmit = e =>{
//     e.preventDefault()
//     this.props.addMonPlan(this.state.name)
//     this.setState({
//       name: ""
//     })
//   }

//   render() {
//     return(
//       <div>
//         Create new plan
//         <form onSubmit={this.handleSubmit}>
//           <input type="text"
//           name="name"
//           onChange={this.handleChange}
//           value={this.state.name} />
//           <input type="submit" />
//         </form>
//       </div>
//     )
//   }
// }

// export default Form


import React, { Component } from 'react'
import { addMonPlan } from '../Actions/index'
import { connect } from 'react-redux'

export class Form extends Component {

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
    // add the pet
    this.props.addMonPlan( this.state );
    // redirect to /pets
    // this.props.history.push('/plans/monday');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h4>Create plan</h4>
        <div className="input-field">
          <input type="text" name="plan" id="plan" value={ this.state.plan } onChange={ this.handleChange }/>
          <label htmlFor="plan">Plan</label>
        </div>

        <input type="submit" value="Create Plan" className="btn" />
      </form>
    )
  }
}

export default connect(null, { addMonPlan })(Form)