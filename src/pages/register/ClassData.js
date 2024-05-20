function ClassData({ register, errors }) {
  const error = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <>
      <div className="box">
        <p className="text-muted" style={error}>
          Name
          {errors?.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </p>

        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Please provide your name",
          })}
        />
      </div>
      <div className="box">
        <p className="text-muted" style={error}>
          Branch
          {errors?.branch && (
            <span style={{ color: "red" }}>{errors.branch.message}</span>
          )}
        </p>
        <select
          id="branch"
          {...register("branch", {
            required: "Please provide your branch",
          })}
        >
          <option value="">Select Branch</option>
          <option value="cse">Computer Science & Engineering</option>
          <option value="ece">Electronics & Communication Engineering</option>
          <option value="me">Mechanical Engineering</option>
          <option value="ce">Civil Engineering</option>
        </select>
      </div>
      <div className="box">
        <p className="text-muted" style={error}>
          Roll Number
          {errors?.rollNumber && (
            <span style={{ color: "red" }}>{errors.rollNumber.message}</span>
          )}
        </p>
        <input
          type="text"
          id="rollNumber"
          {...register("rollNumber", {
            required: "Please provide your roll number",
          })}
        />
      </div>
    </>
  );
}

export default ClassData;
