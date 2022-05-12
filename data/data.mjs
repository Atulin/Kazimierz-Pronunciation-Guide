import ms from 'dedent-js';

/**
 * @type { import('./data').Data }
 */
const data = {
	title: 'Kazimierz — a pronunciation guide',
	desc: ms`
    Kazimierz in Arknights is based on Poland and various events and characters use Polish words.
    Some of them can be hard to figure out the pronunciation of, so here's a guide from a native speaker.`,
	github: 'https://github.com/Atulin/Kazimierz-Pronunciation-Guide',
	kofi: 'https://ko-fi.com/angius',
	words: [
		{
			word: 'Kazimierz',
			sound: 'Kah-zhee-myesh',
			type: 'place',
			definition:
				'Fairly common name for a city or a part of it, but also a male name.',
		},
		{
			word: 'Kawalerielki',
			sound: 'Ka-va-lehr-yel-ki',
			type: 'place',
			definition:
				'Not actually a Polish word, only Polish-sounding. The root seems to be *kawaleria* (cavalry), and the *-elki* ending suggests a plural diminutive form.',
		},
		{
			word: 'Sprawiedliwi',
			sound: 'Sprah-vye-dlee-vee',
			type: 'group',
			definition: 'Plural form of *sprawiedliwy* (righteous)',
		},
		{
			word: 'Słoma',
			sound: 'Swo-mah',
			type: 'group',
			definition: 'Straw',
		},
		{
			word: 'Mieszko',
			sound: 'Miesh-co',
			type: 'group',
			definition: ms`
        Mieszko I was the first Polish ruler to unify it and create an independent Polish country.\n
        [Wikipedia](https://en.wikipedia.org/wiki/Mieszko_I)`,
		},
		{
			word: 'Zofia',
			sound: 'Zoh-fya',
			type: 'character',
			definition: 'Female name',
		},
		{
			word: 'Kowal',
			sound: 'Koh-val',
			type: 'character',
			definition: 'The literal meaning is *blacksmith*',
		},
		{
			word: 'Maciej',
			sound: 'Mah-tsiey',
			type: 'character',
			definition: 'Male name',
		},
		{
			word: 'Maria',
			sound: 'Mar-yah',
			type: 'character',
			definition: 'Female name',
		},
		{
			word: 'Czarny',
			sound: 'Char-nyh',
			type: 'character',
			definition: 'The literal meaning is *black*',
		},
		{
			word: 'Młynar',
			sound: 'Mwe-narh',
			type: 'character',
			definition: 'This word takes root in *młyn* (mill)',
		},
		{
			word: 'Justyna',
			sound: 'Yus-tyh-nah',
			type: 'character',
			definition: 'Female name',
		},
		{
			word: 'Iwona',
			sound: 'Ee-voh-na',
			type: 'character',
			definition: 'Female name',
		},
		{
			word: 'Krukowska',
			sound: 'Kroo-kov-ska',
			type: 'character',
			definition: ms`
        *Kruk* means *raven*.\n
        *-ska* suffix (and its extended form, *-owska*) is the feminine form of *-ski* and indicates a belonging to some land.\n
        All in all, the surname can be interpreted as *the one from Kruków*, with *Kruków* being a place of birth or residence.`,
		},
		{
			word: 'Szewczyk',
			sound: 'Shev-chyck',
			type: 'character',
			definition: 'Diminutive form of *szewc* (shoemaker)',
		},
		{
			word: 'Gałązka',
			sound: 'Gah–won–ska',
			type: 'character',
			definition: 'Diminutive form of *gałąź* (branch)',
		},
		{
			word: 'Malkiewicz',
			sound: 'Mal-kye-vich',
			type: 'character',
			definition:
				'A fairly rare Polish surname. Only 1.4% of surnames end with *-ewicz*',
		},
		{
			word: 'Tytus Topola',
			sound: 'Tyh-toos Toh-poh-lah',
			type: 'character',
			definition: ms`
        *Topola* is *populus*, a genus of trees.\n
        [Wikipedia](https://en.wikipedia.org/wiki/Populus)`,
		},
		{
			word: 'Greynuty',
			sound: 'Grey-nu-te',
			type: 'character',
			definition: ms`
        Another pseudo-Polish word. The root word is English *grey*, and the Polish ending *-uty* implies a plural form.\n
        The *y* sound is uncommon in English, the best example I could find was the *e* in [parallelepiped](https://en.wiktionary.org/wiki/parallelepiped).`,
		},
		{
			word: 'Józef',
			sound: 'Ioo-zef',
			type: 'character',
			definition: "Male name, *Joseph*"
		},
		{
			word: 'Nightzmora',
			sound: 'Night-zmoh-ra',
			type: 'other',
			definition: ms`
			A combination of English *night* and Polish *zmora*. The latter being a Slavic sleep paralysis demon.
			[Wikipedia](https://en.wikipedia.org/wiki/Mare_(folklore))`,
		},
		{
			word: 'Ułan',
			sound: 'Uh–wan',
			type: 'other',
			definition: ms`
        A soldier of Polish light cavalry armed with a lance, a saber, and a firearm.\n
        [Wikipedia](https://en.wikipedia.org/wiki/Uhlan)`,
		},
		{
			word: 'Liść',
			sound: '¯\\_(ツ)_/¯',
			type: 'other',
			definition: 'Leaf',
		},
		{
			word: 'Kurde',
			sound: 'Koor-deh',
			type: 'other',
			definition: '*Kurdę* is to *kurwa* what *fudge* is to *fuck*',
		},
		{
			word: 'Spadaj',
			sound: 'Spa-dai',
			type: 'other',
			definition: '*Piss off*'
		}
	],
	changelog: [
		{
			date: '2022-04-08T09:11:22.532Z',
			body: 'Recorded some voiceover to make it easier to figure out how to spell the words',
		},
		{
			date: '2022-04-08T11:27:19.815Z',
			body: 'Added definitions',
		},
		{
			date: '2022-04-10T17:42:17.962Z',
			body: ms`
        "Added relevant Wikipedia links\n
        Added *Greynuty*\n
        Added Ko-Fi link, because why not ¯\\\\_(ツ)\\_/¯`,
		},
		{
			date: '2022-04-29T03:23:50.811Z',
			body: 'Added *Iwona*',
		},
		{
			date: '2022-05-06T07:49:55.000Z',
			body: 'Added *Krukowska*',
		},
		{
			date: '2022-05-06T07:49:55.000Z',
			body: 'Added search function',
		},
		{
			date: '2022-05-12T09:33:50.724Z',
			body: 'Added *kurde*'
		},
		{
			date: '2022-05-12T10:17:11.158Z',
			body: 'Added *spadaj*, *Nightzmora*, *Józef*'
		}
	],
};
export default data;
