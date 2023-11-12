'use client'

import { getUser } from '@/lib/user'
import Image from 'next/image'
import { redirect } from 'next/navigation';

export default async function HomePage() {

  const user = getUser();

  const userData = await user;

  if (!userData) {
    redirect("/welcome")
  }
  else{
    redirect("/start")
  }

  return (
    <main>
      Loading...
    </main>
  )
}
