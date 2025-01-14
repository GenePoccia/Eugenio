"use client";
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
	text-decoration: ${(props) => (props.navlink ? "underline" : "none")};
	align-items: center;

	@media (max-width: 1100px) {
		flex-direction: column;
		justify-content: center;
		text-align: left;
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
			<SubContainer>
				<AboutMeSection
					name={name}
					title={title}
					summary={summary}
					primarySkills={primarySkills}
				/>
				<DescriptionSection description={description} />
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
				{/* <LinkContainer>Social media</LinkContainer> */}
			</SubContainer>
		</MainContainer>
	);
};

export default PageContainer;
