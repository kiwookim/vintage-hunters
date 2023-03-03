import { useParams } from "react-router-dom";

export default function Category() {
	let { category } = useParams();
	// return <h1>{category}</h1>;
	return <h1>{category}</h1>;
}
