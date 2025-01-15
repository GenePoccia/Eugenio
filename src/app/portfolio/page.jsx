"use client";
import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";

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

const PortfolioPageContainer = () => {
	const { fetchPortfolioData } = useContext(PortfolioContext);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		fetchPortfolioData().then((resp) => setLoaded(resp));
	}, []);

	return (
		loaded && (
			<MainContainer>
				<BackButton />
				<PortfolioTable />
			</MainContainer>
		)
	);
};

export default PortfolioPageContainer;
