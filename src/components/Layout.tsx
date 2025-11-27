import React from 'react';
import { Link } from 'react-router-dom'; 

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-500">
            {/* ... Ton Header ... */}
            <header className="bg-indigo-600 text-white p-4 shadow-md">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-bold">SIRH - Espace Employé</h1>
                </div>
            </header>

            {/* Nouvelle Structure pour Sidebar + Contenu */}
            <div className="flex max-h-7xl mx-auto">
                
                {/* 1. SIDEBAR - Menu de Navigation */}
                <aside className="w-64 bg-gray-700 p-4 shadow-lg h-[calc(100vh-64px)]"> 
                    <nav>
                        <Link to="/" className="block text-black py-2 px-4 rounded hover:bg-indigo-700 mb-2">
                            Dashboard
                        </Link>
                        <Link to="/leave-request" className="block text-black py-2 px-4 rounded hover:bg-indigo-700">
                            Demande de Congé
                        </Link>
                    </nav>
                </aside>

                {/* 2. MAIN CONTENT - Corps de la Page */}
                <main className="flex-1 p-4 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;