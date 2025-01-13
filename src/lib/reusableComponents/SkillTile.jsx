"use client";
import styled from "styled-components";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
	return builder.image(source);
}

const Tile = styled.div`
	text-align: center;
	position: relative;
	width: 120px;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.3);
	}
`;

const TileImage = styled.img`
	width: 100px;
	height: auto;
`;

const Tooltip = styled.div`
	display: none; /* Hidden by default */
	position: absolute;
	bottom: 10px;
	left: 50%;
	transform: translateX(-50%);
	background-color: rgba(0, 0, 0, 0.7);
	color: white;
	padding: 5px 10px;
	border-radius: 5px;
	font-size: 12px;
	white-space: nowrap;
`;

const ToopTipContainer = styled.div`
	&:hover ${Tooltip} {
		display: block;
	}
`;

export const SkillTile = ({ skillname, skillicon }) => {
	return (
		<Tile>
			<ToopTipContainer>
				<TileImage
					src={urlFor(skillicon).width().url()}
					alt={skillname}
					loading="lazy"
				/>
				<Tooltip>{skillname}</Tooltip>
			</ToopTipContainer>
		</Tile>
	);
};
