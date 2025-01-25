import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import SaylaniLogo from '../../assets/img/saylaniLogo.png'
import axios from "axios";
import { APP_ROUTES } from "../../constant/AppRoutes";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Cookies from "js-cookie"
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const { setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            const user = await axios.post(APP_ROUTES.login, data);
            console.log('user=>', user);
            Cookies.set('token', user?.data?.token)
            setUser(user?.data?.data)
            toast.success("Login Successfully");
            form.current.reset();
            setLoading(false);
        } catch (error) {
            console.log("Error", error);
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-9 items-center justify-center min-h-screen bg-gray-100">
            <img src={SaylaniLogo} style={{
                height: '80px'
            }} alt="saylaniLogo" />
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} ref={form}>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value:
                                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )}
                    </div>

                    {/* Password */}
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
                    <a
                        href="#"
                        className="text-sm text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Forgot password?
                    </a>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 active:bg-black active:text-white text-white py-2 mt-3 px-4 rounded-lg font-medium transition"
                    >
                        {loading ? 'loading...' : "Login"}
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 pt-4">
                        Don’t have an account yet?{" "}
                        <Link
                            to="/signUp"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
