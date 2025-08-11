import { useContextData } from "../../context/context";

const ProtectedRote = ({ children }) => {
  const { isAuthenticated } = useContextData();
  return (
    <>
      {!isAuthenticated ? (
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
