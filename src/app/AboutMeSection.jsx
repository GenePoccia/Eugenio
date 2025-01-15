"use client";
import { useContext, useEffect } from "react";
import { AboutContext } from "../contexts/AboutContext";
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

const AboutMeSection = () => {
	const { aboutMe } = useContext(AboutContext);
	return (
		<MainContainer>
			<Header>{aboutMe?.name}</Header>
			<SubHeader>{aboutMe?.title}</SubHeader>
			<Summary>{aboutMe?.summary}</Summary>
			<PrimarySkills />
		</MainContainer>
	);
};
export default AboutMeSection;
