import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";
import { auth } from "../firebase";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cards from './Card';
import Forms from "./AddingForm"
import formsData from '../redux/reducers/formdata';
import { useSelector, useDispatch} from 'react-redux';
// import {updatedata} from '../redux/actions/index'

const Update = (props) => {
  const [postJob, setPostJob] = useState({
    companyName: "",
    email: "",
    website: "",
    vancancies: "",
    dateOfApply: "",
    experience: "",
    skills: "",
    jobType: "",
    description: "",
})
let keys = [];
 const mystate = useSelector(state => state)
console.log("state is===> " , mystate?.formsdata)
mystate && Object.values(mystate).map((value1, index1) => {
    value1["pushKey"] = Object.keys(mystate)[index1];
    keys.push(value1);
});
        
const onSubmits = () =>{
  
  // database.ref("/JOBSDATA/CompanyData/" +  + "/" ).update({
  //   companyName: postJob.companyName,
  //   email: postJob.email,
  //   website: postJob.website,
  //   vancancies: postJob.vancancies,
  //   dateOfApply: postJob.dateOfApply,
  //   experience: postJob.experience,
  //   skills: postJob.skills,
  //   jobType: postJob.jobType,
  //   description: postJob.description,
  // }).then(() => console.log("user added successfully")).catch((err) => console.log(err)); 
} 
// const mydata = useSelector((state)=> state )
// console.log("mydata====>", mydata)

const inputEvent = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  console.log(name, 'name')
  console.log(value, 'value')
  setPostJob({
      ...postJob,
      [name]: value
  })
}
    const {
        buttonLabel,
        className,
        data
      } = props;
    
      const [modal, setModal] = useState(false);
      const [nestedModal, setNestedModal] = useState(false);
      const [closeAll, setCloseAll] = useState(false);
    
      const toggle = () => setModal(!modal);
      const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
      }
      const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      }
    return(
        <div>
        <Button color="danger" onClick={toggle}>{buttonLabel}Update</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Update form</ModalHeader>
          <ModalBody>
          <Form style={{overflow: "scroll"}} onSubmit={onSubmits}>
            <fieldset>
                <legend style={{
                    display: "block",

                }}>Post Jobs</legend>

                <FormGroup>
                    <Label for="Company Name">Company Name</Label>
                    <Input
                        type="text"
                        name="companyName"
                        value={props.data.companyName}
                        placeholder="Company Name"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={props.data.email}
                        placeholder="Email"
                        onChange={inputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Website">Website</Label>
                    <Input
                        type="Website"
                        name="website"
                        value={props.data.website}
                        placeholder="Website"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Number">Number of Vacancies</Label>
                    <Input
                        type="number"
                        name="vancancies"
                        value={props.data.vancancies}
                        placeholder="number of Vacacies"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Last Date of Apply</Label>
                    <Input
                        type="date"
                        name="dateOfApply"
                        value={props.data.dateOfApply}
                        placeholder="date placeholder"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Experience">Experience</Label>
                    <Input
                        type="text"
                        name="experience"
                        value={props.data.experience}
                        placeholder="Experience"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Skills">Skills</Label>
                    <Input
                        type="text"
                        name="skills"
                        value={props.data.skills}
                        placeholder="Skills"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Job Type">Job Type</Label>
                    <Input type="select" name="jobType" value={props.data.jobType} onChange={inputEvent}>
                        <option>Part Time</option>
                        <option>Full Time</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input type="textarea" name="description" value={props.data.description} onChange={inputEvent} />
                </FormGroup>
                <Button color="primary" size="lg" block type="submit" >Updated</Button>
            </fieldset >
        </Form >
            <br />
          </ModalBody>
      
        </Modal>
      </div>
    )   
}
export default Update;
