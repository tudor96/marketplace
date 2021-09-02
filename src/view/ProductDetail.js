import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Image } from "semantic-ui-react";
import ReactLoading from "react-loading";
import { ContainerLoading } from "../components/Products.style";
import { Grid, Divider, Label, Button, Icon, Rating } from "semantic-ui-react";

import "./ProductDetail.css";

function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (id) {
			setLoading(true);
			fetch("https://fakestoreapi.com/products/" + id)
				.then((res) => res.json())
				.then((product) => {
					setProduct(product);
					setLoading(false);
					console.log(product);
				});
		}
	}, [id]);

	return (
		<Container style={{ marginTop: "100px" }}>
			{loading || !product ? (
				<ContainerLoading>
					<ReactLoading
						type='spinningBubbles'
						color='black'
						height={100}
						width={100}
					/>
				</ContainerLoading>
			) : (
				<>
					<Grid columns='equal'>
						<Grid.Column>
							<Image
								src={product.image}
								size='large'
								bordered
								style={{ padding: "40px" }}
							/>
						</Grid.Column>
						<Grid.Column>
							<h1>{product.title}</h1>
							<p className='price-display'>$ {product.price}</p>
							<p>{product.description}</p>
							<Divider />
							<Rating
								icon='star'
								defaultRating={product.rating.rate}
								maxRating={5}
								size={"huge"}></Rating>
							<p>Reviews: {product.rating.count}</p>
							<Divider />
							<Label color={"teal"}>
								Category:
								<Label.Detail>{product.category}</Label.Detail>
							</Label>
							<Divider hidden />
							<Button animated='fade' primary>
								<Button.Content visible>
									Cumpara acum! <Icon name='shop' />
								</Button.Content>
								<Button.Content hidden>$ {product.price}</Button.Content>
							</Button>
						</Grid.Column>
					</Grid>
				</>
			)}
		</Container>
	);
}

export default ProductDetail;
