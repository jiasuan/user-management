import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export function UserFormSchema(){

    const UserFormSchema = Yup.object().shape({
      name: Yup.string()
        .required('Name is required'),
      username: Yup.string()
        .min(2, 'Username is too short!')
        .max(50, 'Username is too long!')
        .required('Username is required.'),
      email: Yup.string().email('Invalid email format').required('Required'),
      phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    });
    
    return UserFormSchema
}
  