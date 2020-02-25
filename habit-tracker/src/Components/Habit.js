import React from 'react'
import { connect } from 'react-redux'
import { removeHabit } from '../Actions/Habit'
// import { increaseDays } from '../Actions/Habit'
import { HabitWeek } from '../Containers/HabitWeek'

const Habit = ({ habit, removeHabit }) => {



    
    
    
    let goalComplete = ({habit})=> {
        if(habit.goal === habit.days_complete){
            return("Complete")
        }else{
            return("Not Complete")
        }
    }

    // const handleAdd = () =>{
    //     let newCount = habit.days_complete + 1
    //      habit.days_complete = newCount
    //      console.log(newCount)
        
    // }

    // const handleSubmit = (habit) =>{
    //     increaseDays(habit)
    // }


    return (
        <center><li className="habit-item">
            {habit.name} - goal: {habit.goal} <button onClick={()=>removeHabit(habit.id)}>x</button>
            <br />
        {/* <br />Days Complete: {habit.days_complete} <button onClick={()=>increaseDays(habit.id, habit.name, habit.goal, habit.days_complete+1)}>+</button> */}
        
        <br />
        <HabitWeek />
        
        <br />{goalComplete({habit})}
        </li></center>
       
    )
}

export default connect (null, {removeHabit})(Habit)