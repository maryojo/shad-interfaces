// import Link from "next/link"
import { CircleUser, Menu, Package2, Search, Ellipsis, MessageSquareText, Video, EllipsisVertical, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings."

export default function ProfilePage01() {
  return (
    <div className="afcad-flux flex min-h-screen w-full flex-col">
      <header className=" z-50 bg-white sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden  flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            ProfilePage01
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Orders
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Customers
          </a>
          <a
            href="#"
            className="text-neutral-400 transition-colors hover:text-foreground"
          >
            Profile
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                ProfilePage01
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </a>
              <a href="#" className="hover:text-foreground">
                Profile
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full w-6 h-6">
                <Avatar className=" w-full h-full ">
                  <AvatarImage src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jane Doe" className="object-cover object-top" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 ">
          <nav
            className="grid gap-4 text-sm text-muted-foreground fixed" x-chunk="dashboard-04-chunk-0"
          >
          <h1 className="text-3xl font-semibold">Profile</h1>

            <a href="#" className="font-semibold text-primary">
              General
            </a>
            <a href="#">Security</a>
            <a href="#">Integrations</a>
            <a href="#">Support</a>
            <a href="#">Organizations</a>
            <a href="#">Advanced</a>
          </nav>
          <div className="grid gap-10 w-8/12 ml-[25%] mx-auto">
            <div>
              <div className="relative">
                <div className="w-full h-[20vh] rounded-lg shadow-lg">
                  <img className="object-cover h-full w-full rounded-lg" src='https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                </div>
                <Avatar className="absolute w-32 h-32 border-4 -bottom-24 left-5 border-white">
                  <AvatarImage src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jane Doe" className="object-cover object-top" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-row justify-between ml-44 my-4 items-start">
                <div>
                  <div className="flex flex-row gap-2">
                    <p className="font-semibold text-xl">Jane Doe</p>

                  </div>
                  <p className="text-base text-neutral-700">I'm a Design Engineer</p>
                </div>
                <div>
                  <div className="flex gap-2">
                    <Button size='icon' className="text-xs bg-neutral-400 hover:bg-neutral-600 h-8">
                      <Ellipsis className="w-3 h-3" />
                    </Button>
                    <Button className="text-xs bg-neutral-400 hover:bg-neutral-600 h-8">
                      <MessageSquareText className="mr-2 h-3 w-3" /> Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5">
              {/* <div className="flex justify-between">
                <div>
                  <p className="font-medium text-base">Specialization</p>
                  <p className="text-sm text-neutral-600">Hellllooooooooooo</p>
                </div>
                <EllipsisVertical className="hover:cursor-pointer w-3 h-3" />
              </div> */}
              {/* <hr className="my-5 border-[1px]" /> */}
              <div className="grid">
                <div>
                  <p className="font-medium text-base">About</p>
                  <div className="grid grid-cols-4">
                  <div>
                    <div>

                    </div>
                    <p>United States</p>
                  </div>
                  <div>

                  </div>
                </div>
                  <p className="text-sm text-neutral-600">Hi, I’m Jane, a full-stack web developer and UI/UX designer with over 8 years of experience building digital products that seamlessly blend form and function. I specialize in crafting clean, efficient, and highly interactive web applications that put user experience at the forefront.

With a background in computer science and a deep passion for design, I’ve had the opportunity to work with startups, agencies, and large-scale enterprises across various industries, helping them turn complex problems into simple, intuitive solutions. </p>
                </div>
              </div>
              <hr className="my-5 border-[1px]" />
              <p className="font-medium text-base mb-3">Experience</p>
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex flex-row items-center gap-3 bg-neutral-100 rounded-lg p-3 ">
                    <img src='https://cdn.brandfetch.io/idgyTV31vU/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG' className="w-10 h-10 rounded-full"/>
                    <div className="">
                      <p className="text-sm font-medium">Lead Frontend Engineer</p>
                      <p className="text-xs text-neutral-500">Klarna</p>
                    <p className="text-[11px] text-neutral-500">08/23 - Now</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3 bg-neutral-100 rounded-lg p-3 ">
                    <img src='https://cdn.brandfetch.io/idkuvXnjOH/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG' className="w-10 h-10 rounded-full"/>
                    <div className="">
                    <p className="text-sm font-medium">Frontend Engineer</p>
                    <p className="text-xs text-neutral-500">Airbnb</p>
                    <p className="text-[11px] text-neutral-500">05/22 - 07/23</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3 bg-neutral-100 rounded-lg p-3 ">
                    <img src='https://cdn.brandfetch.io/ide9_vzBKU/w/400/h/400/theme/dark/icon.jpeg?k=bfHSJFAPEG' className="w-10 h-10 rounded-full"/>
                    <div className="">
                    <p className="text-sm font-medium">Frontend Engineer</p>
                    <p className="text-xs text-neutral-500">HBO</p>
                    <p className="text-[11px] text-neutral-500">04/20 - 07/22</p>
                    </div>
                  </div>
                </div>
              </div>
            <p className="font-medium text-base mt-7 mb-3">Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                 <img src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_79603-1923.jpg?t=st=1729034324~exp=1729037924~hmac=3018edc3d2f12f66c58768b4a52e932065cc8a02cf589fa3b04dbf907434d9c6&w=900" className="rounded-md"/>
              </div>
              <div>
                 <img src="https://img.freepik.com/free-vector/furniture-shopping-app-interface_23-2148660330.jpg?t=st=1729177639~exp=1729181239~hmac=c13fd711e49167fac697d3532ebbe2e62826d5b0083fdf03a917acf3a442de9f&w=900" className="rounded-md"/>
              </div>
              <div>
                 <img src="https://img.freepik.com/free-vector/instagram-stories-bold-colors_79603-927.jpg?t=st=1729177904~exp=1729181504~hmac=3389c4104ee33740c005810676900f18ad1f41e7af0a62182269078415e333b2&w=900" className="rounded-md"/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
