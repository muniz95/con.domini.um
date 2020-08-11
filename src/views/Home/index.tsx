import React from "react";
import { observer } from "mobx-react";
import Store from "../../store";

const Home: React.FC = observer(() => {
  const globalStore = React.useContext(Store)
  return (
    <>
      <h2>{globalStore.user?.name}</h2>
      <div>Início</div>
    </>
  );
});

export default Home;
