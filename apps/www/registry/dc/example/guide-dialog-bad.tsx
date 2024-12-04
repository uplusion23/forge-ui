import { Button } from "@/registry/dc/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/dc/ui/card"

export default function GuideDialogBad() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Are you absolutely sure?</CardTitle>
        <CardDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-2">
        <Button>Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  )
}
