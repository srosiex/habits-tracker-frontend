import React, { Component } from 'react'
import { connect } from 'react-redux'
import MonForm from '../Components/Forms/MonForm'
import Monday from '../Components/Monday'
import { fetchMonPlans } from '../Actions/index'



export class MondayContainer extends Component {

    componentDidMount(){
        this.props.fetchMonPlans()
        
    }
    
//     renderMonPlans = () => {
//         return this.props.monPlans.map((monPlan, id) => <Monday delete={this.props.delete} key={monPlan.id} monPlan={monPlan} />)
// }

    render(){
        const mons = this.props.mons.map(( mon, i ) => <Monday key={i} mon={mon} />)
        
        //    const mons = this.mons.map(p => p.plan)
     
        
        return (
            
        <div className="day-container">
            <div className="day-container-content">
                <h2>Monday</h2>
            <MonForm className="monday-form" addMonPlan={this.props.addMonPlan} />
            {mons}
            <a href="http://localhost:3002/plans/monday">View all</a>
            </div>
        </div>

        )
        
    }}

    const mapStateToProps = state => {

        // console.log(state.mon)
        return {
            mons: state.mon
        }
        
    }


export default connect(mapStateToProps, { fetchMonPlans })(MondayContainer)
