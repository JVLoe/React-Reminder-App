import React from "react";
import {useState, useEffect} from 'react'
import Reminder from "./Reminder";
import './RemindersList.css'

class RemindersListNewAndWorse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reminders: []
        }
    }

    componentDidMount() {
        fetch ('http://localhost:4001/reminders')
            .then(response => response.json())
            .then(responseBody => {
                this.setState({
                    reminders: responseBody.data.reminders
                })
            })
    }

        render() {
        return (
            <div className={'remindersListContainer'}>
                <div className={'remindersList'}>
                    {this.state.reminders.map((reminder) => <Reminder
                        id={reminder._id}
                        title={reminder.title}
                        done={reminder.done}
                    />)}
                </div>
            </div>
        )
    }
}

export default RemindersListNewAndWorse



