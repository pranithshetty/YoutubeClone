import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div className="col-span-8 p-2 m-4">
			<div className="flex w-full">
				<div className="shadow-lg">
					<iframe
						className="rounded-lg "
						width="900"
						height="600"
						src={"https://www.youtube.com/embed/" + videoId}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="ml-2">
					<LiveChat />
				</div>
			</div>

			<CommentContainer />
		</div>
	);
};

export default WatchPage;
