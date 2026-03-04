'use client'

import Image from 'next/image'

interface Props {
    avatarUrl?: string;
    name: string;
    email: string;
}

export function UserInfo({
    avatarUrl = '',
    name,
    email
}: Props) {
    return <div className='flex items-center gap-2'>

        <Image
            src={avatarUrl}
            alt={name}
            width={35}
            height={35}
            className='rounded-full'
        />

        <div>
            <p className='font-medium'>{name}</p>
            <p className='text-xs opacity-60'>{email}</p>
        </div>

    </div>

}
