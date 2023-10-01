import React from "react";

const VideoCards = ({ videoInfo }) => {
	//console.log(videoInfo);
	const { snippet, statistics } = videoInfo;
	const { title, thumbnails, channelTitle } = snippet;
	const { viewCount } = statistics;
	return (
		<div className="shadow-lg rounded-lg m-5 w-80 ">
			<img className="rounded-lg" alt="thubnail" src={thumbnails.medium.url} />
			<div className="p-2">
				<h3 className="font-bold">{title}</h3>
				<h3>{channelTitle}</h3>
				<h4>{viewCount}</h4>
			</div>
		</div>
	);
};

export default VideoCards;
