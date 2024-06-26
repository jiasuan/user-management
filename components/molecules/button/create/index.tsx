import { CreateButtonProps } from "@/interfaces";
import ATM_ContainedButton from "@/components/atoms/button/contained";
import { AddIcon } from "@/components/atoms/icons";

export default function CreateButton(props: CreateButtonProps){

  const { action } = props;

  return(
    <ATM_ContainedButton action={action} label={"Create"} leftIcon={<AddIcon/>} />
  )
}