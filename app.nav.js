import { useContext } from "react";
import { AuthContext } from "./app/context/auth.context";
import Routes from "./app/components/routes";
import AuthRouter from "./app/components/auth-router";

function AppNav() {
    const { userToken } = useContext(AuthContext);

    return (
        <>
            {userToken ? <Routes /> : <AuthRouter />}
        </>
    );
}

export default AppNav;