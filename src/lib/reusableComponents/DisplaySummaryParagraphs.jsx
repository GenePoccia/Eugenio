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
						// Custom render for spans
						return (
							<span
								key={index}
								style={{
									whiteSpace: "pre-line", // Preserve line breaks and whitespace
									fontWeight: child.marks?.includes("strong")
										? "bold"
										: "normal",
								}}
							>
								{child.text}
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
