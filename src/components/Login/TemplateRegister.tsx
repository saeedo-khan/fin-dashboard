import React from 'react'
import { SignInForm } from './SignInForm'
import Image from 'next/image'

const TemplateRegister = () => {
  return (
    <div className='flex'>
        <div className='flex-1 h-screen'>
            <SignInForm />
        </div>
        <div className='flex-1 h-screen relative'>
            <Image src="/assets/register-img.png" alt='register-img' fill className='aspect-ratio-[1/16] object-cover' />
        </div>
    </div>
  )
}

export default TemplateRegister