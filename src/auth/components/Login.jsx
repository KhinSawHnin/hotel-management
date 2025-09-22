import React from 'react'
import login_bg from "../../assets/login_bg.png"
import login_form from "../../assets/login_form.png"
import star from "../../assets/star.png"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/dashboard");
  }
  return (
    <div className="relative h-screen w-full">
  <img
    src={login_bg}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />
  
  <div className="relative flex items-center justify-center h-full">
    <div className="bg-white shadow-lg rounded-lg flex gap-6 p-6 w-3/4 max-w-4xl">
      <div className="w-1/2">
        <img src={login_form} alt="" />
      </div>
      <div className="w-1/2 font-serif">
            <h1 className="text-xl font-semibold">Welcome To Chan Myae Guest House</h1>
            <div className="flex gap-4 pt-2 justify-center items-center pb-5">
              <hr className='w-1/2 text-red-600 border-2' />
              <img src={star} alt="" className='w-16' />
              <hr className='w-1/2 text-red-600 border-2' />
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='py-5'>
              <div className="flex justify-between items-center px-5">
                <label htmlFor="" className="text-red-700 font-semibold text-lg">Email</label>
                <input type="text"
                  {...register("email")}
                  className="bg-white border-2 px-3 py-1 rounded-lg border-red-300" placeholder='Please Enter' />
              </div>
              <div className="flex justify-between items-center px-5 py-5">
                <label htmlFor="" className="text-red-700 font-semibold text-lg">Password</label>
                <input type="password"
                  {...register("password")}
                  className=" bg-white border-2 px-3 py-1 rounded-lg border-red-300" placeholder='Please Enter' />
              </div>
              <div className="flex w-full justify-center">
              <button className="bg-red-700 text-white px-6 py-1.5 rounded-md shadow-md">Login</button>
              </div>
            </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login