"use client";
import styled from "styled-components";
import { SkillTile } from "../lib/reusableComponents/SkillTile";

const PrimarySkillsContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 50px;
	gap: 10%;
`;

const PrimarySkills = ({ primaryskills }) => {
	return (
		<PrimarySkillsContainer>
			{primaryskills.map((ele, index) => {
				return (
					<SkillTile
						key={`ele_${index}_${ele?.skillName}`}
						skillname={ele?.skillName}
						skillicon={ele?.skillIcon}
					/>
				);
			})}
		</PrimarySkillsContainer>
	);
};
export default PrimarySkills;
