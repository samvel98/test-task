import { EditModal } from './components/edit-modal';
import { DeleteConfirmationModal } from './components/delete-modal';
import { CreateModal } from './components/create-modal';
export function Modal() {
  console.warn('don\'t use single')
  return null;
}

Modal.Edit = EditModal;
Modal.DeleteConfirmation = DeleteConfirmationModal;
Modal.Create = CreateModal;