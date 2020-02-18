export const fetchMPlans = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/mons')
        .then(resp => resp.json())
        .then(mons => {
            dispatch({type: "SET_MONSPLAN", payoad: mons})
        })
    }
}