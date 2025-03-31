"use client"
import { ForgotPasswordForm } from '@/app/components/forgot-password-form'

export default function ForgotPasswordPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className='w-1/2 scale-90'>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}