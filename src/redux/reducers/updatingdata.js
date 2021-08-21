const updatesData = {
    companyName: "",
        email: "",
        website: "",
        vancancies: "",
        dateOfApply: "",
        experience: "",
        skills: "",
        jobType: "",
        description: "",
}

const updatedata = (state=updatesData, action) =>{
    switch (action.type) {
        case 'UPDATE':
          return { ...action.payload };
    
        default:
          return state;
      }
};
export default updatedata;