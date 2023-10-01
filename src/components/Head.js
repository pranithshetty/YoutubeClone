import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		return dispatch(toggleMenu());
	};
	const getSearchQueryResults = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);
	};
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [suggestionsVisible, setSuggestionsVisible] = useState(false);
	useEffect(() => {
		//deboucing the search
		const timer = setTimeout(() => getSearchQueryResults(), 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);
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
					className="w-1/2  border border-gray-300 rounded-l-full px-4 py-2"
					type="text"
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => setSuggestionsVisible(true)}
					onBlur={() => setSuggestionsVisible(false)}
				/>
				<button className="border border-gray-300 rounded-r-full px-3 py-2 ">
					🔍
				</button>

				{suggestionsVisible && (
					<div className="bg-white absolute w-2/6 m-2 rounded-lg shadow-lg border border-gray-200">
						<ul>
							{suggestions.map((suggestion) => {
								return (
									<li
										key={suggestion}
										className="px-2 py-2 shadow-sm hover:bg-gray-200"
									>
										{suggestion}
									</li>
								);
							})}
						</ul>
					</div>
				)}
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
