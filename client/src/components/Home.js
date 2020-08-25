import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  fetch("/dashboard").then((res) => {
    if (!res.ok) {
      history.push("/users/login");
    }
  });
  return <div>Home</div>;
}
