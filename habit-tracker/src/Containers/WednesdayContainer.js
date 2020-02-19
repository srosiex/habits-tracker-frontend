import React, { Component } from 'react'
import { connect } from 'react-redux'
import WedForm from '../Components/Forms/WedForm'
import Wednesday from '../Components/Wednesday'
import { fetchWedPlans } from '../Actions/Wednesday/actions'



export class WednesdayContainer extends Component {

    componentDidMount(){
        this.props.fetchWedPlans()
        
    }


    render(){
        const weds = this.props.weds.map(( wed, i ) => <Wednesday key={i} wed={wed} />)
        
     
        
        return (
            
        <div className="day-container">
            <div className="day-container-content">
                <h2>Wednesday</h2>
            <WedForm className="wednesday-form" addWedPlan={this.props.addWedPlan} />
            {weds}
            <a href="http://localhost:3002/plans/wednesday">View all</a>
            </div>
        </div>

        )
        
    }}

    const mapStateToProps = state => {
        // console.log(state)
     
        return {
            weds: state.wed
            
        }
        
    }


export default connect(mapStateToProps, { fetchWedPlans })(WednesdayContainer)
