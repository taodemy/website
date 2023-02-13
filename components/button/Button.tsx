import React from "react";

type ButtonProps = {
  buttonWidth?: string;
	buttonHeight?: string;
	isBlack?: boolean;
	placeHolder?: string;
};

const Button = ({buttonWidth, buttonHeight, isBlack, placeHolder}: ButtonProps) => {
	const buttonBackground = isBlack ? "#000000" : "#FFFFFF";
	const fontColor = isBlack ? "#FFFFFF" : "#000000";
	const buttonStyle = {
		width: buttonWidth,
		height: buttonHeight,
		borderRadius: "6px",
		background: buttonBackground,
		color: fontColor,
	}
	
	return(
		<button style={buttonStyle} className="text-meta">{placeHolder}</button>
	)
}

export default Button