import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import Paragraph from "../elements/Paragraph";
import { CustomButton } from "../elements/CustomButton";
import { Button, Progress } from "@heroui/react";
import { CustomProgress } from "./Progress";

export const CustomTable = () => {
  return (
    <div className="w-full">
      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader className="bg-white">
          <TableColumn>
            <Paragraph>Student ID</Paragraph>
          </TableColumn>
          <TableColumn>
            <Paragraph>Name</Paragraph>
          </TableColumn>
          <TableColumn>
            <Paragraph>Current Grade</Paragraph>
          </TableColumn>
          <TableColumn>
            <Paragraph>Attendance</Paragraph>
          </TableColumn>
          <TableColumn>
            <Paragraph>Action</Paragraph>
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow
            key="1"
            className="border-b hover:bg-gray-100"
          >
            <TableCell>Tony Reichert</TableCell>
            <TableCell>A (92%)</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <CustomProgress />
            </TableCell>
            <TableCell>
              <Button
                type="button"
                className="!bg-white !text-blue-600 h-[30px] px-4 py-2 rounded !w-[50px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
              >
                View
              </Button>
            </TableCell>
          </TableRow>
          <TableRow
            key="2"
            className="border-b hover:bg-gray-100"
          >
            <TableCell>Tony Reichert</TableCell>
            <TableCell>A (92%)</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <CustomProgress />
            </TableCell>
            <TableCell>
              <Button
                type="button"
                className="!bg-white !text-blue-600 h-[30px] px-4 py-2 rounded !w-[50px] border !border-blue-600 hover:!bg-blue-600 hover:!text-white transition-colors duration-300 ease-in-out"
              >
                View
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

