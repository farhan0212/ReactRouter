import { NavLink, Outlet, useLocation } from "react-router";

export default function DataLayout() {
  const location = useLocation();
  return (
    <>
      <div>
        <h1>This is Header</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/data/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/data/sellers">seller</NavLink>
        </li>
        <li>
          <NavLink to="/data/customers">customer</NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: "/data/products",
              search: "?category=shoes",
              hash: "#top",
            }}>
            product
          </NavLink>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
      <div>
        <h3>This is Footer</h3>
        <p>
          Location : {location.pathname}
          {location.search}
          {location.hash}
        </p>
      </div>
    </>
  );
}
