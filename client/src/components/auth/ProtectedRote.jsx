import React from "react";

const ProtectedRote = ({ children }) => {
  const isLogin = true; // This should be replaced with actual authentication logic
  return (
    <>
      {!isLogin ? (
        <Navigate to="/authPage" replace />
      ) : (
        <div>
          <div>{children}</div>
        </div>
      )}
    </>
  );
};

export default ProtectedRote;
