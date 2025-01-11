import NameInput from "./NameInput";
function SignupNameSection() {
  return (
    <div className="flex items-center gap-4 ">
      <NameInput
        type="text"
        name="first-name"
        placeholder="First name"
        errorMessage="What's your first name"
      />
      <NameInput
        type="text"
        name="last-name"
        placeholder="Last name"
        errorMessage="What's your last name"
      />
    </div>
  );
}

export default SignupNameSection;
