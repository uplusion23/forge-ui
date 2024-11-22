import { Metadata } from "next"

import { Announcement } from "@/components/announcement"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export const metadata: Metadata = {
  title: "Tailwind Colors",
  description: "All colors in all formats.",
}

export default function ChartsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement className="mb-6" />
        <PageHeaderHeading>Forge-UI Beta</PageHeaderHeading>
        <PageHeaderDescription>
          Forge-UI is currently in beta. Components & Styles should be
          functional, but may not be fully polished.
        </PageHeaderDescription>
      </PageHeader>
      <section className="scroll-mt-20">{children}</section>
    </div>
  )
}
