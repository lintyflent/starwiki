import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../../utils/context"
import "./header-view.sass"

export const HeaderView = () =>
{
    const { pages } = useContext( Context );
    return(
        <header className={"header"}>
            <Link to={"/"} className={"header-link"}>star DB</Link>
            <nav>
                <ul className={"header-ul"}>
                    <li><Link to={ "/"+pages[0]+"/" }>{ pages[0] }</Link></li>
                    <li><Link to={ "/"+pages[1]+"/" }>{ pages[1] }</Link></li>
                    <li><Link to={ "/"+pages[2]+"/" }>{ pages[2] }</Link></li>
                </ul>
            </nav>
            <Menu/>
        </header>
    )
}

const Menu = () =>
{
    const { pages } = useContext( Context );
    return (
        <div className="dropdown header-menu">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
            </button>
            <div className="dropdown-menu header-menu-list" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to={ "/"+pages[0]+"/" }>{ pages[0] }</Link>
                <Link className="dropdown-item" to={ "/"+pages[1]+"/" }>{ pages[1] }</Link>
                <Link className="dropdown-item" to={ "/"+pages[2]+"/" }>{ pages[2] }</Link>
            </div>
        </div>
    );
}