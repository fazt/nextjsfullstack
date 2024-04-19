import { authOptions } from '@/libs/authOptions';
import { getServerSession } from 'next-auth'
import React from 'react'

async function ProfilePage () {

  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>{session?.user?.name}</h1>
    </div>
  )
}

export default ProfilePage
