import React, { Component } from 'react'
import { connect } from 'react-redux'
import HabitForm from '../Components/Forms/HabitForm'
import Habit from '../Components/Habit'
import {DayCount} from '../Components/DayCount'
import { fetchHabits } from '../Actions/Habit'



export class HabitContainer extends Component {

    

    componentDidMount(){
       
        this.props.fetchHabits()
        
    }


    render(){
        const habits = this.props.habits.map(( habit, i ) => <Habit key={i} habit={habit} />)

        
     
        
        return (
            
        <center><div className="habit-container">
            <div className="habit-container-content">
                <h2>Habits</h2>
            <HabitForm className="habit-form" addHabit={this.props.addHabit} />
            {habits} 
            </div>
        </div></center>

        )
        
    }}

    const mapStateToProps = state => {
        // console.log(state.habit)
     
        return {
            habits: state.habit
            
        }
        
    }


export default connect(mapStateToProps, { fetchHabits })(HabitContainer)
