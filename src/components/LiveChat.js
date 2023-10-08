import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import chatSlice, { addMessage } from "../utils/chatSlice";
import { generateRandomNames } from "../utils/helper";

const LiveChat = () => {
	const dispatch = useDispatch();
	const chatMessages = useSelector((store) => store.chat.messages);

	const [liveMessage, setLiveMessage] = useState("");
	useEffect(() => {
		const interval = setInterval(() => {
			//api polling
			dispatch(
				addMessage({
					name: generateRandomNames(),
					message: "lorem ipsum dolor sit amet, consectetur",
				})
			);
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	});
	return (
		<div>
			<div className="border border-slate-200 w-full rounded-lg h-[500px] shadow-lg overflow-y-scroll flex flex-col-reverse">
				{chatMessages.map((chatMessage, index) => {
					return (
						<ChatMessage
							key={index}
							name={chatMessage.name}
							message={chatMessage.message}
						/>
					);
				})}
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(addMessage({ name: "You", message: liveMessage }));
					setLiveMessage("");
				}}
			>
				<input
					type="text"
					placeholder="Your Message"
					onChange={(e) => setLiveMessage(e.target.value)}
					value={liveMessage}
					className="w-full p-2 m-2 border border-gray-300"
				/>
				<button
					type="submit"
					className="p-2 m-2 text-center bg-slate-300 rounded w-full"
				>
					Add Comment
				</button>
			</form>
		</div>
	);
};

export default LiveChat;
