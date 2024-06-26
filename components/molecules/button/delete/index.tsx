import { ButtonProps } from "@/interfaces";
import ATM_ContainedButton from "@/components/atoms/button/contained";

export default function DeleteBtn(props: ButtonProps){

    const { label, action } = props;
  
    return(
        <ATM_ContainedButton action={action} label={label} />
    )
}