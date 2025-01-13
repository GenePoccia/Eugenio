"use client";
import SVGContainer from "@/lib/reusableComponents/SVGContainer";

const BackButton = ({}) => {
	return (
		<SVGContainer
			href={"/"}
			svgpath={"backarrow"}
			alt={"Back Arrow"}
			text={"Go Back"}
			textposition={"right"}
		/>
	);
};

export default BackButton;
