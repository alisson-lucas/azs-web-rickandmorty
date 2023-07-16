'use client'
import Image from 'next/image'

export default function Header() {
    return (
        <div style={{
            '--image-url': `url('/images/banner.jpg')`, '--image-url-mobile': `url('/backgrounds/bg-moura-mobile.png')`,
        }} className='flex items-center animate-pulse justify-center w-full h-[105px] bg-black py-  bg-cover bg-center'>
            <div className='flex flex-row items-center justify-center p-4 gap-8'>
                <Image src='/images/tt.png' width={300} height={300} alt='image' />
            </div>
        </div>
    )
}