"use client";
import { Suspense, lazy } from "react";
import styled from "styled-components";
import PrimarySkills from "./PrimarySkills";
import { Header, SubHeader, Callout } from "@/lib/baseComponents";

const MainContainer = styled.div`
	flex: 1;
	max-width: 45%;

	@media (max-width: 1100px) {
		max-width: none;
	}
`;

const Summary = styled(Callout)`
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
