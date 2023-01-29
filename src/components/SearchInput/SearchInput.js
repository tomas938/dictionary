import { React, useState, useEffect, useCallback } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import classes from "./SearchInput.module.css";
import { SingleWord } from "../SingleWord/SingleWord";

export const SearchInput = () => {
	const [searchedWord, setSearchedWord] = useState("keyboard");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [wordData, setWordData] = useState([]);

	const fetchWord = useCallback(async (query) => {
		setIsLoading(true);
		setError(null);
		try {
			const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
			if (!res.ok) {
				setWordData([]);
				throw new Error("Something went wrong");
			}
			const data = await res.json();
			// Timetout for loader //
			setTimeout(() => {
				setWordData(data);
				setIsLoading(false);
			}, 300);
		} catch (error) {
			// Timetout for loader //
			setTimeout(() => {
				setError(error.message);
				setIsLoading(false);
			}, 300);
		}
	}, []);
	useEffect(() => {
		// Debounce //
		const indentifier = setTimeout(() => {
			fetchWord(searchedWord);
			console.log(searchedWord);
		}, 300);
		return () => {
			clearTimeout(indentifier);
		};
	}, [fetchWord, searchedWord]);

	const inputHandler = (e) => {
		setSearchedWord(e.target.value);
	};

	return (
		<>
			<input onChange={inputHandler} className={classes.input} />
			<PropagateLoader className={classes.spinner} color={"#a446ec"} loading={isLoading} size={15} aria-label="Loading Spinner" data-testid="loader" />
			{error ? (
				<h1 className={classes.center}>🧨 Sorry we coundn't find a result 🧨</h1>
			) : (
				wordData.map((wordInformation, index) => {
					return <SingleWord key={index} word={wordInformation}></SingleWord>;
				})
			)}
		</>
	);
};
