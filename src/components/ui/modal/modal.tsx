import React from "react";
import { ModalOverlay, ModalContent, ModalHeader, ModalBody,
         ModalFooter, CloseButton } from "../../../styles/styled/modals";
import Button from "../buttons/button"; 
import { ModalProps } from "../../../Interfaces/modalProps";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, type, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader $type={type}>
          <h2>{title}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          <p>{message}</p>
        </ModalBody>

        <ModalFooter>
          {type === "question" ? (
            <>
              <Button variant="primary" onClick={onConfirm}>Aceptar</Button>
              <Button variant="tertiary" onClick={onCancel || onClose}>Cancelar</Button>
            </>
          ) : (
            <Button variant={ type === "success" ? "success" : type === "error" ? "error" : 
                              type === "warning" ? "warning" :type === "info" ? "info" : "tertiary" 
                            } onClick={onClose}> Cerrar </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;