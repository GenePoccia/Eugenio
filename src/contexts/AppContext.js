import React from "react";
import { AboutContextProvider } from "./AboutContext";
import { PortfolioContextProvider } from "./PortfolioContext";

export const combineComponents = (...components) => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }) => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

const providers = [AboutContextProvider, PortfolioContextProvider];

export const AppContextProvider = combineComponents(...providers);
