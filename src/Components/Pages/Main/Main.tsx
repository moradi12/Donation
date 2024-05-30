import { NavLink } from "react-router-dom";
import "./Main.css";

export function Main(): JSX.Element {
    return (
        <div className="Main">
			<NavLink to ="add ">Add Donation</NavLink>
			<NavLink to ="/higher">Large Donation</NavLink>
			<NavLink to ="/lower">Small Donation</NavLink>
			<NavLink to ="/all">All Donation</NavLink>
			<NavLink to ="/byName">Donation By Name</NavLink>

        </div>
    );
}
