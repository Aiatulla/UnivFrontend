import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import Paragraph from "../elements/Paragraph";

type CustomTableProps = {
  headers: string[];
  data: (string | React.ReactNode)[][];
  columnWidths?: string[];
};

export const CustomTable = ({
  headers,
  data,
  columnWidths,
}: CustomTableProps) => {
  return (
    <div className="w-full">
      <Table removeWrapper aria-label="Custom Table">
        <TableHeader className="bg-white">
          {headers.map((header, index) => (
            <TableColumn key={index} className={columnWidths?.[index]}>
              <Paragraph>{header}</Paragraph>
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="border-b hover:bg-gray-100">
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
