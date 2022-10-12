import FontContext from "./FontContext";

const Reminder = (props) => {
    const handleClick = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !props.done // set it to the opposite of the current value
            })
        }
        const requestUrl = 'http://localhost:4001/reminders/' + props.id
        fetch(requestUrl, requestOptions)
    }
    return (
        <FontContext.Consumer>
            { contextData => (
                <div className={contextData.currentFont}>
                    <input type="checkbox" onClick={handleClick} name={props.id} defaultChecked={props.done}/>
                    <label htmlFor={props.id}>{props.title}</label>
                </div>
            )}
        </FontContext.Consumer>
    )
}

export default Reminder