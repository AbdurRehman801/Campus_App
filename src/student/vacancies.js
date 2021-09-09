import react,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../firebase";
import firebaseConfig, { database } from "../firebase";
import { adding } from '../redux/actions/index';
import { Card, CardBody, CardSubtitle, CardTitle, CardText, CardLink } from 'reactstrap';


const Vacancies = () => {
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
            var starCountRef = database.ref('/JOBSDATA/CompanyData/');
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
    // useEffect(() => {
    //         dispatch(adding(array))        
    
    // }, [array]);
    
    return(
        <div>
                        <Card style={{backgroundColor:"orange", borderRadius:"2px", width: "25%" }}>
                {Object.values(array).map((value3, index3) => {
                   
                   return Object.values(value3).map((values3,indexes3)=>{
                        return (
                            <div >
                                {console.log("val", values3)}
                                <CardBody>
                                    <CardTitle tag="h3">CompanyName {values3.companyName}</CardTitle>
                                </CardBody>
                                <CardBody>
                                    <CardText>Date of Apply: {values3.dateOfApply}</CardText>
                                    <CardText>Email: {values3.email}</CardText>
                                    <CardText>Experience: {values3.experience}</CardText>
                                    <CardText>Skills: {values3.skills}</CardText>
                                    <CardText>Vacancies: {values3.vancancies}</CardText>
                                    <CardText>Website: {values3.website}</CardText>
                                    <CardText>Description: {values3.description}</CardText>
                                    {console.log("userkey",userKey)}
                                    {/* <Updateform data={value3} userKey={userKey} /> */}
                                </CardBody>;
                            </div>
                        );
                        
                    })
                     
                })}
            </Card>;
        </div>
    )
}
export default Vacancies;
