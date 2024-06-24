'use client'

//libraries
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

//components
import SubmitButton from "@/components/button/submit";
import UserForm from "@/components/form/userForm";
import AppBar from "@/components/appbar";
import ModalComponent from "@/components/modal";
import { GeneralErrorLayout } from "@/components/layout/error";
import { GeneralLoadingLayout } from "@/components/layout/loading";

//redux 
import { useAppSelector, useAppDispatch } from "@/libs/redux/hooks";
import { changeModalStatus, openModal } from "@/lib/redux/features/modal/modalSlice";
import { updateFormData, resetFormData } from "@/lib/redux/features/form/formSlice";

//constants
import { MODAL_STATUS, FORM_STATUS, MODAL_TYPE } from "@/lib/constants";

//interfaces
import { UserFormInitValue, UserFormModalProps } from "@/interfaces";

//request
import { editUser, fetchCurrentUserDetails } from "@/lib/data";

export default function UserModuleLayout({ params }: { params: { id: string } }) {

    const currentUserID = params.id;
    const title = "Edit User";
    const actionBtn1 = (<SubmitButton formID="user-form" label={"Save Changes"}/>);

    return (
      <div className="p-12">
          <AppBar title={title} actionBtn1={actionBtn1} backTo={"/users"}/>
          <EditUserFormComp currentUserID={currentUserID}/>
      </div>
    );
}

function EditUserFormComp(props: { currentUserID: string}){

  const { currentUserID } = props;

  const dispatch = useAppDispatch();

  const { data, error, isLoading, refetch} = fetchCurrentUserDetails(currentUserID);
  
  //submit user form API hook
  const { data: submitSuccess, error: submitError, mutate } = editUser();

  //get form data from redux
  const formData = useAppSelector((state) => state.form.formData) as UserFormInitValue

  //submit user form function
  function handleUserSubmit() {
    //call redux and show pop up loading
    dispatch(openModal(''))
    dispatch(changeModalStatus(MODAL_STATUS.LOADING))

    // Call mutation
    const mutateObj = {
      id: currentUserID,
      values: formData
    }
    mutate(mutateObj);
  }

  useEffect(()=>{
    //delete successful
    if(data){
      //show delete successful
      dispatch(changeModalStatus(MODAL_STATUS.SUCCESS));
      // setInitialValues
      console.log(data)
      dispatch(updateFormData({
        name: data.name, username: data.username, phone: data.phone, email: data.email
      }));

    }
  },[data]);

    
  useEffect(()=>{
    //delete successful
    if(submitSuccess){
      //show delete successful
      dispatch(changeModalStatus(MODAL_STATUS.SUCCESS));
    }
  },[submitSuccess]);

  useEffect(()=>{
    //delete failed
    if(submitError){
      //show delete failed
      dispatch(changeModalStatus(MODAL_STATUS.ERROR))
    }
  },[submitError]);

  useEffect(()=>{

    //reset form data
    return(()=>{
      dispatch(resetFormData());
    })
  }, [])

  return(
    <div>
      {
        error && <GeneralErrorLayout retryFunction={refetch}/>
      }
      {
        isLoading && <GeneralLoadingLayout/>
      }
      {
        (!error && !isLoading && data) && 
        <UserForm handleSubmit={handleUserSubmit} initialValues={formData}/>
      }
      <EditUserModal handleAction={handleUserSubmit}/>
    </div>
  )
}


function EditUserModal(props: UserFormModalProps){

  const { handleAction } = props;

  return(
    <ModalComponent modalType={MODAL_TYPE.EDIT_USER} handleAction={handleAction}/>
  )
}
