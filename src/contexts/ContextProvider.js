import { click } from "@syncfusion/ej2-react-grids";
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [currentColor, setcurrentColor] = useState("#03C9D7");
	const [currentMode, setcurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (e) => {
		setcurrentColor(e.target.value);
		localStorage.setItem("colorMode", e.target.value);
	};

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};
	const [screenSize, setScreenSize] = useState(undefined);

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				currentMode,
				setcurrentColor,
				setcurrentMode,
				themeSettings,
				setThemeSettings,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
