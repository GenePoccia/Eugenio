"use client";
import styled from "styled-components";
import AboutMeSection from "./AboutMeSection.jsx";
import DescriptionSection from "./DescriptionSection.jsx";

const MainContainer = styled.main`
	display: flex;
	flex-direction: row;
	padding: 5%;
	gap: 5%;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 1100px) {
		flex-direction: column;
		text-align: center;
	}
`;

const PageContainer = ({
	name,
	title,
	summary,
	primarySkills,
	description,
}) => {
	return (
		<MainContainer>
			<AboutMeSection
				name={name}
				title={title}
				summary={summary}
				primarySkills={primarySkills}
			/>

			<DescriptionSection description={description} />
		</MainContainer>
	);
};

export default PageContainer;
