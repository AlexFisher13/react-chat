import React, {Component} from 'react'

export default class Users extends Component {
    render() {
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
                <button onClick={() => this.props.addNewUser()}>Add User</button>
            </div>
        )
    }
}