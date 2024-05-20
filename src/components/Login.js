import { useSignIn } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, setActive } = useSignIn();

  const error = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  function signin() {
    signIn
      .create({
        identifier: getValues("email"),
        password: getValues("password"),
      })
      .then((data) => setActive({ session: data.createdSessionId }));
  }

  return (
    <div className="login-container">
      <form action="" onSubmit={handleSubmit(signin)}>
        <h2>Login</h2>
        <div className="box">
          <p className="text-muted" style={error}>
            Email
            {errors?.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </p>
          <input
            type="text"
            id="email"
            {...register("email", { required: "Please enter your email" })}
          />
        </div>
        <div className="box">
          <p className="text-muted" style={error}>
            Password
            {errors?.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )}
          </p>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Please enter your password",
            })}
          />
        </div>
        <div className="button">
          <button className="btn">Login</button>
          <Link to="/register" className="text-muted">
            Create Account
          </Link>
        </div>
        <Link>
          <p>Forgot password?</p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
