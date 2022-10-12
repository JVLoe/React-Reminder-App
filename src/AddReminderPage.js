import {useState} from "react";
import {useNavigate} from 'react-router-dom'

const AddReminderPage = () => {
    const [title, setTitle] = useState('')
    const navigate = useNavigate() // this lets you redirect using react router functionality

    const handleChangeTitle = (event) => {
        setTitle(event.target.value) // setting to the value of the textbox
    }

    const handleSubmit = (event) => {
        event.preventDefault() // prevent caveman form submission
        fetch('http://localhost:4001/reminders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title, // the one from state
                done: false
            })
        })
        navigate('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleChangeTitle} />
            <input type="submit" value="Add reminder" />
        </form>
    )
}

export default AddReminderPage