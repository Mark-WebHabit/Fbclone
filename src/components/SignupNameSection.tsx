import ErrorMessageInput from "./ErrorMessageInput";
import NameInput from "./NameInput";
function SignupNameSection() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <NameInput type="text" name="first-name" placeholder="First name" />
        <NameInput type="text" name="last-name" placeholder="Last name" />
      </div>
      <ErrorMessageInput text="Enter your full name" id="name-error" />
    </div>
  );
}

export default SignupNameSection;
