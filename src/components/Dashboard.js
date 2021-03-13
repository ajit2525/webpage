import React, { Component } from 'react'
import auth from './auth'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                dasboard
                <button onClick={() => {
                    auth.logout(() => {
                        this.props.history.push('/')
                    })
                }}>logout</button>
            </div>
        )
    }
}