"use client";
import React, { createContext, useState } from "react";
import { client } from "@/sanity/client";
import { ABOUT_QUERY, PRIMARY_SKILLS_QUERY } from "@/lib/queries";
import QUERY_OPTIONS from "@/lib/queryOptions";

export const AboutContext = createContext();

export const AboutContextProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState({});
	const [primarySkills, setPrimarySkills] = useState([]);

	const fetchAboutMeData = async () => {
		const aboutMeResult = await client.fetch(ABOUT_QUERY, {}, QUERY_OPTIONS);
		const primarySkillsResult = await client.fetch(
			PRIMARY_SKILLS_QUERY,
			{},
			QUERY_OPTIONS
		);
		const { primarySkills } = primarySkillsResult[0];
		const { name, title, summary, description, socialMedia } = aboutMeResult[0];
		setAboutMe({ name, title, summary, description, socialMedia });
		setPrimarySkills(primarySkills);

		return true;
	};

	const value = {
		aboutMe,
		primarySkills,
		fetchAboutMeData,
	};

	return (
		<AboutContext.Provider value={value}>{children}</AboutContext.Provider>
	);
};
