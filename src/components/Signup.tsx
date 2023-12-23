import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaSignInAlt, FaQuestionCircle } from 'react-icons/fa';
import ViewModal from './ViewModal';
import CustomInput from './CustomInput';

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}
interface SignupProps {
  onClose: () => void;
}
const Signup: React.FC<SignupProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <ViewModal isVisible={true} onClose={onClose} text={"Sign Up"}>
    <div className="flex flex-col items-center my-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <CustomInput label="Name" id="name" register={register} required />
          <CustomInput label="Phone Number" id="phoneNumber"  type="tel" register={register} required />
          <CustomInput
            label="Email"
            id="email"
            type="email"
            register={register}
            required
            pattern={/^\S+@\S+$/i}
          />
          <CustomInput label="Password" id="password" type="password" register={register} required />

          <button type="submit" className="bg-primary text-white p-2 rounded">
            Sign Up
          </button>
        </form>
    </div>
    </ViewModal>
  );
};

export default Signup;
