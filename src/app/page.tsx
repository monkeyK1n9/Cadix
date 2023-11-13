'use client'

import { getUser } from '@/lib/user'
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      const res = await getUser();

      setUser(res);
    }
    getUserData();
  }, [])

  if (!user) {
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
