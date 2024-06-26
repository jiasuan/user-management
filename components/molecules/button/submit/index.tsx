import { SubmitButtonProps } from "@/interfaces";
import ATM_ContainedButton from "@/components/atoms/button/contained";

export default function SubmitButton(props: SubmitButtonProps){

    const { formID, label } = props;
  
    return(
      <ATM_ContainedButton type="submit" formID={formID} label={label} />
    )
}