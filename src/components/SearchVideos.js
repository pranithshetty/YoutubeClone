import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchCards from "../components/SearchCards";
import { useSearchParams } from "react-router-dom";

const SearchVideos = () => {
	const [videos, setVideos] = useState([]);
	const [searchParams] = useSearchParams();
	const videoName = searchParams.get("q");

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_SEARCH_VIDEO_API + videoName);
		const json = await data.json();
		//console.log(json);
		setVideos(json.items);
	};
	useEffect(() => {
		getVideos();
	}, []);
	return (
		<div className="flex flex-wrap justify-evenly">
			{videos.map((video) => {
				return (
					<Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
						<SearchCards videoInfo={video} />
					</Link>
				);
			})}
		</div>
	);
};

export default SearchVideos;
