import { Progress } from "@heroui/react"

type ProgressProps = {
    value: number;
}

export const CustomProgress = ({ value=0 } : ProgressProps) => {
    return (
        <div className="max-w-md">
      <Progress
        color="success"
        maxValue={100}
        showValueLabel={false}
        size="sm"
        value={value}
      />
      <div className="text-sm mt-1">
        {value}%
      </div>
    </div>
    )
}