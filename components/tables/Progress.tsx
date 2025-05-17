import { Progress } from "@heroui/react"

export const CustomProgress = () => {
    return (
        <div className="max-w-md">
      <Progress
        color="success"
        maxValue={100}
        showValueLabel={false}
        size="sm"
        value={95}
      />
      <div className="text-sm mt-1">
        95%
      </div>
    </div>
    )
}