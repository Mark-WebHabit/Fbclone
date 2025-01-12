import SignupNameSection from "../components/SignupNameSection.js";
import SignupNameSectionInfo from "../components/SignupNameSectionInfo.js";
import BirthdayInput from "../components/BirthdayInput.tsx";
import SignupInfoModal from "../components/SignupInfoModal.tsx";
import ErrorMessageInput from "../components/ErrorMessageInput.tsx";
import InputField from "../components/InputField.tsx";
import SelectGenderSignup from "../components/SelectGenderSignup.tsx";

import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="shadow-equal overflow-hidden rounded-lg">
      <SignupNameSectionInfo />
      <form action="" className="p-6 bg-pure mt-0.5 overflow-hidden">
        <SignupNameSection />
        <BirthdayInput />

        <SignupInfoModal
          title="Gender"
          body="You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say."
        />

        <SelectGenderSignup />
        <div className="mb-2">
          <InputField placeholder="Mobile number or email" />
          <ErrorMessageInput
            text="Enter a valid Phone number or email"
            id="eop-error"
          />
        </div>

        <div>
          <InputField placeholder="New password" />
          <ErrorMessageInput
            text="Password must be 8 characters"
            id="password-error"
          />
        </div>

        <button className="w-1/2 font-bold font-sans text-2xl text-pure bg-green text-center mx-auto mt-6 block py-2 rounded-md">
          Sign up
        </button>

        <Link to="/">
          <p className="mt-4 text-center text-fbBlue text-lg">
            Already have an account
          </p>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
