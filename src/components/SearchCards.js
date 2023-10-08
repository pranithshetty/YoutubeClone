import React from "react";

const SearchCards = ({ videoInfo }) => {
	//console.log(videoInfo);
	const { snippet } = videoInfo;
	const { title, thumbnails, channelTitle, description } = snippet;
	return (
		<div className="shadow-lg rounded-lg m-5 w-12/12 flex">
			<img className="rounded-lg" alt="thubnail" src={thumbnails.medium.url} />
			<div className="p-2">
				<h3 className="font-bold overflow-auto">{title}</h3>
				<h3>{channelTitle}</h3>
				<span>{description}</span>
			</div>
		</div>
	);
};

export default SearchCards;
