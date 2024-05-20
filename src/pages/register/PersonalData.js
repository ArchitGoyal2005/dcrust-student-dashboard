function PersonalData({ register, errors }) {
  const error = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <>
      <div className="box">
        <p className="text-muted" style={error}>
          Date of Birth
          {errors?.dateOfBirth && (
            <span style={{ color: "red" }}>{errors.dateOfBirth.message}</span>
          )}
        </p>
        <input
          type="text"
          id="dateOfBirth"
          placeholder="DD-MM-YYYY"
          {...register("dateOfBirth", {
            required: "Please provide your DOB",
          })}
        />
      </div>
      <div className="box">
        <p className="text-muted" style={error}>
          Contact Number
          {errors?.contactNumber && (
            <span style={{ color: "red" }}>{errors.contactNumber.message}</span>
          )}
        </p>
        <input
          type="text"
          id="contactNumber"
          {...register("contactNumber", {
            required: "Please provide your mobile",
          })}
        />
      </div>
      <div className="box">
        <p className="text-muted" style={error}>
          Address
          {errors?.address && (
            <span style={{ color: "red" }}>{errors.address.message}</span>
          )}
        </p>
        <input
          type="text"
          id="address"
          {...register("address", {
            required: "Please provide your address",
          })}
        />
      </div>
    </>
  );
}

export default PersonalData;
