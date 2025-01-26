import { useParams } from "react-router";

export default function Image() {
  const params = useParams();

  return (
    <>
      <h1>Image</h1>
      <p>image = {params["*"]}</p>
    </>
  );
}
