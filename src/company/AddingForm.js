import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button } from 'reactstrap';

const Forms = (props) => {
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
    const inputEvent = (event) => {

    }
    const onSubmit = (event) => {
        event.preventDefault();

    }
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
                        id="companyname"
                        placeholder="Company Name"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Email"
                        onChange={inputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Website">Website</Label>
                    <Input
                        type="Website"
                        name="Website"
                        id="Website"
                        placeholder="Website"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Number">Number of Vacancies</Label>
                    <Input
                        type="number"
                        name="number"
                        id="exampleNumber"
                        placeholder="number of Vacacies"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Last Date of Apply</Label>
                    <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="date placeholder"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Experience">Experience</Label>
                    <Input
                        type="text"
                        name="Experience"
                        id="Experience"
                        placeholder="Experience"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Skills">Skills</Label>
                    <Input
                        type="text"
                        name="Skills"
                        id="Skills"
                        placeholder="Skills"
                        onChange={inputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Job Type">Job Type</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={inputEvent}>
                        <option>Part Time</option>
                        <option>Full Time</option>

                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="Description">Description</Label>
                    <Input type="textarea" name="Description" id="Description" onChange={inputEvent} />
                </FormGroup>
                <Button color="primary" size="lg" block type="submit" >Submit</Button>
            </fieldset >
        </Form >
    );
}

export default Forms;