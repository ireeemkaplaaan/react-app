import api from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

export const fetchall= () => dispatch => {
    api.student().fetchall()
    .then(
        response => {
            dispatch ({
                type: ACTION_TYPES.FETCH_ALL,
                payload:[]
            })
        }
    )
    .catch(err=>console.log(err))  
}

export const create=(data,onSuccess)=>dispatch =>{
    
}