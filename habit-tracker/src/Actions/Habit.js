export const addHabit = habit => {
    return (dispatch) => {
      return fetch('http://localhost:3000/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({habit: habit})
      })
      .then(resp => resp.json())
      .then(habit => {
        dispatch({type: "ADD_HABIT", payload: habit})
      })
    }
  }
  
  export const removeHabit = habitId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/habits/${habitId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(habit => dispatch({type: 'REMOVE_HABIT', payload: habit.id}))
  
    }
  }
  
  export const fetchHabits = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/habits')
        .then(res => res.json())
        .then(habits => { 
            dispatch({type: "SET_HABITS", payload: habits})
            
        })
    }
  }
  