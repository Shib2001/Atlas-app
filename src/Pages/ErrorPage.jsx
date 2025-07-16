import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Opps! An Error occured.</h1>
      {error && <p>{error.status}</p>}
      <NavLink to="/">
        <button> Go back to home </button>
      </NavLink>
    </div>
  );
};
