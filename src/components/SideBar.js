import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
	const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

	if (!isSideBarOpen) return null;
	return (
		<div className="p-3 shadow-lg col-span-1 m-2">
			<ul>
				<Link to="/">
					<li>Home</li>
				</Link>
				<li>Short</li>
				<li>Subscriptions</li>
			</ul>
			<h1 className="font-bold pt-5">Subsciptions</h1>
			<ul>
				<li>Music</li>
				<li>Sport</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
			<h1 className="font-bold pt-5">Trending</h1>
			<ul>
				<li>Music</li>
				<li>Sport</li>
				<li>Gaming</li>
				<li>Movies</li>
			</ul>
		</div>
	);
};

export default SideBar;
