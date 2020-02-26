import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../Components/Forms/Form'
import Plan from '../Components/Plan'
import { fetchPlans, addPlan } from '../Actions/index'


export class DayContainer extends Component {

    componentDidMount(){
        
        this.props.fetchPlans(this.props.day)
        
    }
    componentDidUpdate(prevProps) {
        if (prevProps.day !== this.props.day) {
            this.props.fetchPlans(this.props.day)
        }
      }

    render(){
        const plans = this.props.plans.map(( plan, i ) => <Plan key={i} plan={plan} day={this.props.day} />)
        

        
        return (
            
        <div className="day-container">
            <div className="day-container-content">
                <h2>{this.props.day}</h2>
            <Form className={this.props.day + "-form"} day={this.props.day} addPlan={this.props.addPlan} />
            {plans}

            </div>
        </div>

        )
        
    }}

    const mapStateToProps = (state, props) => {
        const day = props.day
        return {
            plans: state.plans[day]
        }

    }


export default connect(mapStateToProps, { fetchPlans, addPlan })(DayContainer)
