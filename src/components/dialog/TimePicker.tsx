import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { DisableTimeContext } from "../../pages/Home";
import { TimeContext } from "./Dialog";

export const TimePicker: React.FC<{ type: "start" | "end" }> = ({ type }) => {
  const date = new Date(2000, 1, 1, 8, 0, 0);
  const hourOptions = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const minuteOptions = [0, 10, 20, 30, 40, 50];
  const { startTime, setStartTime, endTime, setEndTime } =
    useContext(TimeContext);
  const state = type === "start" ? startTime : endTime;
  const setState = type === "start" ? setStartTime : setEndTime;

  const handleHourChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = date;
    next.setHours(+event.target.value);
    next.setMinutes(state.getMinutes());
    setState(next);
  };
  const handleMinuteChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const next = date;
    next.setHours(state.getHours());
    next.setMinutes(+event.target.value);
    setState(next);
  };

  return (
    <>
      <div className="select">
        <select
          onChange={(e) => {
            handleHourChange(e);
          }}
        >
          {hourOptions.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
      </div>
      <span>:</span>
      <div className="select">
        <select
          onChange={(e) => {
            handleMinuteChange(e);
          }}
        >
          {minuteOptions.map((minute) => (
            <option key={minute} value={minute}>
              {String(minute).padStart(2, "0")}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
