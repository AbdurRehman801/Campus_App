const formData = {
   user:null
}

const formsData = (state = formData, action) =>{
  console.log("state is ",state , "action is " , action)
    switch (action?.type) {
        case 'ADDING':
          return {...action.payload};
    
        default:
          return state;
      }
};
export default formsData;