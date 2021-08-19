import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import Product from "../components/Product";

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			});
	}, []);
	return (
		<Container>
			<Grid columns={4}>
				{products.map((product, index) => {
					return (
						<Grid.Column key={index}>
							<Product product={product} />
						</Grid.Column>
					);
				})}
			</Grid>
		</Container>
	);
}

export default Products;
