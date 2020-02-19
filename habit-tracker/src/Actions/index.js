export const addMonPlan = monPlan => {
    return (dispatch) => {
      return fetch('http://localhost:3000/mons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({mon: monPlan})
      })
      .then(resp => resp.json())
      .then(monPlan => {
        dispatch({type: "ADD_MONPLAN", payload: monPlan})
      })
    }
  }

  export const removeMonPlan = monId => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/mons/${monId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(mon => dispatch({type: 'REMOVE_MONPLAN', payload: mon.id}))

    }
  }

export const fetchMonPlans = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/mons')
        .then(res => res.json())
        .then(mons => {
            dispatch({type: "SET_MONPLANS", payload: mons})
            
        })
    }
}
