import { ButtonProps } from "@/interfaces";
import ATM_OutlinedButton from "@/components/atoms/button/outlined";

export default function CloseBtn(props: ButtonProps){

    const { label, action } = props;
  
    return(
        <ATM_OutlinedButton action={action} label={label} />
    )
}