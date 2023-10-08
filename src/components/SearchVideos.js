import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchCards from "../components/SearchCards";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";

const SearchVideos = () => {
	const [videos, setVideos] = useState([]);
	const [searchParams] = useSearchParams();
	const videoName = searchParams.get("q");
	const dispatch = useDispatch();
	const getVideos = async () => {
		const data = await fetch(YOUTUBE_SEARCH_VIDEO_API + videoName);
		const json = await data.json();
		console.log(json.items);
		setVideos([...new Set(json.items)]);
	};
	useEffect(() => {
		getVideos();
		dispatch(openMenu());
	}, [videoName]);
	return (
		<div className="flex flex-col items-start col-span-9 px-10">
			{videos.map((video, index) => {
				return (
					<Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
						<SearchCards key={video?.id?.videoId} videoInfo={video} />
					</Link>
				);
			})}
		</div>
	);
};

export default SearchVideos;
