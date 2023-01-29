import React from "react";
import "./index.css";
import { Header } from "./components/Layout/Header";
import { SearchInput } from "./components/SearchInput/SearchInput";
export const App = () => {
	return (
		<>
			<Header />
			<SearchInput />
		</>
	);
};
