//icons
import RetryButton from "../button/retry";
import { CircleAlertIcon } from "@/components/atoms/icons"

import { ErrorLayoutProps } from "@/interfaces";
  
export function GeneralErrorLayout(props: ErrorLayoutProps){

    const { retryFunction } = props;

    return(
        <div className="h-full min-h-inherit flex items-center justify-center flex-col">
            <CircleAlertIcon/>
            <RetryButton label="Retry" action={retryFunction}/>
        </div>
    )
}