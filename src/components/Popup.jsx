/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const PopupInfo = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { children } = props;
  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={onOpen}>
        Information
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>{children}</ModalContent>
      </Modal>
    </>
  );
};

const PopupTitle = (props) => {
  const { titleInfo } = props;
  return (
    <>
      <ModalHeader>{titleInfo}</ModalHeader>
      <ModalCloseButton />
    </>
  );
};

const PopupBody = (props) => {
  const { BodyInfo } = props;
  return <ModalBody mb="15px">{BodyInfo}</ModalBody>;
};

PopupInfo.Header = PopupTitle;
PopupInfo.Body = PopupBody;

export default PopupInfo;
