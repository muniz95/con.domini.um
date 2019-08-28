import React, { useState, useEffect } from "react";

export const Administrator: React.FC = () => {
  const [administrators, setAdmins] = useState([]);

  useEffect(() => {
    setAdmins([{name: "Admin", url: "/"}]);
  }, [administrators]);

  return <div>Administradora: {administrators.length}</div>;
};