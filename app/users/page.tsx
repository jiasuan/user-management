'use client'

import { User, ButtonProps, TableComponentProps, TableRowProps, TableColumn } from "@/interfaces";
import { fetchUserList } from "@/libs/data";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

//api
import { deleteUser } from "@/libs/data";

//redux 
import { useAppSelector, useAppDispatch } from "@/libs/redux/hooks";
import { openModal, changeModalStatus } from "@/lib/redux/features/modal/modalSlice";

//components
import CreateButton from "@/components/molecules/button/create";
import ModalComponent from "@/components/organisms/modal";
import TableComponent from "@/components/organisms/table";
import { GeneralErrorLayout } from "@/components/molecules/layout/error";
import { GeneralLoadingLayout } from "@/components/molecules/layout/loading";

//constant file
import { MODAL_TYPE, MODAL_STATUS } from "@/lib/constants";

//flow
/**
* 1. Request user list from API fetchUserList
*   1.1 Show loading
*   1.2 If request failed show Error
*   1.3 If request success show list of user on table
* 
* 2. Show delete user modal when click delete button of particular user on table
*   2.1 Close modal if click cancel button
*   2.2 Send DELETE request deleteUser
*     2.2.1 Show loading
*     2.2.2 If request failed show error and retry button
*     2.2.3 If success, show success message with close button
*     2.2.4 Close modal when click close button
* 
* 3. Navigate to Edit User module (path "users/:id") when click particular user on table
* 4. Navigate to Create User module (path "users/create") when click Create button
 */

export default function UserModuleLayout() {
    return (
      <div className="p-12">
          <AppBar/>
          <UserTable/>
          <DeleteUserModal/>
      </div>
    );
}

function DeleteUserModal(){
  const dispatch = useAppDispatch()
  const selectedID = useAppSelector((state) => state.modal.value)

  //delete user api
  const { data, error, mutate } = deleteUser();

  const handleDelete = () => {
    //set modal status loading
    dispatch(changeModalStatus(MODAL_STATUS.LOADING))

    //send request
    mutate(selectedID);
  }

  useEffect(()=>{
    //delete successful
    if(data){
      //show delete successful
      dispatch(changeModalStatus(MODAL_STATUS.SUCCESS))
    }
  },[data]);

  useEffect(()=>{
    //delete failed
    if(error){
      //show delete failed
      dispatch(changeModalStatus(MODAL_STATUS.ERROR))
    }
  },[error]);

  return(
    <ModalComponent modalType={MODAL_TYPE.DELETE_USER} handleAction={handleDelete}/>
  )
}

function AppBar(){
  const router = useRouter();

  const handleNavi = () => {
    //navigate to create user
    router.push('/users/create')
  }

  return(
    <div className="flex justify-between py-6 items-center">
        <p className="text-xl font-extrabold">User Management</p>
        <CreateButton action={handleNavi}/>
    </div>
  )
}

function UserTable(){
  const { data, error, isLoading, refetch} = fetchUserList();

  const router = useRouter();
  const dispatch = useAppDispatch()

  const tableHeader: TableColumn<User>[] = [
    {
      key: "name",
      label: "Name",
      sort: true
    },
    {
      key: "username",
      label: "Username",
      sort: true
    },
    {
      key: "email",
      label: "Email",
      sort: true
    },
  ]

  const handleEditUser = (item: User) => {
    const selectedID = item.id;

    //navigate to selected user
    router.push(`/users/${selectedID}`)
  }

  const handleDeleteUser = (item: User) => {
    const selectedID = item.id;

    dispatch(openModal(selectedID));
  }
  
  return(
    <div className="shadow-table h-full min-h-96">
      {
        error && <GeneralErrorLayout retryFunction={refetch}/>
      }
      {
        isLoading && <GeneralLoadingLayout/>
      }
      {
        (!error && !isLoading && data) && 
        <TableComponent<User> data={data} header={tableHeader} editAction={handleEditUser} deleteAction={handleDeleteUser}/>
      }
    </div>
  )
}
