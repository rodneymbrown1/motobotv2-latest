'use client'
import Image from 'next/image';
import GoogleIcon from '../public/googleicon.png'
import * as React from 'react'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconGitHub, IconSpinner } from '@/components/ui/icons'

interface LoginButtonProps extends ButtonProps {
  showGoogleIcon?: boolean
  text?: string
}

export function LoginButton2({
  text = 'Login with Google',
  showGoogleIcon = true,
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
    size="lg"
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn('google', { callbackUrl: `https://motobotv2-db74824bc716.herokuapp.com/`})
      }}
      disabled={isLoading}
      className="bg-lime-900 hover:bg-lime-400"
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : showGoogleIcon ? (
        <div className="mx-2">
        <Image
        priority
        src={GoogleIcon}
        alt="System Overview"
        width={15}
        height={15}
      /></div>
      ) : null}
      {text}
    </Button>
  )
}
