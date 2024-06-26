import { ButtonProps } from "@/interfaces";

export default function OutlinedButton(props: ButtonProps){

  //primary button is contained button. Mostly for action usage

  const { leftIcon, label, rightIcon, action } = props;
  
  return(
    <button onClick={action} className="outline outline-2 flex items-center justify-between h-full px-4 py-2 text-xs font-small text-primary rounded-lg text-center">
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </button>
  )
}