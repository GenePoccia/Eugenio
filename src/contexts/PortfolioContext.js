"use client";
import React, { createContext, useState } from "react";
import { client } from "@/sanity/client";

import { PORTFOLIO_QUERY } from "@/lib/queries";
import QUERY_OPTIONS from "@/lib/queryOptions";

export const PortfolioContext = createContext();

export const PortfolioContextProvider = ({ children }) => {
	const [portfolio, setPortfolio] = useState([]);

	const fetchPortfolioData = async () => {
		const portfolioResult = await client.fetch(
			PORTFOLIO_QUERY,
			{},
			QUERY_OPTIONS
		);
		const portfolio = portfolioResult[0]?.projects;
		setPortfolio(portfolio);

		return true;
	};

	const value = {
		portfolio,
		fetchPortfolioData,
	};

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
