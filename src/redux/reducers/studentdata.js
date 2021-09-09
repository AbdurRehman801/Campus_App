const studentData = {
    user:null
 }
 
 const studentsData = (state = studentData, action) =>{
   console.log("state is ",state , "action is " , action)
     switch (action?.type) {
         case 'ADDINGPROFILE':
           return {...action.payload};
     
         default:
           return state;
       }
 };
 export default studentsData;