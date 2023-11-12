
export default function WelcomeHeader() {
    return (
        <nav className="mx-auto px-5 py-3 flex flex-row justify-between items-center sticky">
           <h1 className="text-primary text-h1 font-semibold">
                CADiX
            </h1>
           <div>
                <button
                    className="border-2 rounded-lg border-primary bg-none text-primary px-3 py-2 mr-3"
                    type="button"
                >
                    Log in
                </button>
                <button
                    className="border-2 rounded-lg border-primary text-white bg-primary px-3 py-2"
                >
                    Sign up
                </button>
           </div>
        </nav>
    )
}
