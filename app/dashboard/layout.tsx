import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import logo from "@/public/logo.svg";
import DasboardItems from "@/components/dashboard/dashboard-items";
import { DollarSign, Globe, Home } from "lucide-react";

export const navLinks = [
  {
    name: "Dasboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Sites",
    href: "/dashboard/sites",
    icon: Globe,
  },
  {
    name: "Pricing",
    href: "/dashboard/pricing",
    icon: DollarSign,
  },
];

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} alt="Logo" className="size-8" />
              <h3 className="text-2xl">
                <span className="text-primary">Alex</span>Blog
              </h3>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
              <DasboardItems />
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="ml-auto flex items-center gap-x-5"></div>
        </header>
      </div>
    </section>
  );
};

export default layout;
