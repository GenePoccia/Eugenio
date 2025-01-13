import React from "react";
import PortfolioPageContainer from "./PortfolioPageContainer";
import { client } from "@/sanity/client";

import { PORTFOLIO_QUERY } from "@/lib/queries";
import QUERY_OPTIONS from "@/lib/queryOptions";

export default async function IndexPage() {
	const portfolioResult = await client.fetch(
		PORTFOLIO_QUERY,
		{},
		QUERY_OPTIONS
	);
	const portfolio = portfolioResult[0]?.projects;

	return (
		<main>
			<PortfolioPageContainer portfolio={portfolio} />
		</main>
	);
}
