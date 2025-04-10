//vi importerar Reacts contextfunktioner
import { createContext, useState, useContext } from "react";

// 🔸 1. Skapa själva kontexten (en "global låda" där vi lagrar auth-data)
const AuthContext = createContext();

// 🔸 2. Skapa en "Provider" – en komponent som delar med sig av datan till resten av appen
export function AuthProvider({ children }) {
    //useState håller koll på den inloggade användaren (null = inte inloggad)
    const [user, setUser] = useState(null);

    // 🔐 Login-funktion (just nu med hårdkodat konto)
    const login = (email, password) => {
        //enkel kontroll – byt gärna ut mot riktig login senare
        if (email === "test@test.com" && password === "1234") {
            setUser({ email }); //sparar användaren i state
            return true; //returnera true så vi vet att login lyckades
        } else {
            return false; //login misslyckades
        }
    };

    // 🔓 Logout – nollställer användaren
    const logout = () => {
        setUser(null);
    };

    //vi skickar ut användaren, login och logout till resten av appen
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children} {/* det här representerar allt som ligger inuti <AuthProvider> */}
        </AuthContext.Provider>
    );
}

// 🔸 3. En smidig liten hook som gör att vi kan använda auth-datan lätt i vilken komponent som helst
export function useAuth() {
    return useContext(AuthContext);
}