import { disableTimeProps } from "../pages/Home";
import { getPeriod } from "./getPeriod";

export const checkDisable = (
  index: number,
  dow: string,
  time: disableTimeProps
) => {
  const period = getPeriod(index);
  const weekday = ["月", "火", "水", "木", "金"];
  const weekend = ["土", "日"];
  let disable = false;
  if (period) {
    Object.keys(time).forEach((i) => {
      if (
        time[i].target === "全体" ||
        (time[i].target === "平日" && weekday.includes(dow)) ||
        (time[i].target === "休日" && weekend.includes(dow))
      ) {
        if (
          (period.start.getTime() >= time[i].start.getTime() &&
            period.start.getTime() <= time[i].end.getTime()) ||
          (period.end.getTime() >= time[i].start.getTime() &&
            period.end.getTime() <= time[i].end.getTime())
        ) {
          disable = true;
        }
      }
    });
  }
  return disable;
};
