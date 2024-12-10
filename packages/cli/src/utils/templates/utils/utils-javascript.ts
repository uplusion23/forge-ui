const UTILS_JS = `
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(input) {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path) {
  return \`\$\{process.env.NEXT_PUBLIC_APP_URL\}\$\{path\}\`
}

const falsyToString = (value) =>
  typeof value === "boolean" ? \`\$\{value\}\` : value === 0 ? "0" : value

/* cx
  ============================================ */

export const cx = clsx

/* cva
  ============================================ */

export const cva =
  (base, config) =>
  (props) => {
    if (config?.variants == null)
      return cx(base, props?.class, props?.className)

    const { variants, defaultVariants } = config

    const getVariantClassNames = Object.keys(variants).map(
      (variant) => {
        const variantProp = props?.[variant]
        const defaultVariantProp = defaultVariants?.[variant]

        if (variantProp === null) return null

        const variantKey = (falsyToString(variantProp) ||
          falsyToString(
            defaultVariantProp
          ))

        return variants[variant][variantKey]
      }
    )

    const propsWithoutUndefined =
      props &&
      Object.entries(props).reduce((acc, [key, value]) => {
        if (value === undefined) {
          return acc
        }

        acc[key] = value
        return acc
      }, {})

    const getCompoundVariantClassNames = config?.compoundVariants?.reduce(
      (
        acc,
        { class: cvClass, className: cvClassName, ...compoundVariantOptions }
      ) =>
        Object.entries(compoundVariantOptions).every(([key, value]) =>
          Array.isArray(value)
            ? value.includes(
                {
                  ...defaultVariants,
                  ...propsWithoutUndefined,
                }[key]
              )
            : {
                ...defaultVariants,
                ...propsWithoutUndefined,
              }[key] === value
        )
          ? [...acc, cvClass, cvClassName]
          : acc,
      []
    )

    return cx(
      base,
      getVariantClassNames,
      getCompoundVariantClassNames,
      props?.class,
      props?.className
    )
  }
` as const

export { UTILS_JS }
