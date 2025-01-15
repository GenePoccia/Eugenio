"use client";
import React, { useContext } from "react";
import { AboutContext } from "../contexts/AboutContext";
import styled from "styled-components";
import { SkillTile } from "../lib/reusableComponents/SkillTile";

const PrimarySkillsContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 50px;
	gap: 10%;
`;

const PrimarySkills = () => {
	const { primarySkills } = useContext(AboutContext);

	return (
		<PrimarySkillsContainer>
			{primarySkills.map((ele, index) => {
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
