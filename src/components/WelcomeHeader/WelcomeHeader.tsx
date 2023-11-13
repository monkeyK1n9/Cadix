import Link from "next/link";

export default function WelcomeHeader() {
    return (
        <nav className="mx-auto py-3 flex flex-row justify-around items-center sticky">
            <Link className="text-primary text-4xl font-bold"
                href="/welcome"
            >
                CADiX
            </Link>
           <div>
                <Link
                    className="border-2 rounded-lg border-primary bg-none text-primary px-3 py-2 mr-3"
                    href="/login"                    
                >
                    Log in
                </Link>
                <Link
                    className="border-2 rounded-lg border-primary text-white bg-primary px-3 py-2"
                    href="/register"
                >
                    Sign up
                </Link>
           </div>
        </nav>
    )
}
