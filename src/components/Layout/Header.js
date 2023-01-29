import { React, useState } from "react";
import classes from "./Header.module.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const Header = () => {
	const [isDarkMode, setDarkMode] = useState(false);
	const [fontMenuVisible, setFontMenuVisible] = useState(true);

	const toggleMenu = () => {
		setFontMenuVisible(!fontMenuVisible);
	};

	const body = document.querySelector("body");
	const html = document.querySelector("html");

	const toggleDarkMode = (checked) => {
		setDarkMode(checked);
		if (isDarkMode) {
			body.classList.remove("dark");
			body.classList.add("light");
		} else {
			body.classList.remove("light");
			body.classList.add("dark");
		}
	};
	const changeFont = (font) => {
		html.classList = "";
		html.classList.add(font);
	};
	return (
		<header className={classes.header}>
			<svg width="800px" height="800px" viewBox="0 0 24 24">
				<path d="M18,2 C19.3807,2 20.5,3.11929 20.5,4.5 L20.5,18.75 C20.5,19.1642 20.1642,19.5 19.75,19.5 L5.5,19.5 C5.5,20.0523 5.94772,20.5 6.5,20.5 L19.75,20.5 C20.1642,20.5 20.5,20.8358 20.5,21.25 C20.5,21.6642 20.1642,22 19.75,22 L6.5,22 C5.11929,22 4,20.8807 4,19.5 L4,4.5 C4,3.11929 5.11929,2 6.5,2 L18,2 Z M18,3.5 L6.5,3.5 C5.94772,3.5 5.5,3.94772 5.5,4.5 L5.5,18 L19,18 L19,4.5 C19,3.94772 18.5523,3.5 18,3.5 Z M16,5 C16.5523,5 17,5.44772 17,6 L17,8 C17,8.55228 16.5523,9 16,9 L8,9 C7.44772,9 7,8.55228 7,8 L7,6 C7,5.44772 7.44772,5 8,5 L16,5 Z M15.5,6.5 L8.5,6.5 L8.5,7.5 L15.5,7.5 L15.5,6.5 Z"></path>
			</svg>
			<div className={classes["right-part"]}>
				<div className={classes.relative}>
					<div onClick={toggleMenu} className={classes["select-box"]}>
						Serif
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
							<path fill="none" stroke="#A445ED" d="m1 1 6 6 6-6" />
						</svg>
					</div>
					<ul className={fontMenuVisible ? classes["select-menu"] : classes["select-active"]}>
						<li onClick={() => changeFont("serif")}>Serif</li>
						<li onClick={() => changeFont("montserrat")}>Montserrat</li>
						<li onClick={() => changeFont("mono")}>Roboto mono</li>
					</ul>
				</div>
				<div>
					<DarkModeSwitch sunColor={"#a446ec"} moonColor={"#d3cbcb"} checked={isDarkMode} onChange={toggleDarkMode} size={42} />
				</div>
			</div>
		</header>
	);
};
