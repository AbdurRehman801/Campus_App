import react, {useState, useEffect} from 'react';
import Student from './Student';
import firebaseConfig, { database } from "../firebase";
import { auth } from "../firebase";
import firebase from "firebase";
import UpdateProfile from './updateProfile';
import { addingStudent } from '../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  CardLink,
} from 'reactstrap';

const Profile = () => {
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
          var starCountRef = database.ref('/STUDENTDATA/STUDENT DATA/' + uid + "/");
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
  
  useEffect(() => {
  
    dispatch(addingStudent(array))        

}, [array]);
  return (
    <div>
 <      Card style={{ width: '30%' }}>
                {Object.values(array).map((value3, index3) => {
                    return (
                        <div>
                            <CardBody>
                               <CardText>Name: {value3.name}</CardText>
                                <CardText>Father Name: {value3.fathername}</CardText>
                                <CardText>Date of Birth: {value3.dateofbirth}</CardText>
                                <CardText>Email: {value3.email}</CardText>
                                <CardText>Gender: {value3.gender}</CardText>
                                <CardText>Qualification: {value3.qualification}</CardText>
                                <CardText>CNIC: {value3.cnic}</CardText>
                                <CardText>Phone Number: {value3.phonenumber}</CardText>
                                <CardText>Address: {value3.address}</CardText>
                                <UpdateProfile data={value3} userKey={userKey} />
                            </CardBody>;
                        </div>
                    );
                })}
            </Card>;
    </div>
  );
};

export default Profile;
