import { ModalComponentProps } from "@/interfaces";
import { MODAL_TYPE } from "@/lib/constants";

//redux 
import { useAppSelector, useAppDispatch } from "@/libs/redux/hooks";
import { openModal, closeModal } from "@/lib/redux/features/modal/modalSlice";

//modal variants
import DeleteModal from "./delete";
import CreateModal from "./create";
import EditModal from "./edit";


export default function ModalComponent(props: ModalComponentProps){
    const { modalType, handleAction } = props;

    //get redux
    //redux set modal open
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((state) => state.modal.isOpen)
    const status = useAppSelector((state) => state.modal.status)

    //close modal
    const handleCloseModal = () => {
        dispatch(closeModal());
    }


    if(!isOpen) return null;

    switch (modalType) {
        case MODAL_TYPE.DELETE_USER:
            return (<DeleteModal status={status} handleCloseModal={handleCloseModal} handleAction={handleAction}/>)
        case MODAL_TYPE.CREATE_USER:
            return (<CreateModal status={status} handleCloseModal={handleCloseModal} handleAction={handleAction}/>)
        case MODAL_TYPE.EDIT_USER:
            return (<EditModal status={status} handleCloseModal={handleCloseModal} handleAction={handleAction}/>)
        default:
            break;
    }
  
}