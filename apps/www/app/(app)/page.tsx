import Image from "next/image"
import Link from "next/link"
import { ArrowRightCircleIcon } from "lucide-react"

import { AnimatedLogo } from "@/components/animated-logo"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/austin/ui/button"
import { DotBackground } from "@/registry/default/ui/dot-background"
import MailPage from "@/app/(app)/examples/mail/page"

export default function IndexPage() {
  return (
    <div className="container relative pb-20">
      <PageHeader className="relative z-0">
        <DotBackground className="z-[-1] size-full [mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]" />
        <Announcement className="mb-4" />
        <AnimatedLogo />
        <PageHeaderHeading>
          Build apps without fighting libraries
        </PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can import into your apps,
          with a focus on accessibility and developer experience.
        </PageHeaderDescription>
        <PageActions>
          <Button
            asChild
            size="sm"
            className="flex items-center gap-2 rounded-full shadow-sm shadow-primary/0 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Link href="/docs">
              Get Started
              <ArrowRightCircleIcon className="size-6" />
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <ExamplesNav />
      <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
        <Image
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <Image
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border bg-background shadow">
          <MailPage />
        </div>
      </section>
    </div>
  )
}
