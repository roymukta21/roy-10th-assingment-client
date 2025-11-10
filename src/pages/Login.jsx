import React from "react";

const Login = () => {
  return (
   <div className="flex justify-center mt-10">
  <fieldset className="fieldset bg-base-200 border border-base-300 rounded-lg w-80 p-6">
    <legend className="fieldset-legend text-secondary font-semibold text-2xl">
      Login
    </legend>

    <div className="mt-4">
      <label className="label">Email</label>
      <input type="email" name="email" className="input w-full" placeholder="Email" />
    </div>

    <div className="mt-4">
      <label className="label">Password</label>
      <input type="password" name="password" className="input w-full" placeholder="Password" />
    </div>

    <button type="submit" className="btn btn-neutral mt-6 w-full text-secondary" to="/login">
      Login
    </button>
  </fieldset>
</div>

  );
};

export default Login;
