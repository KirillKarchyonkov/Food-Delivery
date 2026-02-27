'use client'

import { LoginDocument, RegisterDocument, type AuthInput } from "@/__generated__/graphql"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useMutation } from "@apollo/client/react"
import AuthChangeTypeForm from "./AuthChangeTypeForm"
import { useForm } from "react-hook-form"
import { isEmailRegex } from "../utils/is-email.regex"
import { cn } from "@/shared/utils"
import toast from "react-hot-toast"

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {

  const isLogin = type === 'login'

  const { register,
    handleSubmit,
    formState: { errors, isValid }
  } =
    useForm<AuthInput>({
      mode: 'onChange',
      defaultValues: {
        email: '',
        password: ''
      }
    })

  const [auth, { loading, error, }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument, {

    onCompleted: () => {
      toast.success(isLogin ? 'Logged in successfully!' : 'Registered successfully', {
        id: 'auth-success'
      })
    },
    onError: (error) => {
      toast.error(error.message, {
        id: 'auth-error'
      })
    }

  }
  )

  const handleAuth = (data: AuthInput) => {
    auth({
      variables: {
        data
      }
    })
  }


  return (
    <div className="flex h-screen">
      <div className="m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-5 text-white shadow-lg">
        <h1 className="text-center font-semibold text-4xl mb-5 "
        >
          {isLogin ? 'Login' : 'Register'}
        </h1>

        <form
          className="space-y-2"
          onSubmit={handleSubmit(handleAuth)}
        >

          <Input
            {...register('email', {
              required: true,
              pattern: {
                value: isEmailRegex,
                message: 'Invalid email address'
              }
            })}
            type="email"
            placeholder="Enter email:"
            className={cn('border border-transparent transition-colors', errors.email && 'text-red-500')}
          />

          {errors.email && (
            <p className="text-sm text-red-500" >
              {errors.email.message}
            </p>
          )}

          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Enter password'
              }
            })}
            type="password"
            placeholder="Password"
            className={cn('border border-transparent transition-colors', errors.password && 'text-red-500')}

          />

          {errors.password && (
            <p className="text-sm text-red-500" >
              {errors.password.message}
            </p>
          )}

          <div className="text-center">
            <Button
              type="submit"
              disabled={!isValid || loading}
              variant="accent"
            >
              {type === 'register' ? 'Register' : 'Login'}
            </Button>
          </div>

        </form>

        <AuthChangeTypeForm
          isLogin={isLogin}
        />

      </div>
    </div>
  )
}