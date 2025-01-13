"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { FlexRowContainer } from "@/lib/baseComponents.js";

const LinkContainer = styled(FlexRowContainer)`
	margin-top: 2%;
	gap: 2%;
	white-space: nowrap;

	@media (max-width: 1100px) {
		flex-direction: row;
		white-space: nowrap;
	}
`;

const SVGContainer = ({ href, svgpath, alt, text, textposition }) => {
	const rightText = textposition === "right";
	const leftText = textposition === "left";

	return href ? (
		<LinkContainer>
			<Link
				href={href}
				style={{
					display: "flex",
					alignItems: "center",
					gap: "0.5rem",
				}}
			>
				{leftText && <div>{text}</div>}
				<Image
					src={`/assets/${svgpath}.svg`}
					alt={alt}
					width={24}
					height={24}
				/>
				{rightText && <div>{text}</div>}
			</Link>
		</LinkContainer>
	) : (
		<LinkContainer>
			<span>{text}</span>
		</LinkContainer>
	);
};

export default SVGContainer;
