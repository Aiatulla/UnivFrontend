import { 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Progress,
  Badge,
  Button
} from "@heroui/react";
import { HiUserGroup } from "react-icons/hi2";

export const SubjectCard = () => {
  return (
    <Card className="min-w-[400px] transition-all hover:shadow-md hover:-translate-y-0.5 border" >
      <CardHeader>
        <div>
          <div className="text-lg font-semibold">
            CS101 - Introduction to Programming
          </div>
          <div className="text-gray-500 text-sm pt-1">
            Spring 2023
          </div>
        </div>
      </CardHeader>

      <CardBody className="space-y-3">
        <div className="flex  items-center">
          <HiUserGroup size={22}/>
          <span className=" pl-2 text-sm">45 students</span>
        </div>

        <div className="space-y-1">
          <span className="text-xs text-gray-500">
            Grading Progress
          </span>
          <Progress value={75} color="success" />
        </div>
      </CardBody>

      <CardFooter className="pt-0">
        <Button variant="shadow" color="primary" className="w-full rounded-[8px]">
          View Subject
        </Button>
      </CardFooter>
    </Card>
  );
};