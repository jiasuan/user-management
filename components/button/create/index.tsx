import { ButtonProps } from "@/interfaces";

export default function CreateButton(props: ButtonProps){

  const { leftIcon, label, action } = props;

  return(
    <button onClick={action} className="flex items-center justify-between h-full pl-3 pr-4 py-2 text-xs font-small text-white bg-primary rounded-lg text-center">
      {leftIcon && leftIcon}
      {label}
    </button>
  )
}