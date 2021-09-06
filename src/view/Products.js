import { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import Product from "../components/Product";
import ReactLoading from "react-loading";
import { ContainerLoading } from "../components/Products.style";
import CategoriesFilters from "../components/CategoriesFilter/CategoriesFilter";

function Products() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const [categories, setCategories] = useState([]);
	const [loadingCat, setLoadingCat] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			});

		setLoadingCat(true);
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((data) => {
				const processedCategories = data.map((category) => {
					return { name: category, checked: false };
				});
				setCategories(processedCategories);
				setLoadingCat(false);
			});
	}, []);
	return (
		<Container style={{ marginTop: "100px", position: "relative" }}>
			{loadingCat ? (
				<ReactLoading type='cylon' color='blue' height={50} width={50} />
			) : (
				<CategoriesFilters categories={categories} />
			)}

			{loading ? (
				<ContainerLoading>
					<ReactLoading
						type='spinningBubbles'
						color='black'
						height={100}
						width={100}
					/>
				</ContainerLoading>
			) : (
				<Grid columns={4}>
					{products.map((product, index) => {
						return (
							<Grid.Column key={index}>
								<Product product={product} />
							</Grid.Column>
						);
					})}
				</Grid>
			)}
		</Container>
	);
}

export default Products;
