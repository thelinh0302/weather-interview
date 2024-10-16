import { useEffect } from "react";
import AppRoutes from "./routing";
import { gapi } from "gapi-script";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "853662039907-2aqrms7bt6i0ca6bjll3f40ikfv78h7h.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/drive.appdata",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );
  return (
    <>
      <AppRoutes isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
