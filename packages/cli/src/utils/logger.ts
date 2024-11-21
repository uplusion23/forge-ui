import chalk from "chalk"

export const logger = {
  error(...args: unknown[]) {
    console.log(chalk.red(...args))
  },
  warn(...args: unknown[]) {
    console.log(chalk.yellow(...args))
  },
  info(...args: unknown[]) {
    console.log(chalk.cyan(...args))
  },
  success(...args: unknown[]) {
    console.log(chalk.green(...args))
  },
  break() {
    console.log("")
  },
}

export const banner = () =>
  chalk.yellow(
    `\r\n   ___                               _ \r\n  \/ _\/__  _______ ____   ____  __ __(_)\r\n \/ _\/ _ \\\/ __\/ _ \`\/ -_) \/___\/ \/ \/\/ \/ \/ \r\n\/_\/ \\___\/_\/  \\_, \/\\__\/        \\_,_\/_\/  \r\n            \/___\/                  \r\n`
  )
