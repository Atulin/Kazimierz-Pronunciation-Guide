import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import data from '../data/data';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<meta name="description" content="{data.description}" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Component {...pageProps} />

			<footer></footer>
		</div>
	);
}

export default MyApp;
