import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import ViewModal from './ViewModal';
import CustomInput from './CustomInput';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);

  };

  return (
    <ViewModal isVisible={true} onClose={onClose} text="Login">
      <div className="flex flex-col items-center my-2">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <CustomInput label="Email" id="email" type="email" register={register} required />
          <CustomInput label="Password" id="password" type="password" register={register} required />

          <button type="submit" className="bg-primary text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </ViewModal>
  );
};

export default Login;
