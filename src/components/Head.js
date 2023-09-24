import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		return dispatch(toggleMenu());
	};
	return (
		<div className="grid grid-flow-col p-2 m-2 shadow-lg">
			<div className="flex col-span-1 items-center">
				<img
					onClick={() => toggleMenuHandler()}
					className="h-10 mt-1 cursor-pointer"
					alt="hamberg"
					src="https://flyclipart.com/thumb2/-hamburger-menu-list-menu-icon-842779.png"
				/>
				<a href="/">
					<img
						className="h-14 mx-2"
						alt="yt-logo"
						src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
					/>
				</a>
			</div>

			<div className="col-span-10 items-center m-1">
				<input
					className="w-1/2  border border-gray-300 rounded-l-full p-2"
					type="text"
				/>
				<button className="border border-gray-300 rounded-r-full p-2 px-5">
					🔍
				</button>
			</div>
			<div className="col-span-1">
				<img
					className="h-8"
					alt="user-icon"
					src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
				/>
			</div>
		</div>
	);
};

export default Head;
