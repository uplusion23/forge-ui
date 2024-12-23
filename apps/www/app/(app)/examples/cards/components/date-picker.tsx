import { Card, CardContent } from "@/registry/austin/ui/card"
import { Label } from "@/registry/austin/ui/label"
import DatePickerWithRange from "@/registry/default/example/date-picker-with-range"

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <DatePickerWithRange className="[&>button]:w-[260px]" />
        </div>
      </CardContent>
    </Card>
  )
}
