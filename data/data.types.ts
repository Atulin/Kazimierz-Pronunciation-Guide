export interface Data {
	title: string;
	desc: string;
	github: string;
	kofi: string;
	words: Word[];
	changelog: Changelog[];
}

export interface Changelog {
	body: string;
	date: string;
}

export interface Word {
	word: string;
	sound: string;
	type: 'place' | 'group' | 'character' | 'other';
	definition: string;
	ipa?: string;
}
