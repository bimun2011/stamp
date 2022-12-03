import React, { useEffect, useState } from "react";

export default function BGOverlay() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsSmall(true);
    }, 2000);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-30 bg-black pt-1 pb-1 pl-2 pr-2 rounded-md text-white">
        {isSmall ? (
          <p>
            <strong>bg</strong>
          </p>
        ) : (
          <p>
            made by <strong>barnagoz</strong>
          </p>
        )}
      </div>
    </>
  );
}
