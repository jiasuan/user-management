import { ButtonProps } from "@/interfaces";

export default function ContainedButton(props: ButtonProps){

  //primary button is contained button. Mostly for action usage

  const { leftIcon, label, rightIcon, action, backgroundColor} = props;

  const bgColor = backgroundColor ? `bg-[${backgroundColor}]` : "bg-primary"

  return(
    <button onClick={action} className={`flex items-center justify-between h-full px-4 py-2 text-xs font-small text-white rounded-lg text-center ${bgColor}`}>
      {leftIcon && leftIcon}
      {label}
      {rightIcon && rightIcon}
    </button>
  )
}