import { ReactNode } from 'react';
import { string } from 'yup';

/////////form
export interface FormData {
    [key: string]: any;
}

//form - user
export type UserKey = keyof User;

export type User = {
    id: string;
    name: string;
    email: string;
    username: string;
    phone: string;
};

export interface UserFormInitValue {
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface EditFormValue {
    id: string;
    values: UserFormInitValue;
}

export interface UserFormProps{
    initialValues: UserFormInitValue
    handleSubmit: (args: UserFormInitValue) => void,
}

export interface UserFormModalProps {
    handleAction: () => void
}

////////components

//input
export interface InputComponentProps {
    inputID: string;
    inputLabel: string;
    errorMessage?: string;
    placeholder?: string;
    required: Boolean;
    touched?: Boolean;
}

//button - default component
export interface ButtonProps {
    action?: (args?: any) => void,
    label: string,
    leftIcon?: ReactNode,
    rightIcon?: ReactNode,
}

//button - submit form
export interface SubmitButtonProps extends ButtonProps{
    //take Button props
    formID: string,
}

//modal - default component  
export interface ModalComponentProps {
    modalType: string,
    handleAction: (args: any) => void
}

export interface BaseModalComponentProps {
    title: string,
    description?: string,
    button1?: ReactNode,
    button2?: ReactNode,
    icon?: ReactNode 
}

//modal - delete
export interface DeleteModalComponentProps {
    status: any
    handleCloseModal: () => void,
    handleAction: (args: any) => void
}

//modal - create user
export interface CreateModalComponentProps {
    status: any
    handleCloseModal: () => void,
    handleAction: (args: any) => void
}

//modal - edit user
export interface EditModalComponentProps {
    status: any
    handleCloseModal: () => void,
    handleAction: (args: any) => void
}

//layout
export interface ErrorLayoutProps {
    retryFunction: () => void;
}


//app bar
export interface AppBarProps{
    title?: string;
    backTo?: string;
    actionBtn1?: ReactNode;
    actionBtn2?: ReactNode;
}


//table
export interface TableComponentProps<T> {
    data: T[],
    header: TableColumn<T>[],
    editAction?: (args: any) => void;
    deleteAction?: (args: any) => void;
}

export interface TableColumn<T> {
    key: keyof T;
    label: string;
    sort: boolean;
}

export interface TableRowProps<T> {
    header: TableColumn<T>[];
    item: T;
    editAction?: (args: any) => void;
    deleteAction?: (args: any) => void;
}

