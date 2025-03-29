import { use } from "react";
import { Button } from "../button";
import { AuthContext } from "../../providers/auth";

export const AuthButton = () => {
  const { user, toggleAuthorize } = use(AuthContext);
  const { userName } = user;

  return (
    <div style={{ display: "flex" }}>
      {userName ? <h3>{userName}</h3> : null}
      <Button onClick={toggleAuthorize}>{userName ? "Logout" : "Login"}</Button>
    </div>
  );
};
