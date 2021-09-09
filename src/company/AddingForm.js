import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";
import { useSelector, useDispatch } from 'react-redux';
import { adding } from '../redux/actions/index';
import { auth } from "../firebase";
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button } from 'reactstrap';
import Cards from './Card';
import formsData from '../redux/reducers/formdata';

const Forms = (props) => {
    const [postJob, setPostJob] = useState({
        id: '',
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
    

   
    const dispatch = useDispatch();

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, 'name');
        console.log(value, 'value');
        setPostJob({
            ...postJob,
            [name]: value
        });
    };

    const onSubmits = async (event) => {
        event.preventDefault();
        console.log(postJob);
        await database
            .ref("/JOBSDATA")
            .child("/CompanyData" + "/" + auth.currentUser.uid)
            .push({
                id: auth.currentUser.uid + "/",
                companyName: postJob.companyName,
                email: postJob.email,
                website: postJob.website,
                vancancies: postJob.vancancies,
                dateOfApply: postJob.dateOfApply,
                experience: postJob.experience,
                skills: postJob.skills,
                jobType: postJob.jobType,
                description: postJob.description,
            }).then(() => console.log("user added successfully")).catch((err) => console.log(err));

        var starCountRef = database.ref('/JOBSDATA/CompanyData/' + auth.currentUser.uid);
        await starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log("data===>", data);
            
            // Object.values(data)?.map((value, index) => {
            //     {
            // //         Object.keys(data[value]).map((prod) => {
            // //             console.log(data[value][prod])
            // //         })
            //     }


            // });
    
        });



    };

    return (
        <Form style={{
            width: "50%", marginLeft: "350px", border: "2px solid Black", paddingLeft: "2px",
            paddingRight: "2px"
        }} onSubmit={onSubmits}>
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
                    <Input type="select" name="jobType" value={postJob.jobType} onChange={inputEvent}>
                        <option>Part Time</option>
                        <option>Full Time</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input type="textarea" name="description" value={postJob.description} onChange={inputEvent} />
                </FormGroup>
                <Button color="primary" size="lg" block type="submit" >Submit</Button>
            </fieldset >
        </Form >
    );
};

export default Forms;