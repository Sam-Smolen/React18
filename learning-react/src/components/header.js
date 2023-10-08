const Header = (props) =>  {

        return (
            <>
                <header className={props.active ? 'active' : 'non-active'}>
                {/* <header style={{background: `${this.state.active ? 'red' : 'blue'}`}}> */}
                    <div className="logo">Logo</div>
                    <input onChange={props.keyword}/>
                    <button onClick={props.changeColor}>Change it</button>
                </header>
            </>
        )
    }

export default Header;