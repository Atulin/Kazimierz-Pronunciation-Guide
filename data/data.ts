import { Data } from './data.types';

const data: Data = {
	title: 'Kazimierz — a pronunciation guide',
	desc: "Kazimierz in Arknights is based on Poland and various events and characters use Polish words.\nSome of them can be hard to figure out the pronunciation of, so here's a guide from a native speaker.\n",
	github: 'https://github.com/Atulin/Kazimierz-Pronunciation-Guide',
	kofi: 'https://ko-fi.com/angius',
	words: [
		{
			word: 'Kazimierz',
			sound: 'Kah-zhee-myesh',
			definition:
				'Fairly common name for a city or a part of it, but also a male name.',
			type: 'place',
		},
		{
			word: 'Kawalerielki',
			sound: 'Ka-va-lehr-yel-ki',
			definition:
				'Not actually a Polish word, only Polish-sounding. The root seems to be *kawaleria* (cavalry), and the *-elki* ending suggests a plural diminutive form.',
			type: 'place',
		},
		{
			word: 'Sprawiedliwi',
			sound: 'Sprah-vye-dlee-vee',
			definition: 'Plural form of *sprawiedliwy* (righteous)',
			type: 'group',
		},
		{
			word: 'Słoma',
			sound: 'Swo-mah',
			definition: 'Straw',
			type: 'group',
		},
		{
			word: 'Mieszko',
			sound: 'Miesh-co',
			definition:
				'Mieszko I was the first Polish ruler to unify it and create an independent Polish country.\n[Wikipedia](https://en.wikipedia.org/wiki/Mieszko_I)\n',
			type: 'group',
		},
		{
			word: 'Zofia',
			sound: 'Zoh-fya',
			definition: 'Female name',
			type: 'character',
		},
		{
			word: 'Kowal',
			sound: 'Koh-val',
			definition: 'The literal meaning is *blacksmith*',
			type: 'character',
		},
		{
			word: 'Maciej',
			sound: 'Mah-tsiey',
			definition: 'Male name',
			type: 'character',
		},
		{
			word: 'Maria',
			sound: 'Mar-yah',
			definition: 'Female name',
			type: 'character',
		},
		{
			word: 'Czarny',
			sound: 'Char-nyh',
			definition: 'The literal meaning is *black*',
			type: 'character',
		},
		{
			word: 'Młynar',
			sound: 'Mwe-narh',
			definition: 'This word takes root in *młyn* (mill)',
			type: 'character',
		},
		{
			definition: 'Female name',
			sound: 'Yus-tyh-nah',
			type: 'character',
			word: 'Justyna',
		},
		{
			word: 'Iwona',
			sound: 'Ee-voh-na',
			definition: 'Female name',
			type: 'character',
		},
		{
			word: 'Krukowska',
			sound: 'Kroo-kov-ska',
			definition:
				'*Kruk* means *raven*.\n*-ska* suffix (and its extended form, *-owska*) is the feminine form of *-ski* and indicates a belonging to some land.\nAll in all, the surname can be interpreted as *the one from Kruków*, with *Kruków* being a place of birth or residence.\n',
			type: 'character',
		},
		{
			word: 'Szewczyk',
			sound: 'Shev-chyck',
			definition: 'Diminutive form of *szewc* (shoemaker)',
			type: 'character',
		},
		{
			word: 'Gałązka',
			sound: 'Gah–won–ska',
			definition: 'Diminutive form of *gałąź* (branch)',
			type: 'character',
		},
		{
			word: 'Malkiewicz',
			sound: 'Mal-kye-vich',
			definition:
				'A fairly rare Polish surname. Only 1.4% of surnames end with *-ewicz*',
			type: 'character',
		},
		{
			word: 'Tytus Topola',
			sound: 'Tyh-toos Toh-poh-lah',
			definition:
				'*Topola* is *populus*, a genus of trees.\n[Wikipedia](https://en.wikipedia.org/wiki/Populus)\n',
			type: 'character',
		},
		{
			word: 'Greynuty',
			sound: 'Grey-nu-te',
			definition:
				'Another pseudo-Polish word. The root word is English *grey*, and the Polish ending *-uty* implies a plural form.\nThe *y* sound is uncommon in English, the best example I could find was the *e* in [parallelepiped](https://en.wiktionary.org/wiki/parallelepiped).\n',
			type: 'character',
		},
		{
			word: 'Ułan',
			sound: 'Uh–wan',
			definition:
				'A soldier of Polish light cavalry armed with a lance, a saber, and a firearm.\n[Wikipedia](https://en.wikipedia.org/wiki/Uhlan)\n',
			type: 'other',
		},
		{
			word: 'Liść',
			sound: '¯\\_(ツ)_/¯',
			definition: 'Leaf',
			type: 'other',
		},
	],
	changelog: [
		{
			body: 'Recorded some voiceover to make it easier to figure out how to spell the words',
			date: '2022-04-08T09:11:22.532Z',
		},
		{
			body: 'Added definitions',
			date: '2022-04-08T11:27:19.815Z',
		},
		{
			body: 'Added relevant Wikipedia links\n\nAdded *Greynuty*\n\nAdded Ko-Fi link, because why not ¯\\\\_(ツ)\\_/¯\n',
			date: '2022-04-10T17:42:17.962Z',
		},
		{
			body: 'Added *Iwona*',
			date: '2022-04-29T03:23:50.811Z',
		},
		{
			body: 'Added *Krukowska*',
			date: '2022-05-06T07:49:55.000Z',
		},
	],
};
export default data;
