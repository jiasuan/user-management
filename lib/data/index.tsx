//libraries
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';

//interfaces
import { User, UserFormInitValue, EditFormValue } from '@/interfaces';


const fetchUserListFn = (): Promise<User[]> => axios.get(`${process.env.SERVER_ENDPOINT}/users`).then((response) => response.data).catch(()=> {throw new Error('Network Error');})
const fetchUserIDFn = (id: string): Promise<User> => axios.get(`${process.env.SERVER_ENDPOINT}/users/${id}`).then((response) => response.data).catch(()=> {throw new Error('Network Error');})
const createUserFn = (values: UserFormInitValue): Promise<UserFormInitValue> => axios.post(`${process.env.SERVER_ENDPOINT}/users`, values)
                                                                                    .then((response) => {
                                                                                      console.log("Success Add New User");
                                                                                      return response.data;
                                                                                    })
                                                                                    .catch((error) => {
                                                                                      console.error("Error adding new user:", error);
                                                                                      throw new Error('Network Error');
                                                                                    });
const editUserFn = (obj: EditFormValue): Promise<EditFormValue> => axios.put(`${process.env.SERVER_ENDPOINT}/users/${obj.id}`, obj.values)
                                                                                    .then((response) => {
                                                                                      console.log("Success Edit User");
                                                                                      return response.data;
                                                                                    })
                                                                                    .catch((error) => {
                                                                                      console.error("Error editing new user:", error);
                                                                                      throw new Error('Network Error');
                                                                                    });
const deleteUserFn = (id: string): Promise<string> => axios.delete(`${process.env.SERVER_ENDPOINT}/users/${id}`)
                                                                                    .then((response) => {
                                                                                      console.log("Success Delete User");
                                                                                      return response.data;
                                                                                    })
                                                                                    .catch((error) => {
                                                                                      console.error("Error deleting new user:", error);
                                                                                      console.log("error")
                                                                                      console.log(error)
                                                                                      throw new Error('Network Error');
                                                                                    });

//get user list
export function fetchUserList() {
    const { data, error, isLoading, refetch } = useQuery({queryKey:["fetchUser"], queryFn: fetchUserListFn});
    return { data, error, isLoading, refetch }
}

//get user details
export function fetchCurrentUserDetails(id: string) {
  const { data, error, isLoading, refetch } = useQuery({queryKey:["fetchUserID"], queryFn: ()=>fetchUserIDFn(id)});
  return { data, error, isLoading, refetch }
}


//create user
export function createUser(){
  const { data, error, mutate } = useMutation({mutationFn: (values: UserFormInitValue)=>createUserFn(values)});

  return { data, error, mutate }
}

//edit user
export function editUser(){
  const { data, error, mutate } = useMutation({mutationFn: (obj: EditFormValue)=>editUserFn(obj)});

  return { data, error, mutate }
}

//delete user
export function deleteUser(){
  const { data, error, mutate } = useMutation({mutationFn: (values: string)=>deleteUserFn(values)});

  return { data, error, mutate }
}