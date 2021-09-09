
export const isLoggedIn = (user) =>{
    return{
        type: "STATUS",
        payload: user
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
export const addingStudent = (studentData) =>{
    return {
        type: "ADDINGPROFILE",
        payload: studentData
    }
}

