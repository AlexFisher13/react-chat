import React, { Component } from 'react';
import {connect} from 'react-redux'
import Messages from "../components/Messages";
import Users from "../components/Users";
import {addUser} from "../actions/actions";
import {bindActionCreators} from 'redux'

class Chat extends Component {
  render() {
    return (
      <div className='chat'>
         <Messages messages={this.props.messages}/>
         <Users users={this.props.users} addNewUser={this.props.addNewUser}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        users: store.userReducer,
        messages: store.messageReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: bindActionCreators(addUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
