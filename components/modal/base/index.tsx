import { BaseModalComponentProps } from "@/interfaces";

export default function BaseModalComponent(props: BaseModalComponentProps){
    const { title, description, button1, button2, icon } = props;
  
    return(
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5 text-center">
                        {icon}
                        <h3 className="text-2xl font-semibold text-gray-900 pb-2" id="modal-title">{title}</h3>
                        <h3 className="mb-5 text-base font-normal text-gray-500 ">{description}</h3>
                        <div className="py-3 sm:flex sm:px-6 justify-center">
                          <div className="px-2">
                            {button1}
                          </div>
                          <div className="px-2">
                            {button2}
                          </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}



