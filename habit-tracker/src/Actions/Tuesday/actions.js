export const addTuesPlan = tuesPlan => {
    return (dispatch) => {
      return fetch('http://localhost:3000/tues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({tue: tuesPlan})
      })
      .then(resp => resp.json())
      .then(tuesPlan => {
        dispatch({type: "ADD_TUESPLAN", payload: tuesPlan})
      })
    }
  }

  export const removeTuesPlan = tuesId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/tues/${tuesId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(tue => dispatch({type: 'REMOVE_TUESPLAN', payload: tue.id}))

    }
  }

export const fetchTuesPlans = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/tues')
        .then(res => res.json())
        .then(tues => { 
            dispatch({type: "SET_TUESPLANS", payload: tues})
            
        })
    }
}
