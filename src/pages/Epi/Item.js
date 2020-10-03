import React from "react";
import { instance } from "services/api";

export default function Item() {
  React.useEffect(() => {
    instance.get("");
  }, []);
  return <div></div>;
}
