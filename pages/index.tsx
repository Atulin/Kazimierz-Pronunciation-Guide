import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import data from '../data/data';
import Word from '../components/word';

export function getStaticProps() {
	return {
		props: data,
	};
}

const Home: NextPage = () => {
	return (
		<main className={styles.main}>
			<h1>{data.title}</h1>

			<div id="description">{data.desc}</div>

			<table id="words">
				{data.words.map((word) => {
					return <Word word={word} />;
				})}
			</table>
		</main>
	);
};

export default Home;
