'use client'

import React, { useEffect, useRef, useState } from "react"
//import { OS_CONFIG } from "@/os-config"

type Command = {
  input: string
  output: string
}

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [history])

  const handleCommand = (command: string): string => {
    switch (command.trim()) {
      case "help":
        return "Available commands: help, whoami, clear"
      case "clear":
        setHistory([])
        return ""
      case "whoami":
        return `guest`
      default:
        return `Comando não reconhecido: ${command}`
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentInput.trim()) return

    const output = handleCommand(currentInput)
    if (currentInput.trim() === "clear") {
      setCurrentInput("")
      return
    }

    setHistory(prev => [...prev, { input: currentInput, output }])
    setCurrentInput("")
  }
  return (
    <div className="flex flex-col bg-text text-text font-mono p-4 w-full gap-5 ">
      <Neofetch />
      <div className="flex flex-col gap-2 text-start">

      {history.map((cmd, idx) => (
        <div key={idx} className="">
          <div>
            <span className="text-blue-400">{cmd.input}</span>
          </div>
          {cmd.output && <pre className="whitespace-pre-wrap">{cmd.output}</pre>}
        </div>
      ))}
      </div>

      <div className="flex items-center gap-0.5 mb-5">
        <div className="border-y-2 border-l-2 border-blue-500 w-10 h-10" />

        <div className="flex flex-col items-start justify-center w-full h-full gap-4">
          <div className="flex gap-1">
            <Brackets value="guest@localhost"/> - <Brackets value="~terminal" /> - <Brackets value="zsh" /> 
          </div>

          <div className="flex gap-2">
            <Brackets value="$" />
            {/* <input className="outline-none" autoFocus type="text" onKeyDown={handleKeyDown} value={terminalMessage} onChange={(e) => setTerminalMessage(e.target.value)} /> */}

            <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-blue-400 mr-1">guest@localhost</span>:~$
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          className="bg-transparent outline-none text-green-500 flex-1 ml-2"
          autoFocus
        />
      </form>
          </div>
        </div>
      </div>
    </div>
  )
}

function Brackets({value}:{value: string}){
  return(
    <div className="text-blue-500">
      [
      <span className="text-text px-0.5">
        {value}
      </span>
      ]
    </div>
  )
}


interface DisplayInfoProps {
  title: string
  value: string
}

function Neofetch(){
  const neofetch = [
    {
      label: "user",
      value: "guest"
    },
    {
      label: "hostname",
      value: "localhost"
    },
    {
      label: "Distro",
      value: "LuminOS"
    },
    {
      label: "Host",
      value: "Custom Terminal"
    },
    {
      label: "Kernel",
      value: "6.3.1"
    },
    {
      label: "Uptime",
      value: "3 hours, 12 mins"
    },
    {
      label: "Shell",
      value: "zsh"
    },
    {
      label: "Terminal",
      value: "web-terminal"
    },
    {
      label: "Theme",
      value: "Tailwind-dark"
    },
    {
      label: "CPU",
      value: "Intel i7-9750H @ 2.60GHz"
    },
    {
      label: "Memory",
      value: "8 GB / 16 GB"
    }
  ]

  return (
    <div className="flex bg-text text-text font-mono p-4 w-full gap-5">
      <div className="text-center flex flex-col items-start justify-center font-mono">
        {neofetch.map((item) => (
          <DisplayInfo title={item.label} value={item.value} key={item.label} />
        ))}
      </div>
    </div>
  ) 
}

function DisplayInfo({ title, value }: DisplayInfoProps) {
  return (
    <div className="flex gap-2">
      <div className="text-start font-mono font-bold text-text">
        {title}:
      </div>
      <div className="text-start font-mono text-text">
        {value}
      </div>
    </div>
  )
}