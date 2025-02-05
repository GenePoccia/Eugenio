"use client";
import { useContext, useEffect, useState } from "react";
import { AboutContext } from "../contexts/AboutContext";

import styled from "styled-components";
import SVGContainer from "@/lib/reusableComponents/SVGContainer.jsx";
import AboutMeSection from "./AboutMeSection.jsx";
import DescriptionSection from "./DescriptionSection.jsx";

const MainContainer = styled.main`
	padding: 5%;
	gap: 5%;
	justify-content: space-between;
	width: 100%;

	@media (max-width: 1100px) {
		flex-direction: column;
		text-align: center;
	}
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5%;
	justify-content: center;

	@media (max-width: 1100px) {
		flex-direction: column;
		text-align: center;
	}
`;

const LinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 5%;
	gap: 5%;
	font-size: 34px;
	align-items: center;

	@media (max-width: 1100px) {
		flex-direction: column;
		justify-content: center;
		text-align: left;
	}
`;

const Page = () => {
	const { fetchAboutMeData } = useContext(AboutContext);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		fetchAboutMeData().then((resp) => setLoaded(resp));
	}, []);

	return (
		loaded && (
			<MainContainer>
				<SubContainer>
					<AboutMeSection />
					<DescriptionSection />
				</SubContainer>
				<SubContainer>
					<LinkContainer navlink="true">
						<SVGContainer
							href={"/portfolio"}
							svgpath={"forwardarrow"}
							alt={"Forward Arrow"}
							text={"Check out my work"}
							textposition={"left"}
						/>
					</LinkContainer>
				</SubContainer>
			</MainContainer>
		)
	);
};

export default Page;
