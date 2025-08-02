import { Route, Router } from "react-router";
import AuthPage from "./pages/AuthPage";
import MessagePage from "./pages/MessagePage";
import ProtectedRote from "./components/auth/ProtectedRote";

function App() {
  return (
    <>
      <Router>
        <Route path="/authPage" element={<AuthPage />} />
        <Route
          path="/messagePage"
          element={
            <ProtectedRote>
              <MessagePage />
            </ProtectedRote>
          }
        />
      </Router>
    </>
  );
}

export default App;
