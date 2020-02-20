import React from 'react'
import { connect } from 'react-redux'
import { removeHabit } from '../Actions/Habit'
import { HabitWeek } from '../Containers/HabitWeek'

const Habit = ({ habit, removeHabit }) => {
    return (
        <li className="habit-item">
            {habit.name} <button onClick={()=>removeHabit(habit.id)}>x</button>
        <HabitWeek />
        </li>
       
    )
}

export default connect (null, {removeHabit})(Habit)