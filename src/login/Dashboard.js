import react from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
const Dashboard = () => {
    const state = useSelector(state => state.state)
    console.log(state)
    return (
        <div>
            <h1>Hello i am dashboard</h1>
        </div>
    )
}
export default Dashboard