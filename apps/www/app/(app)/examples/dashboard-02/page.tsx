import { Metadata } from "next";
import Link from "next/link";
import {
  FlowerTulip,
  GithubLogo,
  Hexagon,
  InstagramLogo,
  Nut,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";

import { Card, CardContent, CardHeader } from "@/registry/dc/ui/card";
import { Button } from "@/registry/default/ui/button";
import { PageBanner } from "@/registry/default/ui/page-banner";
import { Separator } from "@/registry/default/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/default/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table";
import { MainNav } from "@/app/(app)/examples/dashboard-02/components/main-nav";
import { Search } from "@/app/(app)/examples/dashboard-02/components/search";
import { SideCard } from "@/app/(app)/examples/dashboard-02/components/side-card";
import { TopCards } from "@/app/(app)/examples/dashboard-02/components/top-cards";
import { UserNav } from "@/app/(app)/examples/dashboard-02/components/user-nav";

export const metadata: Metadata = {
  title: "Dashboard 02",
  description: "Example dashboard app built using the components.",
};

type FooterCategories = {
  [key: string]: {
    title: string;
    links: FooterLink[];
  };
};

type FooterLink = {
  title: string;
  href: string;
};

const footerLinks: FooterCategories = {
  company: {
    title: "Company",
    links: [
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Pricing", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { title: "Documentation", href: "#" },
      { title: "Papers", href: "#" },
      { title: "Press Conferences", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { title: "Terms of Service", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Cookies Policy", href: "#" },
    ],
  },
};

export default function Dashboard02Page() {
  return (
    <div className="relative hidden flex-col md:flex">
      <PageBanner variant="secondary" dismissable>
        This is a work in progress! 🚧
      </PageBanner>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher /> */}
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 p-8">
        <TopCards />
        {/* <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <Dashboard02Chart />
          </CardContent>
        </Card> */}
        <SideCard />
        <Card className="col-span-2">
          <CardHeader></CardHeader>
          <CardContent>
            <Table>
              <Sheet>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell>
                      <SheetTrigger asChild>
                        <Button variant="ghost">View</Button>
                      </SheetTrigger>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <SheetContent className="absolute">
                  <SheetHeader>
                    <SheetTitle>Details</SheetTitle>
                    <SheetDescription>Details about this transaction</SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </Table>
          </CardContent>
        </Card>
      </div>
      <footer className="flex flex-col gap-6 bg-card text-card-foreground">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-6 px-6 py-8">
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-4">
                <Nut className="size-8" weight="fill" />
                <span className="text-lg font-semibold">Company</span>
              </span>
              <span className="text-xs text-muted-foreground">hello@company.com</span>
              <span className="text-xs text-muted-foreground">+1 (555)-555-1234</span>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([key, value]) => (
                <FooterCategory key={key} {...value} />
              ))}
            </div>
          </div>
          <Separator />
          <div className="flex w-full items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <FlowerTulip className="size-6" weight="fill" />
              <Hexagon className="size-6" weight="fill" />
              <span className="text-muted-foreground">© 2021 Company, Inc.</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#">
                <XLogo className="size-6" />
              </Link>
              <Link href="#">
                <GithubLogo weight="fill" className="size-6" />
              </Link>
              <Link href="#">
                <InstagramLogo className="size-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCategory({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-2 [&_a:hover]:underline [&_a]:text-sm [&_a]:text-foreground">
      <h4 className="text-xs text-muted-foreground">{title}</h4>
      {links.map((link) => (
        <Link key={link.title.toLowerCase()} href={link.href}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}
