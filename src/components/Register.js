import { Link } from "react-router-dom";
import ClassData from "../pages/register/ClassData";
import CredentailsData from "../pages/register/CredentailsData";
import PersonalData from "../pages/register/PersonalData";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/clerk-react";

function Register() {
  const [step, setStep] = useState(0);
  const { signUp, setActive } = useSignUp();
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useForm();

  async function signup() {
    console.log("hii");
    console.log(getValues("email"), getValues("password"));
    signUp
      .create({
        emailAddress: getValues("email"),
        password: getValues("password"),
        unsafeMetadata: {
          contact: getValues("contactNumber"),
          name: getValues("name"),
          branch: getValues("branch"),
          rollNumber: getValues("rollNumber"),
          dateOfBirth: getValues("dateOfBirth"),
          address: getValues("address"),
        },
      })
      .then((data) => setActive({ session: data.createdSessionId }));
  }

  async function next() {
    const output = await trigger();
    if (!output) return;
    if (step !== 2) return setStep((curr) => curr + 1);
    signup();
  }

  return (
    <div className="registration-container">
      <form action="">
        <h2>Registration</h2>
        {step === 0 && <ClassData register={register} errors={errors} />}
        {step === 1 && <PersonalData register={register} errors={errors} />}
        {step === 2 && <CredentailsData register={register} errors={errors} />}

        <div className="button">
          {step === 0 || (
            <button
              type="button"
              className="btn"
              onClick={() => setStep((curr) => curr - 1)}
            >
              Back
            </button>
          )}
          <button type="button" className="btn" onClick={next}>
            {step === 2 ? "Register" : "Next"}
          </button>
        </div>
        <Link to="signin" className="text-muted">
          Already have an account?
        </Link>
      </form>
    </div>
  );
}

export default Register;
