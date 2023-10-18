import React,{ Component } from "react";
import UsersItem from "./usersItem";
import { MyContext } from "../context";

class Users extends Component {
    // static contextType = MyContext;

    render() {
        // console.log(this.context)
        return(
            <>
                <MyContext.Consumer>
                    {context => {
                        console.log(context)
                    }}
                </MyContext.Consumer>
                < UsersItem />
            </>
        )
    }
}

export default Users;