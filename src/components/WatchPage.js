import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { VIDEO_DATA_API } from "../utils/constants";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	const [videoData, setVideoData] = useState({});
	const [seeMore, setSeeMore] = useState(82);

	const getVideo = async () => {
		const data = await fetch(VIDEO_DATA_API + videoId);
		const json = await data.json();
		setVideoData(json.items[0]);
		console.log(json.items[0]);
	};

	useEffect(() => {
		getVideo();
		dispatch(closeMenu());
	}, []);

	return (
		<div className="col-span-6 p-2 m-4">
			<div className="flex">
				<div className="shadow-lg col-span-2 rounded-lg">
					<iframe
						className="rounded-lg p-1"
						width="850"
						height="500"
						src={"https://www.youtube.com/embed/" + videoId}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
					<div className="flex flex-col p-1 m-1">
						<span className="text-2xl font-bold">
							{videoData?.snippet?.title}
						</span>
						<div className="flex items-center">
							<img
								className="h-7 m-2"
								alt="user-icon"
								src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
							/>
							<span className="text-lg font-semibold">
								{videoData?.snippet?.channelTitle}
							</span>
						</div>
						<span>Hello</span>
						<div
							className=" px-2 mx-2 overflow-hidden w-[800px]"
							style={{ height: `${seeMore}px` }}
						>
							<span>{videoData?.snippet?.description}</span>
						</div>
						<span
							onMouseDown={() => setSeeMore(200)}
							className="text-blue-500 bg-transparent px-2 mx-2"
						>
							See more..
						</span>
					</div>
				</div>
				<div className="ml-2 col-span-2">
					<LiveChat />
				</div>
			</div>

			<CommentContainer />
		</div>
	);
};

export default WatchPage;
