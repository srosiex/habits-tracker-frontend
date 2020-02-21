// import React from 'react'
// import { connect } from 'react-redux'
// import { increaseDays } from '../Actions/Habit'
// import { removeHabit } from '../Actions/Habit'

// const DayCount = ({ habs }) => {

//     return (
//     <div>Days Complete: {habit.days_complete} <button onClick={console.log('here')}>+</button></div>
       
//     )
// }

// export default connect(null, {removeHabit})(DayCount)




// import React, { Component } from 'react'
// import { increaseDays } from '../Components/Habit'
// import { connect } from 'react-redux'


// export class DayCount extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       days_complete: ''
//     }
//   }


//   render() {
//     return (
//     //    Days : {this.props.habit.days_complete} <button onClick={()=>increaseDays(habit.id, habit.name, habit.goal, habit.days_complete+1)}>+</button>
//            <div>Hi</div>
//     )
//   }
//   }

// export default connect(null, { increaseDays })(DayCount)