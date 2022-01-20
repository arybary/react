import React, { useEffect, useState } from "react";

const RedLine = () => {
  const [line, setLine] = useState({
    marginTop: new Date().getMinutes() + new Date().getHours() * (60 - 1),
  });

  useEffect(() => {
    const currentTimeout = setInterval(() => {
      setLine({
        marginTop: new Date().getMinutes() + new Date().getHours() * (60 - 1),
      });
    }, 60000);

    return () => {
      clearInterval(currentTimeout);
    };
  }, []);

  return <div className="red-line" style={line}></div>;
};

export default RedLine;
