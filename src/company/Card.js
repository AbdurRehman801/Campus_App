import React, { useState, useEffect } from 'react';
import Forms from './AddingForm';
import { auth } from "../firebase";
import firebaseConfig, { database } from "../firebase";
import { useSelector, useDispatch } from 'react-redux';
import { adding } from '../redux/actions/index';
import Updateform from "./Updateform";
import { Card, CardBody, CardSubtitle, CardTitle, CardText, CardLink } from 'reactstrap';
import { Link } from 'react-router-dom';


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
    const [userKey , setUserKey] = useState("")
    const dispatch = useDispatch();
    const [array, setArray] = useState([]);
    const [uid, setUid] = useState("");
    let arr = [];

    useEffect(async () => {
        await auth.onAuthStateChanged((user) => {
            console.log("user==>", user)
            setUid(user.uid);
        });
    }, []);

    useEffect(() => {
        console.log(uid, 'uid');
        if (uid) {
            var starCountRef = database.ref('/JOBSDATA/CompanyData/' + uid + "/");
            starCountRef.on('value', (snapshot) => {
                const data = snapshot.val();
                console.log("data=====>",data)
                setArray(data ? data : []);
                data && Object.values(data).map((value1, index1) => {
                    value1["pushKey"] = Object.keys(data)[index1];
                    
                    arr.push(value1);
                    setUserKey(value1.pushKey)
                    
                    
                });
            });
        }
    }, [uid]);
    console.log(userKey)
    let temp = "abc"
    useEffect(() => {
        console.log(array, 'array')
            dispatch(adding(array))        
    
    }, [array]);
    


    return (
        <div>
            <Card style={{ width: '30%' }}>
                {Object.values(array).map((value3, index3) => {
                    return (
                        <div>
                            <CardBody>
                                <CardTitle tag="h3">CompanyName {value3.companyName}</CardTitle>
                            </CardBody>
                            <CardBody>
                                <CardText>Date of Apply: {value3.dateOfApply}</CardText>
                                <CardText>Email: {value3.email}</CardText>
                                <CardText>Experience: {value3.experience}</CardText>
                                <CardText>Skills: {value3.skills}</CardText>
                                <CardText>Vacancies: {value3.vancancies}</CardText>
                                <CardText>Website: {value3.website}</CardText>
                                <CardText>Description: {value3.description}</CardText>
                                {console.log("userkey",userKey)}
                                <Updateform data={value3} userKey={userKey} />
                            </CardBody>;
                        </div>
                    );
                })}
            </Card>;
        </div >
    );
};
export default Cards;