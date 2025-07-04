import React, { useEffect, useState } from "react";

function Online() {
  const [status, setStatus] = useState(navigator.onLine);

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <main>
      <h1> Internet: {!status ? "Offline" : "Online"}</h1>
    </main>
  );
}

export default Online;
