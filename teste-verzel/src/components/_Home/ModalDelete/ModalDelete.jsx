import React from 'react'
import {Modal, Button} from 'react-bootstrap'

  const ModalDelete = ({onClick = () => {}, onClose = () => {} , showModal = false, idTask = 0 }) => {

    const handleClose = () => { 
      onClose();
    }

    const handleConfirm = () => {
      onClick();
      onClose(idTask);
    }

      return (
          <Modal show={showModal}>
            <Modal.Header>
              <Modal.Title>Deletar Registro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Tem certeza que deseja excluir esse registro?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
              <Button variant="primary" onClick={handleConfirm}>Deletar</Button>
            </Modal.Footer>
          </Modal>
  );
}

export default ModalDelete