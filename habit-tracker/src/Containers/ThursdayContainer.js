import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThurForm from '../Components/Forms/ThurForm'
import Thursday from '../Components/Thursday'
import { fetchThurPlans } from '../Actions/Thursday/action.js'



export class ThursdayContainer extends Component {

    componentDidMount(){
        this.props.fetchThurPlans()
        
    }


    render(){
        // const thurs = this.props.thurs.map(( thur, i ) => <Thursday key={i} thur={thur} />)
        
     
        
        return (
            
        <div className="day-container">
            <div className="day-container-content">
                <h2>Thursday</h2>
            <ThurForm className="thursday-form" addThurPlan={this.props.addThurPlan} />
            {/* {thurs} */}
            <a href="http://localhost:3002/plans/thursday">View all</a>
            </div>
        </div>

        )
        
    }}

    const mapStateToProps = state => {
        console.log(state)
     
        return {
            thurs: state.thur
            
        }
        
    }


export default connect(mapStateToProps, { fetchThurPlans })(ThursdayContainer)
