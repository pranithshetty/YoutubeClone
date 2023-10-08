import React from "react";
import SideBar from "./SideBar";
import Head from "./Head";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<>
			<Head />
			<div className="grid grid-flow-col">
				<SideBar />
				<Outlet />
				{/* <MainContainer />
			<WatchPage/> */}
			</div>
		</>
	);
};

export default Body;
