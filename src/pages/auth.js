import Register from "@/components/Register";
import Login from "./../components/Login";

const Auth = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <Register />
            <Login />
        </div>
    );
};

export default Auth;
