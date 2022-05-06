import '../styles/Home.module.scss';
import Hat from './icons/hat';
import Speaker from './icons/speaker';
import { Word } from '../data/data.types';

const Word: React.FC<{ word: Word }> = (props: { word: Word }) => {
	return (
		<tr className={props.word.type}>
			<td className="cat">{props.word.type}</td>
			<td className="word">{props.word.word}</td>
			<td className="sound">{props.word.sound}</td>
			<td className="buttons">
				<button
					className="button definition"
					data-definition="{{md this.definition}}"
					data-word={props.word.word}
					aria-label={`Show definition of ${props.word.word}`}
					title={`Show definition of ${props.word.word}`}
				>
					<Hat />
				</button>
				<button
					className="button voice"
					data-voice="{{normalize this.word}}"
					aria-label={`Play pronunciation of ${props.word.word}`}
					title={`Play pronunciation of ${props.word.word}`}
				>
					<Speaker />
				</button>
			</td>
		</tr>
	);
};
export default Word;
