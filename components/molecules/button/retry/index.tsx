//this button is use for modal action button. etc submit, retry, delete

import { ButtonProps } from "@/interfaces";
import ATM_ContainedButton from "@/components/atoms/button/contained";

export default function RetryButton(props: ButtonProps){

    const { label, action } = props;
  
    return(
        <ATM_ContainedButton action={action} label={label} />
    )
}