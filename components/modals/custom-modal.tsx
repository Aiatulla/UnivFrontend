"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@heroui/react";
import { HiPlus } from "react-icons/hi2";
import Paragraph from "../elements/Paragraph";
import clsx from "clsx";

interface CustomModalProps {
  button?: string;
  header?: string;
  content?: React.ReactNode;
  buttonLabel?: string;
  onClick?: (onClose: () => void) => void;
  buttomClassName?: string;
}

export const CustomModal = ({
  button,
  header,
  content,
  buttonLabel,
  onClick,
  buttomClassName,
}: CustomModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className={clsx(
          `text-white rounded-[8px] bg-[#0d6efd] hover:bg-[#0b5ed7] p-1 gap-0 min-w-[135px]`,
          buttomClassName
        )}
      >
        <HiPlus size={16} strokeWidth={2} className="mr-[1px] !p-0" />
        <Paragraph className="text-white font-[500] pr-1">{button}</Paragraph>
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
      >
        <ModalContent className="overflow-visible">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {header}
              </ModalHeader>
              <Divider />
              <ModalBody className="mb-3">{content}</ModalBody>
              <Divider />
              <ModalFooter>
                <Button
                  className=" bg-[#6c757d] text-white hover:bg-[#5c636a] rounded-[8px]"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className="text-white bg-blue-500 hover:bg-blue-600 rounded-[8px]"
                  onClick={() => onClick?.(onClose)}
                >
                  {buttonLabel || "Create"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
