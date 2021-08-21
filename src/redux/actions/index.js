
export const isLoggedIn = (data) =>{
    return{
        type: "STATUS",
        payload: data
    }
};
export const adding = (formData) =>{
    return {
        type: "ADDING",
        payload:formData
    }
}
export const updating = (update) =>{
    return {
        type: "UPDATE",
        payload: update
    }
}

