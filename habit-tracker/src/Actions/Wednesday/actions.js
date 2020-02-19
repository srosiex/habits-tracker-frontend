export const addWedPlan = wedPlan => {
    return (dispatch) => {
      return fetch('http://localhost:3000/weds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({wed: wedPlan})
      })
      .then(resp => resp.json())
      .then(wedPlan => {
        dispatch({type: "ADD_WEDPLAN", payload: wedPlan})
      })
    }
  }

  export const removeWedPlan = wedId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/weds/${wedId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(wed => dispatch({type: 'REMOVE_WEDPLAN', payload: wed.id}))

    }
  }

export const fetchWedPlans = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/weds')
        .then(res => res.json())
        .then(weds => { 
            dispatch({type: "SET_WEDPLANS", payload: weds})
            
        })
    }
}
