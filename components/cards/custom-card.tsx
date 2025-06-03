import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import clsx from "clsx";

interface CardProps {
  isHover?: boolean;
  cardHeader?: React.ReactNode;
  cardBody?: React.ReactNode;
  cardFooter?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

export const CustomCard = ({
  cardBody,
  cardFooter,
  cardHeader,
  isHover,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
}: CardProps) => {
  return (
    <Card
      className={clsx(
        className,
        isHover && " hover:translate-y-[5px] rounded-[8px]"
      )}
    >
      {cardHeader && (
        <CardHeader className={clsx(headerClassName)}>{cardHeader}</CardHeader>
      )}
      {cardBody && (
        <CardBody className={clsx(bodyClassName)}>{cardBody}</CardBody>
      )}
      {cardFooter && (
        <CardFooter className={clsx(footerClassName)}>{cardFooter}</CardFooter>
      )}
    </Card>
  );
};
