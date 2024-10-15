import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const Home: React.FC = () => {
  const [name, setName] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Welcome home, ${name}!`)
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Welcome Home</CardTitle>
          <CardDescription>Enter your name to get started.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default Home