import React, {Component} from 'react'
import faker from "faker";

export default class Users extends Component {
    render() {
        const rndUser = faker.internet.userName();
        return (
            <div>
                <div className='onlineUsers'>
                    <h3>Online users:</h3>
                </div>
                <ul className='userGrid'>
                {
                    this.props.users.map((user,i) =>
                        <li key={i}>{user}</li>
                    )}
                </ul>
                <button onClick={() => this.props.addNewUser(rndUser)}>Add User</button>
            </div>
        )
    }
}