import React from "react";
import classes from "./SingleWord.module.css";
import { WordMeaningDetail } from "./WordMeaningDetail";

export const SingleWord = (props) => {
	const { word, phonetics, meanings, sourceUrls } = props.word;
	const start = (item) => {
		let audio = new Audio(item);
		audio.play();
	};
	return (
		<div>
			<h2>{word}</h2>
			{phonetics
				? phonetics.map((item, index) => {
						return (
							<div key={index}>
								{item.text ? (
									<div className={classes["audio-component"]} key={index}>
										<h4>{item.text}</h4>
										{item.audio ? (
											<svg className={classes["audio-btn"]} onClick={() => start(item.audio)} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
												<g>
													<circle cx="37.5" cy="37.5" r="37.5" opacity="0.25"></circle>
													<path d="M29 27v21l21-10.5z"></path>
												</g>
											</svg>
										) : (
											<svg className={classes["audio-btn-danger"]} onClick={() => start(item.audio)} xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
												<g>
													<circle cx="37.5" cy="37.5" r="37.5" opacity="0.25"></circle>
													<path d="M29 27v21l21-10.5z"></path>
												</g>
											</svg>
										)}
									</div>
								) : (
									""
								)}
							</div>
						);
				  })
				: ""}
			{meanings ? meanings.map((meaning, index) => <WordMeaningDetail key={index} partOfSpeech={meaning.partOfSpeech} definitions={meaning.definitions} synonyms={meaning.synonyms} antonyms={meaning.antonyms}></WordMeaningDetail>) : ""}
			{sourceUrls && (
				<small>
					Source
					<a target="blank" href={sourceUrls}>
						{sourceUrls}
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
							<script xmlns=""></script>
							<path fill="none" stroke="#838383" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5" />
						</svg>
					</a>
				</small>
			)}
		</div>
	);
};
