//components
import RetryBtn from "@/components/molecules/button/retry";
import CancelBtn from "@/components/molecules/button/cancel";
import CloseBtn from "@/components/molecules/button/close";
import ModalComponent from "../base";

//icons
import { CheckCircleIcon, LoadingIndicator, CircleAlertIcon } from "@/components/atoms/icons";

//constants
import { MODAL_STATUS } from "@/lib/constants";

//interfaces
import { CreateModalComponentProps } from "@/interfaces";

export default function CreateModal(props: CreateModalComponentProps){

    const {status, handleCloseModal, handleAction} = props;
  
    const successIcon = CheckCircleIcon();
    const loadingIndicator = LoadingIndicator();
    const errorIcon = CircleAlertIcon();

    const retryBtn = (
      <RetryBtn label="Retry" action={handleAction} />
    )
  
    const cancelBtn = (
      <CancelBtn label="Cancel" action={handleCloseModal} />
    )

    const closeBtn = (
      <CloseBtn label="Close" action={handleCloseModal} />
    )
  
    const loadingTitle = "Creating Entry..."
    const loadingDescription = "Please Wait..."

    const errorTitle = "Create Entry Failed"
    const errorDescription = "Please Click Retry Button for Retry"

    const successTitle = "Create Entry Success"
    const successDescription = "Congratulations!"

    if(status === MODAL_STATUS.ERROR){
      return(
        <ModalComponent icon={errorIcon} button1={retryBtn} button2={cancelBtn} title={errorTitle} description={errorDescription}/>
      )
    }

    if(status === MODAL_STATUS.LOADING){
      return(
        <ModalComponent icon={loadingIndicator} button1={null} button2={null} title={loadingTitle} description={loadingDescription}/>
      )
    }

    if(status === MODAL_STATUS.SUCCESS){
      return(
        <ModalComponent icon={successIcon} button1={null} button2={closeBtn} title={successTitle} description={successDescription}/>
      )
    }

    return null
  
}

