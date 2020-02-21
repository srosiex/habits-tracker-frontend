import React, { Component } from 'react'
import { connect } from 'react-redux'
import FriForm from '../Components/Forms/FriForm'
import Friday from '../Components/Friday'
import { fetchFriPlans } from '../Actions/Friday/actions'



export class FridayContainer extends Component {

    componentDidMount(){
       
        this.props.fetchFriPlans()
        
    }


    render(){
        const fris = this.props.fris.map(( fri, i ) => <Friday key={i} fri={fri} />)
        
     
        
        return (
            
        <div className="day-container">
            <div className="day-container-content">
                <h2>Friday</h2>
            <FriForm className="friday-form" addFriPlan={this.props.addFriPlan} />
            {fris}
            <a href="http://localhost:3002/plans/friday">View all</a>
            </div>
        </div>

        )
        
    }}

    const mapStateToProps = state => {

     
        return {
            fris: state.fri
            
        }
        
    }


export default connect(mapStateToProps, { fetchFriPlans })(FridayContainer)
