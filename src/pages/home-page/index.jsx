import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <div>home page</div>
      <Link to="/restaurants">to restaurants</Link>
    </div>
  );
};
