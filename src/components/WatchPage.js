import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();
	const videoId = searchParams.get("v");
	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div className="col-span-8 p-3 m-6">
			<iframe
				width="1000"
				height="600"
				src={"https://www.youtube.com/embed/" + videoId}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			<CommentContainer />
		</div>
	);
};

export default WatchPage;
