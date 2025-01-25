import { useParams } from "react-router";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>This is product detail page</h1>
      <p>Product detail : {params.id}</p>
    </>
  );
}
