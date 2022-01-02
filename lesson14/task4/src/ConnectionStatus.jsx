import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const onOffline = () => {
      setStatus("offline");
    };
    const onOnline = () => {
      setStatus("online");
    };

    window.addEventListener("offline", onOffline);
    window.addEventListener("online", onOnline);
    return () => {
      window.removeEventListener("offline", onOffline);
      window.removeEventListener("online", onOnline);
    };
  }, []);

  return (
    <div className={status === "offline" ? "status status_offline" : "status"}>
      {status}
    </div>
  );
};

export default ConnectionStatus;
