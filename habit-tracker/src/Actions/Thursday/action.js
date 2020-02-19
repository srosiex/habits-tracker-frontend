export const addThurPlan = thurPlan => {
    return (dispatch) => {
      return fetch('http://localhost:3000/thurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({thur: thurPlan})
      })
      .then(resp => resp.json())
      .then(thurPlan => {
        dispatch({type: "ADD_THURPLAN", payload: thurPlan})
      })
    }
  }

  export const removeThurPlan = thurId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/thurs/${thurId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(thur => dispatch({type: 'REMOVE_THURPLAN', payload: thur.id}))

    }
  }

export const fetchThurPlans = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/thurs')
        .then(res => res.json())
        .then(thurs => { 
            dispatch({type: "SET_THURPLANS", payload: thurs})
            
        })
    }
}
