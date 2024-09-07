import * as z from "zod";
import { sortBy } from "es-toolkit";

export const wordSchema = z.object({
	word: z.string().min(1).trim(),
	sound: z.string().min(1).trim(),
	type: z.enum(["place", "group", "character", "other"]),
	definition: z
		.string()
		.trim()
		.transform((s) => s.replaceAll("\n", "\n\n")),
});

export const changelogSchema = z.object({
	body: z
		.string()
		.min(1)
		.transform((b) => b.replaceAll("\n", "\n\n")),
	date: z.string().datetime(),
});

export const dataSchema = z.object({
	title: z.string(),
	desc: z.string(),
	github: z.string(),
	kofi: z.string(),
});

export const allDataSchema = z.object({
	data: dataSchema,
	words: z
		.array(wordSchema)
		.transform((words) => sortBy(words, [(w) => w.type, (w) => w.word])),
	changelog: z
		.array(changelogSchema)
		.transform((ch) => sortBy(ch, [(c) => c.date]).toReversed()),
});

export type Word = z.TypeOf<typeof wordSchema>;
export type Changelog = z.TypeOf<typeof changelogSchema>;
export type Data = z.TypeOf<typeof dataSchema>;
export type AllData = z.TypeOf<typeof allDataSchema>;
