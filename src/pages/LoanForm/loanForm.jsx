import React from "react";
import { useForm } from "react-hook-form";
import SaylaniLogo from '../../assets/img/saylaniLogo.png'

function LoanForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Loan Request Data:", data);
    };

    return (
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen bg-gray-100 py-8">
            <img src={SaylaniLogo} style={{
                height: '70px'
            }} alt="saylaniLogo" />
            <div className="bg-white p-6 py-10 rounded-lg shadow-lg lg:w-[400px] sm:w-96">
                <h2 className="text-2xl font-semibold text-center mb-4 font-poppins">Loan Request Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="loanAmount" className="block text-[16px] pt-4 ps-1 font-medium text-gray-700 font-poppins">
                            Loan Amount
                        </label>
                        <input
                            type="number"
                            id="loanAmount"
                            placeholder="Enter Loan Amount"
                            {...register("loanAmount", { required: "Loan amount is required" })}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none mt-2 focus:ring-2 focus:ring-blue-500 font-poppins"
                        />
                        {errors.loanAmount && (
                            <p className="text-red-500 text-sm font-poppins">{errors.loanAmount.message}</p>
                        )}
                    </div>
                    <label
                        htmlFor="duration"
                        className="block text-[16px] pt-4 ps-1 font-medium text-gray-700 font-poppins"
                    >
                        Duration of Pay (in months)
                    </label>
                    <select
                        id="duration"
                        {...register("duration", { required: "Duration is required" })}
                        className="w-full px-4 py-2 border mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
                    >
                        <option value="" disabled>
                            Select Duration
                        </option>
                        <option value="4month">4 months</option>
                        <option value="6month">6 months</option>
                        <option value="8month">8 months</option>
                        <option value="10month">10 months</option>
                        <option value="12month">12 months</option>
                        <option value="1year">1 year</option>
                        <option value="3year">3 year</option>
                        <option value="5year">5 year</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 mb-4 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-poppins"
                        style={{
                            marginTop: '30px'
                        }}
                    >
                        Generate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoanForm;
