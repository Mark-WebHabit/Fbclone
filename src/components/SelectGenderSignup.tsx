import ErrorMessageInput from "./ErrorMessageInput";

function SelectGenderSignup() {
  return (
    <>
      <div className=" group">
        <div className="flex items-center gap-2 mb-2">
          <label className="w-full px-3 py-2 border-2 rounded-md border-grayWhite flex justify-between">
            Female
            <input type="radio" name="sex" value="F" />
          </label>
          <label className="w-full px-3 py-2 border-2 rounded-md border-grayWhite flex justify-between">
            Male
            <input type="radio" name="sex" value="M" />
          </label>
          <label className="w-full px-3 py-2 border-2 rounded-md border-grayWhite flex justify-between ">
            Custom
            <input type="radio" name="sex" value="C" />
          </label>
        </div>
        <ErrorMessageInput text="What's your gender" id="gender-error" />
      </div>
      <select
        name=""
        id=""
        className="w-full px-3 py-2 border-2 rounded-md border-grayWhite flex justify-between bg-pure"
      >
        <option value="">Select your pronoun</option>
        <option value="she">She: "Wish her a happy birthday!"</option>
        <option value="he">He: "Wish him a happy birthday!"</option>
        <option value="they">They: "Wish them a happy birthday!"</option>
      </select>
      <small className="text-sm text-grayWhite mb-2 inline-block">
        Your gender is visible to everyone.
      </small>
      <input
        type="text"
        name="gender"
        placeholder="Gender (Optional)"
        className="block border-2 rounded-md border-grayWhite w-full px-3 py-2 mb-3"
      />
    </>
  );
}

export default SelectGenderSignup;
