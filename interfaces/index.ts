import { ReactNode } from 'react';

export interface ID {
    id: string | number;
}

/////////form
export interface FormData {
    [key: string]: any;
}

//form - user
export type UserKey = keyof User;

export interface User extends ID {
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
    required: boolean;
    touched?: boolean;
}

//button - primary/ secondary button
export interface ButtonProps {
    /**
     * Button label
     */
    label: string,
      /**
   * Icon on the left side of label
   */
    leftIcon?: ReactNode,
      /**
   * Icon on the right side of label
   */
    rightIcon?: ReactNode,
    /**
     * Background color
     */
    backgroundColor?: string
      /**
   * Button click handler
   */
    action?: (args?: any) => void,

}

//button - submit form
export interface SubmitButtonProps extends ButtonProps{
    //take Button props
    formID: string,
}

//button - create
export interface CreateButtonProps {
    action: (args?: any) => void
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
export interface TableComponentProps<T extends ID> {
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

export interface TableRowProps<T extends ID> {
    header: TableColumn<T>[];
    item: T;
    editAction?: (args: any) => void;
    deleteAction?: (args: any) => void;
}

