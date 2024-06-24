'use client'

//libraries
import { useEffect } from "react";

//components
import SubmitButton from "@/components/button/submit";
import UserForm from "@/components/form/userForm";
import AppBar from "@/components/appbar";
import ModalComponent from "@/components/modal";

//redux 
import { useAppSelector, useAppDispatch } from "@/libs/redux/hooks";
import { changeModalStatus, openModal } from "@/lib/redux/features/modal/modalSlice";

//constants
import { MODAL_STATUS, FORM_STATUS, MODAL_TYPE } from "@/lib/constants";

//interfaces
import { UserFormInitValue, UserFormModalProps } from "@/interfaces";

//request
import { createUser } from "@/lib/data";
import { resetFormData } from "@/lib/redux/features/form/formSlice";

export default function UserModuleLayout() {

    //submit user form API hook
    const { data, error, mutate } = createUser();

    const dispatch = useAppDispatch();

    //get form data from redux
    const formData = useAppSelector((state) => state.form.formData) as UserFormInitValue

    const title = "Create User";
    const actionBtn1 = (<SubmitButton formID="user-form" label={"Submit"}/>)

    //submit user form function
    function handleUserSubmit() {
      //call redux and show pop up loading
      dispatch(openModal(''))
      dispatch(changeModalStatus(MODAL_STATUS.LOADING))

      // Call mutation
      mutate(formData);
    }

    
    useEffect(()=>{
      //delete successful
      if(data){
        //show delete successful
        dispatch(changeModalStatus(MODAL_STATUS.SUCCESS));
      }
    },[data]);

    useEffect(()=>{
      //delete failed
      if(error){
        //show delete failed
        dispatch(changeModalStatus(MODAL_STATUS.ERROR))
      }
    },[error]);

    useEffect(()=>{

      //reset form data
      return(()=>{
        dispatch(resetFormData());
      })
    }, [])

    return (
      <div className="p-12">
          <AppBar title={title} actionBtn1={actionBtn1} backTo={"/users"}/>
          <UserForm handleSubmit={handleUserSubmit} initialValues={formData}/>
          <CreateUserModal handleAction={handleUserSubmit}/>
      </div>
    );
}

function CreateUserModal(props: UserFormModalProps){

  const { handleAction } = props;

  return(
    <ModalComponent modalType={MODAL_TYPE.CREATE_USER} handleAction={handleAction}/>
  )
}

