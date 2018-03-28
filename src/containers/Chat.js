import React, { Component } from 'react';
import {connect} from 'react-redux'
import Messages from "../components/Messages";
import Users from "../components/Users";

class Chat extends Component {
  render() {
    return (
      <div className='chat'>
         <Messages/>
         <Users users={this.props.users} addNewUser={this.props.addNewUser}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        users: store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (rndUser) =>  dispatch({type: 'ADD_USER', payload: rndUser})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
