import React from "react";

const SearchCards = ({ videoInfo }) => {
	//console.log(videoInfo);
	const { snippet } = videoInfo;
	const { title, thumbnails, channelTitle } = snippet;
	return (
		<div className="shadow-lg rounded-lg m-5 w-80 ">
			<img className="rounded-lg" alt="thubnail" src={thumbnails.medium.url} />
			<div className="p-2">
				<h3 className="font-bold">{title}</h3>
				<h3>{channelTitle}</h3>
			</div>
		</div>
	);
};

export default SearchCards;
