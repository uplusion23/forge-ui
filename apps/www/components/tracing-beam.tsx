"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
  beamProps,
}: {
  children: React.ReactNode
  className?: string
  beamProps?: React.HTMLProps<HTMLDivElement>
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  useEffect(() => {
    const updateSvgHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight)
      }
    }

    // Create a ResizeObserver
    const observer = new ResizeObserver(() => {
      updateSvgHeight()
    })

    const currentContentRef = contentRef.current

    // Observe the contentRef element
    if (currentContentRef) {
      observer.observe(currentContentRef)
    }

    // Cleanup on unmount
    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef)
      }
      observer.disconnect()
    }
  }, [])

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  )
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  )

  const { className: beamClassName, ...restBeamProps } = beamProps || {}

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto size-full max-w-4xl", className)}
    >
      <div
        className={cn("absolute -left-4 top-3 md:-left-20", beamClassName)}
        {...restBeamProps}
      >
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          className="ml-[27px] flex size-4 items-center justify-center rounded-full border border-muted"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? "white" : "hsl(var(--primary))",
              borderColor:
                scrollYProgress.get() > 0 ? "white" : "hsl(var(--primary))",
            }}
            className="size-2 rounded-full border border-muted bg-primary"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="hsl(var(--primary))" stopOpacity="0"></stop>
              <stop stopColor="hsl(var(--primary))"></stop>
              <stop
                offset="1"
                stopColor="hsl(var(--secondary))"
                stopOpacity="0"
              ></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}
