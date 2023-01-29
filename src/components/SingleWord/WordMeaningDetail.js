import React from "react";
import classes from "./WordMeaningDetail.module.css";

export const WordMeaningDetail = (props) => {
	const { partOfSpeech, definitions, synonyms, antonyms } = props;
	return (
		<div>
			<div className={classes.heading}>
				{partOfSpeech}
				<div className={classes.hr}></div>
			</div>
			<div className={classes["heading-grey"]}>Meaning</div>
			<ul className={classes.list}>
				{definitions.map((word, index) => {
					return (
						<div key={index}>
							<li>{word.definition}</li>
							{word.example && <q>{word.example}</q>}
						</div>
					);
				})}
			</ul>
			{synonyms.length > 0 && (
				<div className={classes["word-list"]}>
					<div className={classes["heading-grey"]}>Synonum</div>
					{synonyms.map((synonym, index) => {
						return (
							<div className={classes["heading-pink"]} key={index}>
								<div>{synonym}</div>
							</div>
						);
					})}
				</div>
			)}
			{antonyms.length > 0 && (
				<div className={classes["word-list"]}>
					<div className={classes["heading-grey"]}>Antonym</div>
					{antonyms.map((antonym, index) => {
						return (
							<div className={classes.antonym} key={index}>
								<div className={classes["heading-pink"]}>{antonym}</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};
