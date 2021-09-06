import { Card, Checkbox, Divider } from "semantic-ui-react";

function CategoriesFilters({ categories }) {
	return (
		<Card
			color='blue'
			style={{
				position: "absolute",
				top: "12px",
				left: "-300px",
				maxWidth: "280px",
			}}>
			<Card.Content>
				<Card.Header>Filtru categorii</Card.Header>
			</Card.Content>
			<Card.Content>
				{categories.map((category, index) => {
					return (
						<div key={index}>
							<Checkbox label={category.name} />
							<Divider hidden />
						</div>
					);
				})}
			</Card.Content>
		</Card>
	);
}

export default CategoriesFilters;
