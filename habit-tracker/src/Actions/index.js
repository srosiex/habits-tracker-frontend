export const addPlan = (day, plan) => {

    return (dispatch) => {
     if(day === "Monday"){
       let d = ["mon"]
     }
      return fetch(`http://localhost:3000/${day.toLowerCase()}`, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(console.log({d: plan}))
        
      })
      .then(resp => resp.json())
      .then(plan => {
        dispatch({type: "ADD_PLAN", payload: {day, plan}})
      })
    }
  }

  export const removePlan = (day, planId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/${day.toLowerCase()}/${planId}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(plan => {
        dispatch({type: 'REMOVE_PLAN', payload: {day, planId}})})

    }
  }

export const fetchPlans = (day) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/${day.toLowerCase()}`)
        .then(res => res.json())
        .then(plans => {
            dispatch({type: "SET_PLANS", payload: {day, plans}})
            
        })
    }
}
