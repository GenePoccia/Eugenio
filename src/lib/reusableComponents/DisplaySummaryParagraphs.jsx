export const myPortableTextComponents = {
	types: {
		image: ({ value }) => <img src={value.imageUrl} />,
		callToAction: ({ value, isInline }) =>
			isInline ? (
				<a href={value.url}>{value.text}</a>
			) : (
				<div className="callToAction">{value.text}</div>
			),
		block: ({ value }) => (
			<p
				className="custom-paragraph"
				style={{ paddingBottom: "20px" }}
			>
				{value.children.map((child, index) => {
					if (child._type === "span") {
						// Clean up invisible line breaks and extra spaces from text
						const cleanText = child.text
							.replace(/(\r\n|\n|\r)/gm, " ")
							.replace(/\s+/g, " ")
							.trim();

						return (
							<span
								key={index}
								style={{
									whiteSpace: "pre-line", // Preserve line breaks and whitespace
									fontWeight: child.marks?.includes("strong")
										? "bold"
										: "normal",
									padding: child.marks?.includes("strong") ? "5px" : "0px",
								}}
							>
								{cleanText}
							</span>
						);
					}
					return null; // Return null for unsupported child types
				})}
			</p>
		),
	},

	marks: {
		link: ({ children, value }) => {
			const rel = !value.href.startsWith("/")
				? "noreferrer noopener"
				: undefined;
			return (
				<a
					href={value.href}
					rel={rel}
				>
					{children}
				</a>
			);
		},
	},
};
