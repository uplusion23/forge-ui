import { Button } from "@/registry/dc/ui/button"
import { Input } from "@/registry/dc/ui/input"

export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}
