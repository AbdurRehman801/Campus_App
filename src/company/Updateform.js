import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";
import { auth } from "../firebase";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cards from './Card';
import Forms from "./AddingForm";
import formsData from '../redux/reducers/formdata';
import { useSelector, useDispatch } from 'react-redux';
// import {updatedata} from '../redux/actions/index'

const Update = (props) => {
    console.log(props)
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
    });


    const onSubmits = (event) => {
        event.preventDefault();
        console.log(postJob);
         database
            .ref("/JOBSDATA")
            .child("/CompanyData" + '/' + auth.currentUser.uid + "/" + props.userKey)
            .update({
                companyName: postJob.companyName,
                website: postJob.website,
                vancancies: postJob.vancancies,
                dateOfApply: postJob.dateOfApply,
                experience: postJob.experience,
                skills: postJob.skills,
                jobType: postJob.jobType,
                description: postJob.description,
            }).then(() => console.log("auth===>",auth.currentUser.uid)).catch((err) => console.log(err));

    };
    
    const deleted = () =>{
        database
        .ref("/JOBSDATA")
        .child("/CompanyData" + '/' + auth.currentUser.uid + "/" + props.userKey)
        .remove()
    }

    const inputEvent = (event) => {
        setPostJob(
            { ...postJob,
                [event.target.name]: event?.target.value }
        );
    };
    useEffect(() => {
        setPostJob(props.data);
    }
        , []);
        
 
    const {
        buttonLabel,
        className,
        data,
        userkey
    } = props;

    const [modal, setModal] = useState(false);
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    };
    return (
        <div>
            <Button color="success" onClick={toggle}>{buttonLabel}Update</Button>
            <Button color="danger" onClick= {deleted}>{buttonLabel}Delete</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Update form</ModalHeader>
                <ModalBody>
                    <Form style={{ overflow: "scroll" }} onSubmit={onSubmits}>
                        <fieldset>
                            <legend style={{
                                display: "block",

                            }}>Post Jobs</legend>

                            <FormGroup>
                                <Label for="Company Name">Company Name</Label>
                                <Input
                                    type="text"
                                    name="companyName"
                                    value={postJob.companyName}
                                    placeholder="Company Name"
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={postJob.email}
                                    placeholder="Email"
                                    onChange={inputEvent}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="Website">Website</Label>
                                <Input
                                    type="Website"
                                    name="website"
                                    value={postJob.website}
                                    placeholder="Website"
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Number">Number of Vacancies</Label>
                                <Input
                                    type="number"
                                    name="vancancies"
                                    value={postJob.vancancies}
                                    placeholder="number of Vacacies"
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleDate">Last Date of Apply</Label>
                                <Input
                                    type="date"
                                    name="dateOfApply"
                                    value={postJob.dateOfApply}
                                    placeholder="date placeholder"
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Experience">Experience</Label>
                                <Input
                                    type="text"
                                    name="experience"
                                    value={postJob.experience}
                                    placeholder="Experience"
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Skills">Skills</Label>
                                <Input
                                    type="text"
                                    name="skills"
                                    value={postJob.skills}
                                    placeholder="Skills"
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Job Type">Job Type</Label>
                                <Input type="select" name="jobType" value={postJob.jobType}
                                    onChange={inputEvent}
                                >
                                    <option>Part Time</option>
                                    <option>Full Time</option>

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="Description">Description</Label>
                                <Input type="textarea" name="description" value={postJob.description}
                                    onChange={inputEvent}
                                />
                            </FormGroup>
                            <Button color="primary" size="lg" block type="submit" >Updated</Button>
                        </fieldset >
                    </Form >
                    <br />
                </ModalBody>

            </Modal>
        </div>
    );
};
export default Update;
