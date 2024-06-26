//libraries
import {
    Formik,
    Form,
} from 'formik';

//components
import InputComponent from "@/components/atoms/input";

//redux
import { useAppSelector, useAppDispatch } from "@/libs/redux/hooks";
import { updateFormData, resetFormData } from "@/lib/redux/features/form/formSlice";

//interfaces
import { UserFormProps, UserFormInitValue } from "@/interfaces";

//schema
import { UserFormSchema } from "@/lib/schema";

export default function UserForm(props: UserFormProps){

    const { handleSubmit, initialValues } = props;
  
    // const initialValues: UserFormInitValue = { name: '', username: '', phone: '', email: ''};
  
    //validation schema - yup library
    const validationSchema = UserFormSchema();
  
    //redux
    const dispatch = useAppDispatch();


    return(
      <div className="shadow-container p-8 rounded-lg ">
        <Formik
            enableReinitialize={true}
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                handleSubmit(values);
                dispatch(updateFormData(values));
            }}
         >
            {({ errors, touched }) => (
              <Form id="user-form">
                 <div className="grid md:gap-6 mb-6 grid-cols-12">
                    <div className="col-span-12 sm:col-span-12 sm:pb-4 md:col-span-6">
                      <InputComponent inputID="name" inputLabel="Name" placeholder="Name" required={true} errorMessage={errors.name} touched={touched.name}/>
                    </div>
                    <div className="col-span-12 sm:col-span-12 sm:pb-4 md:col-span-6">
                      <InputComponent inputID="username" inputLabel="Username" placeholder="Username" required={true} errorMessage={errors.username} touched={touched.username}/>
                    </div>
                    <div className="col-span-12 sm:col-span-12 sm:pb-4 md:col-span-6">
                      <InputComponent inputID="email" inputLabel="Email Address" placeholder="Email" required={true} errorMessage={errors.email} touched={touched.email}/>
                    </div>
                    <div className="col-span-12 sm:col-span-12 sm:pb-4 md:col-span-6">
                      <InputComponent inputID="phone" inputLabel="Phone No." placeholder="Phone" required={false} errorMessage={errors.phone} touched={touched.phone}/>
                    </div>
                 </div>
              </Form>
            )}
          
         </Formik>
      </div>
    )
}