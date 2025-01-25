import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SaylaniLogo from '../../assets/img/saylaniLogo.png'
import axios from "axios";
import { APP_ROUTES } from "../../constant/AppRoutes";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const form = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        try {
            setLoading(true)
            const userRegister = await axios.post(APP_ROUTES.signUp, data);
            toast.success("SignUp Successfully")
            if (userRegister) {
                navigate('/signIn')
                console.log("SignUp Successfully");
            }
            form.current.reset();
            setLoading(false);
        } catch (error) {
            console.log("Error", error.message);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-9 items-center justify-center min-h-screen bg-gray-100">
            <img src={SaylaniLogo} style={{
                height: '80px'
            }} alt="saylaniLogo" />
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Signup Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Username</label>
                        <input
                            type="text"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.username ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("userName", { required: "Username is required" })}
                        />
                        {errors.userName && (
                            <span className="text-red-500 text-sm">
                                {errors.userName.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}
                    </div>
                    <label
                        htmlFor="terms"
                        className="font-light text-gray-500 dark:text-gray-300"
                    >
                        I accept the{" "}
                        <a
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            href="#"
                        >
                            Terms and Conditions
                        </a>
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 mt-3 hover:bg-blue-600 active:bg-black active:text-white text-white py-2 px-4 rounded-lg font-medium transition"
                    >
                        {loading ? 'loading...' : "SignUp"}
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-4">
                        Already have an account?{" "}
                        <Link
                            to="/signIn"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
