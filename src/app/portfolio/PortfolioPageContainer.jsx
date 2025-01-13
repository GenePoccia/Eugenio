"use client";
import styled from "styled-components";
import BackButton from "./BackButton";
import PortfolioTable from "./PortfolioTable";

const MainContainer = styled.main`
	padding: 5%;
	gap: 5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;

	@media (max-width: 1100px) {
		flex-direction: column;
		text-align: center;
	}
`;

const PortfolioPageContainer = ({ portfolio }) => {
	return (
		<MainContainer>
			<BackButton />
			<PortfolioTable portfolio={portfolio} />
		</MainContainer>
	);
};

export default PortfolioPageContainer;
