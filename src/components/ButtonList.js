import React from "react";
import Button from "./Button";

const buttonNames = [
	"All",
	"Live",
	"Soccer",
	"Cooking",
	"Sabudana",
	"Ajji",
	"Soccer",
	"Cooking",
	"Sabudana",
	"Ajji",
	"Soccer",
	"Cooking",
	"Sabudana",
	"Ajji",
];
const ButtonList = () => {
	return (
		<div className="flex flex-wrap">
			{buttonNames.map((name, index) => {
				return <Button key={name + index} name={name} />;
			})}
		</div>
	);
};

export default ButtonList;
