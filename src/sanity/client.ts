import { createClient } from "next-sanity";

export const client = createClient({
	projectId: process.env.PROJECT_ID || "usa4ylim",
	dataset: process.env.DATASET || "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});
