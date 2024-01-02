import CreditFooter from "@/components/CreditFooter/CreditFooter";
import WelcomeHeader from "@/components/WelcomeHeader/WelcomeHeader";
import Image from "next/image";

export default function ProfilePage() {
    const user: any = null;
    return (
        <>
        <WelcomeHeader />
        <div className="mx-auto px-4 md:px-6 prose prose-2xl prose-slate">
            <Image
                className="rounded-lg w-10 h-10"
                src={user?.imageURL ? user?.imageURL : ""}
                alt="profile"
            />
        </div>
        <CreditFooter />
        </>
    )
}
