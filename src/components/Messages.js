import React, {Component} from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div>
                    <p>
                       <span className='time'>09/08/2018 </span>
                       <span className='chatName'>July: </span>
                       <span>Hello</span>
                    </p>
                    <p>
                        <span className='time'>09/08/2018 </span>
                        <span className='chatName'>Sasha: </span>
                        <span>Hey baby</span>
                    </p>
                <br/>
                <br/>
                <input type="text"/>
                <button>Отправить</button>
            </div>
        )
    }
}