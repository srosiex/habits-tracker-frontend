import React, { Component } from 'react'
import { connect } from 'react-redux'
import TuesForm from '../Components/Forms/TuesForm'
import Tuesday from '../Components/Tuesday'
import { fetchTuesPlans } from '../Actions/Tuesday/actions'



export class TuesdayContainer extends Component {

    componentDidMount(){
        this.props.fetchTuesPlans()
        
    }


    render(){
        const tues = this.props.tues.map(( tue, i ) => <Tuesday key={i} tue={tue} />)
        
     
        
        return (
            
        <div className="day-container">
            <div className="day-container-content">
                <h2>Tuesday</h2>
            <TuesForm className="tuesday-form" addTuesPlan={this.props.addTuesPlan} />
            {tues}
            <a href="http://localhost:3002/plans/tuesday">View all</a>
            </div>
        </div>

        )
        
    }}

    const mapStateToProps = state => {

        // console.log(state.mon)
        return {
            tues: state.tue
        }
        
    }


export default connect(mapStateToProps, { fetchTuesPlans })(TuesdayContainer)
