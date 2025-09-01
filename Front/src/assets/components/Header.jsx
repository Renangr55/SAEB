import React from "react"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header className="flex justify-around bg-blue-500 h-15 items-center">
                <h1 className="text-white">Task Manager</h1>

                <ul className="flex gap-5 text-white">
                    <li><Link to={"/"} >Create User</Link></li>
                    <li><Link to={"/createTask"}>Create Task</Link></li>
                    <li><a href="">Create User</a></li>
                </ul>
            </header>
        </>
    )
}
export default Header;