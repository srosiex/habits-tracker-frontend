import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../Components/Form'
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
            
        <div>
            <h3>Monday</h3>
            <Form addMonPlan={this.props.addMonPlan} />
            {mons}
        </div>

        )
        
    }}

    const mapStateToProps = state => {

        console.log(state.mon)
        return {
            mons: state.mon
        }
        
    }


export default connect(mapStateToProps, { fetchMonPlans })(MondayContainer)
