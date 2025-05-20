import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api"
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    //handle the form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/users/login", { email, password });
            setMessage("Login is successfull");
            navigate("/home")
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="Login">
            <h2>Login Form</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>


                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login