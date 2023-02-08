import React from "react";
import './Nav.scss';
import { NavLink, Link } from 'react-router-dom';



class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink activeclassname="active" to="/home">Home</NavLink>
                <NavLink activeclassname="active" to="/listtodo">Todos</NavLink>
                <NavLink activeclassname="active" to="/mycpn">Exmaple</NavLink>
                <NavLink activeclassname="active" to="/cpnparent">Change State</NavLink>
                <NavLink activeclassname="active" to="/users">Users</NavLink>
                <NavLink activeclassname="active" to="/todoclass">Todo List Class</NavLink>
                <NavLink activeclassname="active" to="/todohook">Todo List Hook</NavLink>
                <NavLink activeclassname="active" to="/hook">Hook</NavLink>
            </div>
        )
    }
}

export default Navigation;













