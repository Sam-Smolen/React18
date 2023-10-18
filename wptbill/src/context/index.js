import React, { Component } from "react";

const Mycontext = React.createContext();

class Myprovider extends Component {

    state = {
        stage:1
    }

    render() {
        
        return(
            <Mycontext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </Mycontext.Provider>
        )
    }
}

export {Mycontext, Myprovider};