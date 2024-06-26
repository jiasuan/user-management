//this button is use for modal action button. etc submit, retry, delete

import { ButtonProps } from "@/interfaces";

export default function RetryButton(props: ButtonProps){

    const { label, action } = props;
  
    return(
        <button onClick={action} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto">
            {label}
        </button>
    )
}