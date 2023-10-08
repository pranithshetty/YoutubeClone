import React from "react";
import SideBar from "./SideBar";
import Head from "./Head";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div className=" col-span-12">
			<Head />
			<div className="grid grid-flow-col">
				<SideBar />
				<Outlet />
				{/* <MainContainer />
			<WatchPage/> */}
			</div>
		</div>
	);
};

export default Body;
