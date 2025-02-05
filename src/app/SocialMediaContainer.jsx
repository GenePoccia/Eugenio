"use client";
import { useContext } from "react";
import { AboutContext } from "../contexts/AboutContext";

import styled from "styled-components";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

const MainContainer = styled.main`
	display: flex;
	flex-direction: row;
	padding: 5%;
	gap: 10%;
	justify-content: center;
	width: 100%;

	@media (max-width: 1100px) {
		text-align: center;
	}
`;

const renderSocial = (social, idx) => {
	return (
		<a
			key={idx}
			href={social.socialMediaURL}
			target="_blank"
			rel="noopener noreferrer"
		>
			<img
				src={urlFor(social.socialMediaIcon).width().url()}
				alt={social.socialMediaName}
			/>
		</a>
	);
};

const SocialMediaContainer = () => {
	const { aboutMe } = useContext(AboutContext);

	return (
		<MainContainer>
			{aboutMe?.socialMedia?.map((ele, idx) => renderSocial(ele, idx))}
		</MainContainer>
	);
};

export default SocialMediaContainer;
