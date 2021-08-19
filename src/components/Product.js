import { Card, Image, Icon } from "semantic-ui-react";

function Product({ product }) {
	return (
		<Card>
			<div style={{ maxHeight: "250px" }}>
				<Image
					src={product.image}
					centered
					size='medium'
					style={{
						objectFit: "contain",
						height: "250px",
						width: "250px",
						padding: "20px",
					}}
				/>
			</div>
			<Card.Content>
				<Card.Header>{product.title}</Card.Header>
				<Card.Meta>
					<span className='date'>{product.category}</span>
				</Card.Meta>
				<Card.Description
					style={{
						height: "150px",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}>
					{product.description}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name='dollar' />
					{product.price}
				</a>
			</Card.Content>
		</Card>
	);
}

export default Product;
