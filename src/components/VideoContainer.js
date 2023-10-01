import React, { useEffect, useState } from "react";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);
	const getVideos = async () => {
		const data = await fetch(POPULAR_VIDEOS_API);
		const json = await data.json();
		setVideos(json.items);
	};
	useEffect(() => {
		getVideos();
	}, []);
	return (
		<div className="flex flex-wrap justify-evenly">
			{videos.map((video) => {
				return (
					<Link key={video.id} to={"watch?v=" + video.id}>
						<VideoCards videoInfo={video} />
					</Link>
				);
			})}
		</div>
	);
};

export default VideoContainer;
