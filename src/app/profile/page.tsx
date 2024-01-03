import CreditFooter from "@/components/CreditFooter/CreditFooter";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import Image from "next/image";

export default function ProfilePage() {
    const user: any = null;
    return (
        <>
        <WelcomeHeader />
        <div className="mx-auto px-4 md:px-6 prose prose-2xl prose-slate flex justify-center items-center">
            <Image
                className="rounded-lg w-10 h-10 mb-12"
                src={user?.imageURL ? user?.imageURL : ""}
                alt="profile"
            />
            <h1 className="text-h1 font-sans font-bold mb-6">
                {user?.username}
            </h1>
            <h5 className="text-h5 font-sans font-regular">
                {user?.email}
            </h5>
        </div>
        <CreditFooter />
        </>
    )
}
