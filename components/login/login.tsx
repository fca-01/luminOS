"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { redirect } from "next/navigation"
import { IconLock } from "@tabler/icons-react"
import { useState } from "react"
import Title from "../ui/labels"


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
})

export function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const [allowLogin, setAllowLogin] = useState(false)
  const [attempts, setAttempts] = useState(0)

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if(data.username === "admin" && data.password === "admin") {
      console.log("Login Successful")
      setAllowLogin(true)
      redirect("/desktop")
    }
    else {
      setAllowLogin(false)
      setAttempts(attempts + 1)
    }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen gap-5">

      <div className="flex gap-5 w-[50%] h-[50%] items-center justify-evenly bg-[#0E0506] border border-[#FF615F] p-5">

        <div className="flex flex-col gap-12 items-center justify-center">
          <div className="bg-[#25100F] border border-[#FF615F] p-5 rotate-45">
            <div className="-rotate-45">
              <IconLock className={`text-${allowLogin ? "[#FF615F]" : "emerald-400"} text-[#FF615F] w-20 h-20`} />
            </div>
          </div>

          <div className="uppercase text-sm">
              Attempts: <span className="text-[#de646f]">0{attempts}</span>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
            
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <Title>Username</Title>
                  <FormControl>
                    <Input placeholder="João Silva" className="rounded-none"{...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
    
              render={({ field }) => (
                <FormItem>
                  <Title>Password</Title>
                  <FormControl>
                    <Input placeholder="******" type="password" className="rounded-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="rounded-none" variant="secondary">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
