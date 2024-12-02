import Image from "next/image";
import logo from "@/public/image/logo.webp";
import Link from "next/link";
import { Youtube } from "lucide-react";
import { DiscordIcon } from "./ui/discord";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
];
const contact = [
  { name: "Discord", href: "/", icon: <DiscordIcon /> },
  { name: "Youtube", href: "/store", icon: <Youtube /> },
];
export function Footer() {
  return (
    <div className=" bg-[#0d0e11] border-t  border-t-cyan-500">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="">
            <Image src={logo} alt="Logo" width={100} />
            <p className="text-base font-normal text-gray-500 pt-4">
              © 2024 | All right reserved <br />
            </p>
            <p className="text-sm font-normal text-gray-500">Power by Kachul</p>
          </div>
          <div className="flex justify-between gap-4 text-nowrap">
            <div className="">
              <h1 className="text-base font-semibold uppercase pb-4">
                NAVIGATION
              </h1>
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=" text-base font-normal text-gray-500 hover:text-cyan-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div >
              <h1 className="text-base font-semibold uppercase pb-4">
                CONTACT
              </h1>
              <div className="flex flex-col gap-2">
                {contact.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className=" text-base font-normal text-gray-500 hover:text-cyan-300 flex gap-2"
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
