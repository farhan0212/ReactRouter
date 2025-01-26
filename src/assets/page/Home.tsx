import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate({
      pathname: "/data",
    });
  }

  return (
    <>
      <h1>Ini halaman home</h1>
      <button onClick={handleClick}>Go to Data</button>
    </>
  );
}
