"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PageSubscription() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Abonnement bestätigt !</h1>
          <p className="text-gray-700 mb-6">
          Vielen Dank für die Bestätigung Ihres Abonnements für unseren Newsletter, <span className="font-semibold">{email}</span> !
          </p>
          <Link
            href="/"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
           zur  Startseite
          </Link>
        </div>
      </div>
    );
}