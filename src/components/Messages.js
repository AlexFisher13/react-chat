import React, {Component} from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div>
                {
                    this.props.messages.map((mess, i) =>
                        <p key={i}>
                            <span className='time'>{mess.datetime} </span>
                            <span className='chatName'>{mess.author} </span>
                            <span>{mess.text}</span>
                        </p>
                    )
                }
                <br/>
                <br/>
                <input type="text"/>
                <button>Отправить</button>
            </div>
        )
    }
}