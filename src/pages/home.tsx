import { Link } from "react-router-dom";

export function Home() {
    return (
        <main>
            <h1>Home</h1>
            <Link to="/dashboard">Ir para o Dashboard</Link>
        </main>
    );
}
