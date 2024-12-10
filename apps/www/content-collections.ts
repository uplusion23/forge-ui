import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { codeImport } from "remark-code-import"
import remarkGfm from "remark-gfm"
import { visit } from "unist-util-visit"

import { rehypeComponent } from "./lib/rehype-component"
import { rehypeNpmCommand } from "./lib/rehype-npm-command"

const docs = defineCollection({
  name: "docs",
  directory: "content/docs",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    published: z.boolean().optional(),
    links: z
      .object({
        doc: z.string().optional(),
        api: z.string().optional(),
      })
      .optional(),
    featured: z.boolean().optional(),
    component: z.boolean().optional(),
    toc: z.boolean().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, codeImport],
      rehypePlugins: [
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "pre") {
              const [codeEl] = node.children
              if (codeEl.tagName !== "code") {
                return
              }

              if (codeEl.data?.meta) {
                // Extract event from meta and pass it down the tree.
                const regex = /event="([^"]*)"/
                const match = codeEl.data?.meta.match(regex)
                if (match) {
                  node.__event__ = match ? match[1] : null
                  codeEl.data.meta = codeEl.data.meta.replace(regex, "")
                }
              }

              node.__rawString__ = codeEl.children?.[0].value
              node.__src__ = node.properties?.__src__
              node.__style__ = node.properties?.__style__
            }
          })
        },
        rehypeSlug,
        rehypeComponent,
        () => (tree) => {
          visit(tree, (node) => {
            if (node?.type === "element" && node?.tagName === "div") {
              if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                return
              }

              const preElement = node.children.at(-1)
              if (preElement.tagName !== "pre") {
                return
              }

              preElement.properties["__withMeta__"] =
                node.children.at(0).tagName === "div"
              preElement.properties["__rawString__"] = node.__rawString__

              if (node.__src__) {
                preElement.properties["__src__"] = node.__src__
              }

              if (node.__event__) {
                preElement.properties["__event__"] = node.__event__
              }

              if (node.__style__) {
                preElement.properties["__style__"] = node.__style__
              }
            }
          })
        },
        rehypeNpmCommand,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["subheading-anchor"],
              ariaLabel: "Link to section",
            },
          },
        ],

        [
          rehypePrettyCode,
          {
            theme: "github-dark-high-contrast",
            keepBackground: false,
            // getHighlighter: async () => {
            //   const theme = await loadTheme(
            //     path.join(process.cwd(), "/lib/highlighter-theme.json")
            //   )
            //   return await getHighlighter({ theme })
            // },
            // onVisitLine(node) {
            //   // Prevent lines from collapsing in `display: grid` mode, and allow empty
            //   // lines to be copy/pasted
            //   if (node.children.length === 0) {
            //     node.children = [{ type: "text", value: " " }]
            //   }
            // },
            // onVisitHighlightedLine(node) {
            //   node.properties.className.push("line--highlighted")
            // },
            // onVisitHighlightedWord(node) {
            //   console.log(node.properties.className)
            //   node.properties.className = ["word--highlighted"]
            // },
          },
        ],
      ],
    })
    return {
      ...document,
      slug: `/${document._meta.path}`,
      slugAsParams: document._meta.path.split("/").slice(1).join("/"),
      mdx,
    }
  },
})

export default defineConfig({
  collections: [docs],
})
