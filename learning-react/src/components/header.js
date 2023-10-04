import React,{ Component } from "react";

class Header extends Component {

    state = {
        title:'The keyword are:',
        keywords:'',
        count:0
    }

    
    inputChange = (event) => {
        this.setState({
            keywords: event.target.value
        })
    }

    addOne(){
        this.setState((state,props)=>({
            count: state.count + 1
        }))
    }


    render(){
        
        return (
            <>
                <header>
                    <div className="logo">Logo</div>
                    <input onChange={(e)=> this.inputChange(e)}/>
                </header>
            </>
        )
    }

}

export default Header;