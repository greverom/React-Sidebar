import { useState } from "react";
import Button from "../components/ui/buttons/button";
import NotificationModal from "../components/ui/modal/modal";
import ConfirmationModal from "../components/ui/modal/modal";
import { ButtonContainer, ModalPageContainer, ModalTitle } from "../styles/styled/modalPage";
import { useToast } from "../hooks/Toast/useToast";

const Modals = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const { showToast } = useToast();

  return (
    <ModalPageContainer> 
      <ModalTitle>Modales & Toasts</ModalTitle>
      <ButtonContainer> 
        <Button variant="success" onClick={() => setShowSuccessModal(true)}>Modal Éxito</Button>
        <Button variant="tertiary" onClick={() => setShowErrorModal(true)}>Modal Error</Button>
        <Button variant="warning" onClick={() => setShowWarningModal(true)}>Modal Advertencia</Button>
        <Button variant="info" onClick={() => setShowConfirmationModal(true)}>Modal Pregunta</Button>
      </ButtonContainer>
      
      <ButtonContainer> 
        <Button variant="success" onClick={() => showToast("Operación exitosa", "success")}>Toast Éxito</Button>
        <Button variant="tertiary" onClick={() => showToast("Ha ocurrido un error", "error")}>Toast Error</Button>
        <Button variant="warning" onClick={() => showToast("Cuidado con esta acción", "warning")}>Toast Advertencia</Button>
        <Button variant="info" onClick={() => showToast("Este es un mensaje informativo", "info")}>Toast Información</Button>
      </ButtonContainer>

      <NotificationModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
        type="success"
        title="Éxito"
        message="Operación exitosa"
      />

      <NotificationModal 
        isOpen={showErrorModal} 
        onClose={() => setShowErrorModal(false)} 
        type="error"
        title="Error"
        message="Ha ocurrido un error"
      />

      <NotificationModal 
        isOpen={showWarningModal} 
        onClose={() => setShowWarningModal(false)} 
        type="warning"
        title = "Advertencia"
        message="Algo salió mal"
      />

      <ConfirmationModal 
        isOpen={showConfirmationModal} 
        onClose={() => setShowConfirmationModal(false)} 
        onConfirm={() => alert("Acción confirmada")}
        onCancel={() => setShowConfirmationModal(false)}
        type="question"
        title="¿Estás seguro de continuar?"
      />
    </ModalPageContainer>
  );
};

export default Modals;