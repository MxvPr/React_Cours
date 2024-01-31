import { NavLink } from "react-router-dom";

const checkIsActive = (params) => {
    console.log(params)
    return {
        color: params.isActive ? 'red' : 'black',
        backgroundColor: params.isActive ? 'yellow' : 'white'
    }
}

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink style={checkIsActive} to="/form">DemoForm</NavLink>
                </li>
                <li>
                    <NavLink style={checkIsActive} to="/event">DemoEvent</NavLink>
                </li>
                <li>
                    <NavLink style={checkIsActive} to="/clock">Clock</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav