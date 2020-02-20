export const addFriPlan = friPlan => {
    return (dispatch) => {
      return fetch('http://localhost:3000/fris', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({fri: friPlan})
      })
      .then(resp => resp.json())
      .then(friPlan => {
        dispatch({type: "ADD_FRIPLAN", payload: friPlan})
      })
    }
  }
  
  export const removeFriPlan = friId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/fris/${friId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(fri => dispatch({type: 'REMOVE_FRIPLAN', payload: fri.id}))
  
    }
  }
  
  export const fetchFriPlans = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/fris')
        .then(res => res.json())
        .then(fris => { 
            dispatch({type: "SET_FRIPLANS", payload: fris})
            
        })
    }
  }
  