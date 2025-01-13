import PageContainer from "./PageContainer.jsx";

import { client } from "@/sanity/client";
import { ABOUT_QUERY, PRIMARY_SKILLS_QUERY } from "@/lib/queries";
import QUERY_OPTIONS from "@/lib/queryOptions";

export default async function IndexPage() {
	const aboutMeResult = await client.fetch(ABOUT_QUERY, {}, QUERY_OPTIONS);
	const primarySkillsResult = await client.fetch(
		PRIMARY_SKILLS_QUERY,
		{},
		QUERY_OPTIONS
	);

	const { name, title, summary, description } = aboutMeResult[0];
	const { primarySkills } = primarySkillsResult[0];
	return (
		<main>
			<PageContainer
				name={name}
				title={title}
				summary={summary}
				primarySkills={primarySkills}
				description={description}
			/>
		</main>
	);
}
