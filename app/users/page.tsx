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
import CreateButton from "@/components/button/create";
import ModalComponent from "@/components/modal";
import { AddIcon } from "@/components/icons";
import TableComponent from "@/components/table";
import { GeneralErrorLayout } from "@/components/layout/error";
import { GeneralLoadingLayout } from "@/components/layout/loading";

//constant file
import { MODAL_TYPE, MODAL_STATUS } from "@/lib/constants";

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
        <CreateButton action={handleNavi} label={"Create"} leftIcon={<AddIcon/>} />
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