import { useState } from "react";

import { months, type Month } from "../static_data/months";
import SelectField from "./SelectField";
import ErrorMessageInput from "./ErrorMessageInput";
import SignupInfoModal from "./SignupInfoModal";
function BirthdayInput() {
  const currentYear = new Date().getFullYear();
  const yearSpan = currentYear - 1995;

  const [selectedMonth, setSelectedMonth] = useState<Month>(months[0]);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [selectedYear, setSelectedYear] = useState(1995);
  return (
    <>
      <SignupInfoModal
        title="Birthday"
        body=" Providing your birthday helps make sure you get the right Facebook
          experience for your age. If you want to change who sees this, go to
          the About section of your profile. For more details, please visit our
          Privacy Policy."
      />
      <div className="bday-div  mt-2">
        <div className="flex items-center gap-4">
          <select
            name="month"
            className="w-full p-3 border-2 rounded-md border-grayWhite bg-pure"
            onChange={(e) => {
              const val: number = parseInt(e.target.value);
              setSelectedMonth(months[val]);
            }}
          >
            {months.map((month, i: number) => {
              return (
                <option key={i} value={i}>
                  {month.full}
                </option>
              );
            })}
          </select>

          <SelectField
            name="day"
            setter={setSelectedDay}
            arrayLength={selectedMonth.endDate}
            flag={1}
          />

          <SelectField
            name="year"
            setter={setSelectedYear}
            arrayLength={yearSpan + 1}
            flag={1995}
          />
        </div>
        <ErrorMessageInput text="What's your birth date" id="birthday-error" />
      </div>
    </>
  );
}

export default BirthdayInput;
