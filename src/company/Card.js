import React, { useState, useEffect } from 'react';
import Forms from './AddingForm';
import { auth } from "../firebase";
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";
import Modal from 'react-modal'
import Updateform from "./Updateform"
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
    }.props;

    const [array, setArray] = useState([]);
    let arr = [];

    useEffect( () => {
        var starCountRef = database.ref('/JOBSDATA/CompanyData/' + auth?.currentUser?.uid);
         starCountRef.on('value', (snapshot) => {

             const data = snapshot.val();
             console.log("data", data);
             setArray(data ? data: null)
            data && Object.values(data).map((value1,index1)=>{
                console.log("value1===>",value1)
                Object.values(value1).map((value2,index2)=>{
                    console.log("value2===>",value2)
                    arr.push(value2)
                })
            })

            // data && Object.values(data)?.map((value, index) => {
            //     arr.push(value)
            // });

            // Object.values(data)?.map((value, index) => {
            //     console.log("card data===>", data)
            //     {
            // Object.keys(data[value]).map((prod) => {
            //     console.log(data[value][prod])
            // })
            // }


            // })
        });

        // console.log("array====>", array)
        
    }, []);
    console.log("arr1===>",arr)
    console.log("arry===>",array)
    return (
        <div>
                <Card style={{ width: '30%', }}>
                    {Object.values(array).map((value3,index3)=>{
                        console.log("val3",value3)
                        return (
                        <div>
                    <CardBody>
                        <CardTitle tag="h3">CompanyName {value3?.companyName}</CardTitle>
                    </CardBody>
                    <CardBody>
                        <CardText>Date of Apply: {value3?.dateOfApply}</CardText>
                        <CardText>Email: {value3?.email}</CardText>
                        <CardText>Experience: {value3?.experience}</CardText>
                        <CardText>Skills: {value3?.skills}</CardText>
                        <CardText>Vacancies: {value3?.vancancies}</CardText>
                        <CardText>Website: {value3.website}</CardText>
                        <CardText>Description: {value3?.description}</CardText>
                        <Updateform/>
                    </CardBody>;
                    </div>
                    )})}
                </Card>;
        </div >
    );
};
export default Cards;