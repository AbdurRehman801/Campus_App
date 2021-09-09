import react, {useState} from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button } from 'reactstrap';
import { auth } from "../firebase";
import firebase from "firebase";
import firebaseConfig, { database } from "../firebase";


const AddProfile = (props) => {
    const [data, setData] = useState({
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
    const InputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, 'name');
        console.log(value, 'value');
        setData({
            ...data,
            [name]: value
        });
    };
    const onSubmits = (event) =>{
        event.preventDefault();
        console.log(data);
         database
            .ref("STUDENTDATA")
            .child("/STUDENT DATA" + "/" + auth.currentUser.uid)
            .push({
                name: data.name,
                fathername: data.fathername,
                gender: data.gender,
                email: data.email,
                qualification: data.qualification,
                cnic: data.cnic,
                phonenumber: data.phonenumber,
                dateofbirth: data.dateofbirth,
                address: data.address,
            }).then(() => console.log("user added successfully")).catch((err) => console.log(err));
    }

    return (
        <div>
            <Form style={{
                width: "50%", marginLeft: "350px", border: "2px solid Black", paddingLeft: "2px",
                paddingRight: "2px"
            }}onSubmit={onSubmits}>
                <FormGroup>
                    <h1 >Student Data</h1>
                    
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        placeholder="Name"
                        onChange={InputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Father Name</Label>
                    <Input
                        type="text"
                        name="fathername"
                        value={data.fathername}
                        placeholder="Father Name"
                        onChange={InputEvent}
                    />
                    <label>Gender</label>
                    <input type="radio" id="std" name="gender"  className="radio1"  value="male" onClick={()=> setData({...data, gender: "male"})} />
                    <label for="std">Male</label>
                    <input type="radio" id="comp" name="gender" className="radio2" value='female' onClick={()=> setData({...data, gender: 'female'})} />
                    <label for="comp">Female</label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="email"
                        onChange={InputEvent}
                    />

                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Qualification</Label>
                    <Input
                        type="text"
                        name="qualification"
                        value={data.qualification}
                        placeholder="Qualification"
                        onChange={InputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">CNIC</Label>
                    <Input
                        type="number"
                        name="cnic"
                        value={data.cnic}
                        placeholder="CNIC"
                        onChange={InputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleNumber">Phone Number</Label>
                    <Input
                        type="number"
                        name="phonenumber"
                        value={data.phonenumber}
                        placeholder="Phone Number"
                        onChange={InputEvent}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleDate">Date of Birth</Label>
                    <Input
                        type="date"
                        name="dateofbirth"
                        value={data.dateofbirth}
                        placeholder="date of birth"
                        onChange={InputEvent}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Address</Label>
                    <Input type="textarea" name="address" value={data.address} onChange={InputEvent} />
                </FormGroup>








                <Button color="primary" size="lg" block type="submit" >Submit</Button>
            </Form>
        </div>
    );
};
export default AddProfile;