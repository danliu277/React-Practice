/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React, { createContext, useState } from "react"
import { Route, BrowserRouter as Router } from 'react-router-dom'

import LoginComponent from "./Login/LoginComponent"
import CreateUserComponent from "./CreateUser/CreateUserComponent"
import HomeContainer from "./Home/HomeContainer"
import HeaderComponent from "./Header/HeaderComponent"

const routing = (
    <Router>
        <div>
            <Route path="/login" component={LoginComponent} />
            <Route path="/create" component={CreateUserComponent} />
            <Route path="/" exact component={HomeContainer} />
        </div>
    </Router>
)

const UserContext = createContext();

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            user: null
        }
    }

    setUser(user) {
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <React.Fragment>
                <UserContext.Provider>
                    <HeaderComponent />
                    <meta name="csrf-token" content="{{csrfToken}}"></meta>
                    {routing}
                </UserContext.Provider>
            </React.Fragment>
        )
    }
}

export default App
export const UserContextConsumer = UserContext.Consumer;