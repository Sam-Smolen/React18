import React, { Component } from "react";
import {ToastContainer, toast} from "react-toastify";

const Mycontext = React.createContext();

class Myprovider extends Component {

    state = {
        stage:1,
        players: [],
        result: ''
    }

    addPlayerHandler = (name) => {
        this.setState((prevState) => ({
            players: [
                ...prevState.players,
                name
            ]
        }))
    }

    removePlayerHandler = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx, 1);
        this.setState({players: newArray});
    }

    nextHandler = () => {
        const {players} = this.state;
        if (players.length < 2) {
            return toast.error("Must have at least 2 players!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000
            })
        } else {
            this.setState({
                stage: 2
            }, () => {
                setTimeout(()=> {
                    this.generateLoser()
                }, 2000)
            })
        }
    }

    generateLoser = () => {
        const {players} = this.state;
        this.setState({
            result: players[Math.floor(Math.random()*players.length)]
        })
    }

    resetGame = () => {
        this.setState({
            stage:1,
            players: [],
            result: ''
        })
    }

    render() {
        
        return(
            <>
            <Mycontext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayerHandler,
                removePlayer: this.removePlayerHandler,
                next: this.nextHandler,
                getNewLoser: this.generateLoser,
                resetGame: this.resetGame
            }}>
                {this.props.children}
            </Mycontext.Provider>
            <ToastContainer/>
            </>
        )
    }
}

export {Mycontext, Myprovider};