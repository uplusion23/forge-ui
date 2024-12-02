import { Avatar, AvatarFallback, AvatarImage } from "@/registry/dc/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/uplusion23.png" alt="@uplusion23" />
      <AvatarFallback>UP</AvatarFallback>
    </Avatar>
  )
}
