function CredentailsData({ register, errors }) {
  const error = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <>
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
          {...register("email", {
            required: "Please provide your e-mail",
          })}
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
            required: "Please provide your password",
          })}
        />
      </div>
    </>
  );
}

export default CredentailsData;
