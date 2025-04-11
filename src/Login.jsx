import { useState } from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //här skulle man normalt validera mot en server
        if (email.trim() && password.trim()) {
            login(email) //vi använder email som "identitet"
            navigate("/") //skicka användaren till startsidan
        } else {
            alert("Please enter both email and password");
        }
    };

    return (
        <section className=" text-text max-w-md mx-auto mt-20 p-6 bg-card rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-primary">Log in</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-subtext mb-1">Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="w-full px-3 py-2 rounded text-black"
                        required
                    />
                </div>

                <div>
                    <label className="block text-subtext mb-1">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-2 py-2 rounded text-black"
                        required 
                    />
                </div>

                <button
                    type="submit"
                    className="bg-primary text-background font-bold py-2 px-4 rounded hover:bg-accent transition w-full"
                >
                    Log in
                </button>
            </form>
        </section>
    );
}

export default Login;