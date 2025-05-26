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

interface CustomModalProps {
  button?: string;
  header?: string;
  content?: React.ReactNode;
  buttonLabel?: string;
}

export const CustomModal = ({
  button,
  header,
  content,
  buttonLabel,
}: CustomModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-white rounded-[8px] bg-[#0d6efd] hover:bg-[#0b5ed7]"
      >
        <HiPlus size={20} stroke-width={2} className="" />
        <Paragraph className="text-white font-[500]">{button}</Paragraph>
      </Button>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
      >
        <ModalContent>
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
                  onPress={onClose}
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
