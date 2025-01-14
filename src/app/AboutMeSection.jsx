"use client";
import styled from "styled-components";
import PrimarySkills from "./PrimarySkills";

const MainContainer = styled.div`
	flex: 1;
	max-width: 45%;

	@media (max-width: 1100px) {
		max-width: none;
	}
`;

const Header = styled.h1`
	font-size: 60px;
`;

const SubHeader = styled.h2`
	font-size: 36px;
`;

const Summary = styled.span`
	font-size: 18px;
	font-style: italic;
`;

const AboutMeSection = ({ name, title, summary, primarySkills }) => {
	return (
		<MainContainer>
			<Header>{name}</Header>
			<SubHeader>{title}</SubHeader>
			<Summary>{summary}</Summary>
			<PrimarySkills primaryskills={primarySkills}></PrimarySkills>
		</MainContainer>
	);
};
export default AboutMeSection;
