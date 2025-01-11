import SignupNameSection from "../components/SignupNameSection.js";
import SignupNameSectionInfo from "../components/SignupNameSectionInfo.js";
import BirthdayInput from "../components/BirthdayInput.tsx";
import SignupInfoModal from "../components/SignupInfoModal.tsx";
import ErrorMessageInput from "../components/ErrorMessageInput.tsx";

function Signup() {
  return (
    <div className="shadow-equal overflow-hidden rounded-t-lg flex flex-col">
      <SignupNameSectionInfo />
      <form action="" className="p-6 bg-pure mt-0.5">
        <SignupNameSection />
        <BirthdayInput />

        <SignupInfoModal
          title="Gender"
          body="You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say."
        />

        <div className="flex items-center gap-2 relative group mb-7">
          <label className="w-full p-3 border-2 rounded-md border-grayWhite flex justify-between">
            Female
            <input type="radio" name="sex" value="F" />
          </label>
          <label className="w-full p-3 border-2 rounded-md border-grayWhite flex justify-between">
            Male
            <input type="radio" name="sex" value="M" />
          </label>
          <label className="w-full p-3 border-2 rounded-md border-grayWhite flex justify-between ">
            Custom
            <input type="radio" name="sex" value="C" />
          </label>
          <ErrorMessageInput text="What's your gender" />
        </div>
        <select
          name=""
          id=""
          className="w-full p-3 border-2 rounded-md border-grayWhite flex justify-between bg-pure"
        >
          <option value="">Select your pronoun</option>
          <option value="she">She: "Wish her a happy birthday!"</option>
          <option value="he">He: "Wish him a happy birthday!"</option>
          <option value="they">They: "Wish them a happy birthday!"</option>
        </select>
      </form>
    </div>
  );
}

export default Signup;
