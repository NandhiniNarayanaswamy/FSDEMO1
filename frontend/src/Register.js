import { useState } from "react";
import api from "./api"
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    //handle the form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/users/register", { name, email, password });
            setMessage("Registration is successfull");
            setName("")
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="register">
            <h2>Registration Form</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div>
                    <label>Password:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register