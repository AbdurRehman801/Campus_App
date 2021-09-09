import react, {useEffect, useState} from 'react'
import Profile from './profile';
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";
import { auth } from "../firebase";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const UpdateProfile = (props) =>{
    console.log(props)
    const [StudentData, setStudentData] = useState({
        name: '',
        fathername: "",
        gender: "",
        email: "",
        qualification: "",
        cnic: "",
        phonenumber: "",
        dateofbirth: "",
        address: "",
    });


    const onSubmits = (event) => {
        event.preventDefault();
        console.log(StudentData);
         database
            .ref("/STUDENTDATA")
            .child("/STUDENT DATA" + '/' + auth.currentUser.uid + "/" + props.userKey)
            .update({
                name:StudentData.name,
                fathername:StudentData.fathername,
                gender:StudentData.gender,
                email:StudentData.email,
                qualification:StudentData.qualification,
                cnic:StudentData.cnic,
                phonenumber:StudentData.phonenumber,
                dateofbirth:StudentData.dateofbirth,
                address:StudentData.address
            }).then(() => console.log("auth===>",auth.currentUser.uid)).catch((err) => console.log(err));

    };
    
    const deleted = () =>{
        database
        .ref("/STUDENTDATA")
        .child("/STUDENT DATA" + '/' + auth.currentUser.uid + "/" + props.userKey)
        .remove()
    }

    const InputEvent = (event) => {
        setStudentData(
            { ...StudentData,
                [event.target.name]: event?.target.value }
        );
    };
    useEffect(() => {
        setStudentData(props.data);
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
    
    
    
    return(
        <div>
            <Button color="success" onClick={toggle}>{buttonLabel}Update</Button>
            <Button color="danger" onClick= {deleted}>{buttonLabel}Delete</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Update form</ModalHeader>
                <ModalBody>
                <Form style={{
               
            }}onSubmit={onSubmits}>
                <FormGroup>
                    <h1 >Student Data</h1>
                    
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        value={StudentData.name}
                        placeholder="Name"
                        onChange={InputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Father Name</Label>
                    <Input
                        type="text"
                        name="fathername"
                        value={StudentData.fathername}
                        placeholder="Father Name"
                        onChange={InputEvent}
                    />
                    <label>Gender</label>
                    <input type="radio" id="std" name="gender"  className="radio1"  value="male" onClick={()=> setStudentData({...StudentData, gender: "male"})} />
                    <label for="std">Male</label>
                    <input type="radio" id="comp" name="gender" className="radio2" value='female' onClick={()=> setStudentData({...StudentData, gender: 'female'})} />
                    <label for="comp">Female</label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={StudentData.email}
                        placeholder="email"
                        onChange={InputEvent}
                    />

                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Qualification</Label>
                    <Input
                        type="text"
                        name="qualification"
                        value={StudentData.qualification}
                        placeholder="Qualification"
                        onChange={InputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">CNIC</Label>
                    <Input
                        type="number"
                        name="cnic"
                        value={StudentData.cnic}
                        placeholder="CNIC"
                        onChange={InputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Phone Number</Label>
                    <Input
                        type="number"
                        name="phonenumber"
                        value={StudentData.phonenumber}
                        placeholder="Phone Number"
                        onChange={InputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Date of Birth</Label>
                    <Input
                        type="date"
                        name="dateofbirth"
                        value={StudentData.dateofbirth}
                        placeholder="date of birth"
                        onChange={InputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Address</Label>
                    <Input type="textarea" name="address" value={StudentData.address} onChange={InputEvent} />
                </FormGroup>








                <Button color="primary" size="lg" block type="submit" >Submit</Button>
            </Form>
                    <br />
                </ModalBody>

            </Modal>
        </div>
    )
}
export default UpdateProfile;