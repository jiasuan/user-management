import { SubmitButtonProps } from "@/interfaces";

export default function SubmitButton(props: SubmitButtonProps){

    const { formID, label } = props;
  
    return(
      <button type="submit" form={formID} className="flex items-center justify-between h-full pl-3 pr-4 py-2 text-xs font-small text-white bg-primary rounded-lg text-center">
        {label}
      </button>
    )
}