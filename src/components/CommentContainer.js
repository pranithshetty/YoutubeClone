import React from "react";

const commentData = [
	{
		name: "Pranith Shetty",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing",
		replies: [
			{
				name: "Pranith Shetty",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing",
				replies: [
					{
						name: "Pranith Shetty",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing",
						replies: [],
					},
				],
			},
		],
	},
	{
		name: "Pranith Shetty",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing",
		replies: [
			{
				name: "Pranith Shetty",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing",
				replies: [
					{
						name: "Pranith Shetty",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing",
						replies: [],
					},
				],
			},
		],
	},
	{
		name: "Pranith Shetty",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing",
		replies: [
			{
				name: "Pranith Shetty",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing",
				replies: [
					{
						name: "Pranith Shetty",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing",
						replies: [],
					},
				],
			},
		],
	},
	{
		name: "Pranith Shetty",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing",
		replies: [
			{
				name: "Pranith Shetty",
				text: "lorem ipsum dolor sit amet, consectetur adipiscing",
				replies: [
					{
						name: "Pranith Shetty",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing",
						replies: [],
					},
					{
						name: "Pranith Shetty",
						text: "lorem ipsum dolor sit amet, consectetur adipiscing",
						replies: [
							{
								name: "Pranith Shetty",
								text: "lorem ipsum dolor sit amet, consectetur adipiscing",
								replies: [
									{
										name: "Pranith Shetty",
										text: "lorem ipsum dolor sit amet, consectetur adipiscing",
										replies: [],
									},
								],
							},
							{
								name: "Pranith Shetty",
								text: "lorem ipsum dolor sit amet, consectetur adipiscing",
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Pranith Shetty",
		text: "lorem ipsum dolor sit amet, consectetur adipiscing",
		replies: [],
	},
];

const Comment = ({ data }) => {
	console.log(data);
	return (
		<div className="flex my-1 bg-gray-100 rounded-lg">
			<img
				className="h-8 w-8 m-2"
				alt="User"
				src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png"
			/>
			<div>
				<h2 className="font-bold m-1">{data.name}</h2>
				<h2 className="m-1">{data.text}</h2>
			</div>
		</div>
	);
};

const CommentList = ({ comments }) => {
	return (
		<>
			{comments.map((comment) => {
				return (
					<div>
						<Comment data={comment} />
						<div className="ml-6 border-l border-l-gray-400">
							<CommentList comments={comment.replies} />
						</div>
					</div>
				);
			})}
		</>
	);
};

const CommentContainer = () => {
	return (
		<div className="p-1 m-2">
			<h1 className="text-2xl py-2  font-bold">Comments:</h1>
			<CommentList comments={commentData} />
		</div>
	);
};

export default CommentContainer;
