"use client";
import { useContext } from "react";
import { AboutContext } from "../contexts/AboutContext";
import { PortableText } from "@portabletext/react";
import { myPortableTextComponents } from "../lib/reusableComponents/DisplaySummaryParagraphs";

import styled from "styled-components";

const PortableTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	max-width: 45%;

	@media (max-width: 1100px) {
		margin-top: 5%;
		align-items: center;
		max-width: none;
	}
`;

const DescriptionSection = () => {
	const { aboutMe } = useContext(AboutContext);

	return (
		<PortableTextContainer>
			<PortableText
				value={aboutMe?.description}
				components={myPortableTextComponents}
			/>
		</PortableTextContainer>
	);
};
export default DescriptionSection;
