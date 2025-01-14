"use client";
import styled from "styled-components";
import SVGContainer from "@/lib/reusableComponents/SVGContainer";

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5%;
	gap: 5%;
	width: 100%;

	@media (max-width: 1100px) {
		flex-direction: column;
		text-align: center;
	}
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 2%;
`;

const TableHeader = styled.th`
	font-size: 24px;
	padding: 2%;
	text-align: left;
`;

const TableRow = styled.tr`
	border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
	padding: 2%;
	margin-left: 0;
	text-align: left;
`;

const PortfolioTable = ({ portfolio }) => {
	return (
		<MainContainer>
			<Table>
				<thead>
					<TableRow>
						<TableHeader>Project Name</TableHeader>
						<TableHeader>Built With</TableHeader>
					</TableRow>
				</thead>
				<tbody>
					{portfolio.map((project, index) => (
						<TableRow key={index}>
							<TableCell>
								<SVGContainer
									href={project.link}
									svgpath={"externallink"}
									alt={"External Link"}
									text={project.name}
									textposition={"left"}
									isportfolioproject={true}
								/>
							</TableCell>

							<TableCell>{project.built.join(", ")}</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</MainContainer>
	);
};

export default PortfolioTable;
