import { observer } from "mobx-react";
import React from "react";
import AdministratorStore from "./store";

const Administrator: React.FC<{}> = observer(() => {
  const store = React.useContext(AdministratorStore);
  return (
    <div>
      <h1>{store.administrators.length}</h1>
    </div>
  );
});

export default Administrator;
