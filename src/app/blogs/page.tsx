import BlogsContainer from '@/components/BlogsContainer/BlogsContainer'
import CreditFooter from '@/components/CreditFooter/CreditFooter'
import WelcomeHeader from '@/components/WelcomeHeader/WelcomeHeader'
import Image from 'next/image'

export default function Blogs() {
  return (
    <>
    <WelcomeHeader />
    <div className="mx-auto px-4 md:px-6 prose prose-2xl prose-slate">
      <p className="mt-12 mb-12 text-3xl text-center">
        Hello and welcome 🖐
        <span className="whitespace-nowrap">
          Get the latest news, we talk about <span className="font-bold">CADiX</span>
        </span>
      </p>

      <BlogsContainer />
    </div>
    <CreditFooter /> 
    </>
  )
}
