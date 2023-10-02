import React from "react";

const ChatMessage = ({ name, message }) => {
	return (
		<div className="w-full shadow-sm bg-slate-100 flex items-center p-2">
			<img
				className="h-5 w-5 m-2"
				alt="user"
				src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
			/>
			<span className="font-bold m-1 ">{name}</span>
			<span>{message}</span>
		</div>
	);
};

export default ChatMessage;
