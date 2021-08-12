import React, { useState, useEffect } from 'react';
import Forms from './AddingForm'
import { auth } from "../firebase";
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";
import { Card, CardBody, CardSubtitle, CardTitle, CardText, CardLink } from 'reactstrap';


const Cards = (props) => {
    const detail = {
        companyName: "",
        email: "",
        website: "",
        vancancies: "",
        dateOfApply: "",
        experience: "",
        skills: "",
        jobType: "",
        description: "",
    }.props.value

    const [array, setArray] = useState();

    useEffect(() => {
        var starCountRef = database.ref('/JOBSDATA/CompanyData/' + auth.currentUser.uid);
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();

            Object.values(data)?.map((value, index) => {
                console.log("data===>", data)
                {
                    // Object.keys(data[value]).map((prod) => {
                    //     console.log(data[value][prod])
                    // })
                }


            })

        });


    }, [])

    return (
        <div>
            <Card style={{ width: '30%', }}>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                </CardBody>
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                    <CardLink href="#">Update</CardLink>
                    <CardLink href="#">Delete</CardLink>
                </CardBody>
            </Card>
        </div >
    )
}
export default Cards;