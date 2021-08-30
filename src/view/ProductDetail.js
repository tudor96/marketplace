import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Image } from "semantic-ui-react";
import ReactLoading from "react-loading";
import { ContainerLoading } from "../components/Products.style";

function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (id) {
			setLoading(true);
			fetch("https://fakestoreapi.com/products/" + id)
				.then((res) => res.json())
				.then((product) => {
					setProduct(product);
					setLoading(false);
				});
		}
	}, [id]);

	return (
		<Container style={{ marginTop: "100px" }}>
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
				<>
					<h1>{product.title}</h1>
					<Image src={product.image} size='medium' />
				</>
			)}
		</Container>
	);
}

export default ProductDetail;
