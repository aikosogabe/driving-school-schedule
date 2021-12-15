export const getPeriod = (index: number) => {
  let period:
    | {
        start: Date;
        end: Date;
      }
    | undefined;
  switch (index) {
    case 1:
      period = {
        start: new Date(2000, 1, 1, 8, 40, 0),
        end: new Date(2000, 1, 1, 9, 30, 0),
      };
      break;
    case 2:
      period = {
        start: new Date(2000, 1, 1, 9, 40, 0),
        end: new Date(2000, 1, 1, 10, 30, 0),
      };
      break;
    case 3:
      period = {
        start: new Date(2000, 1, 1, 10, 40, 0),
        end: new Date(2000, 1, 1, 11, 30, 0),
      };
      break;
    case 4:
      period = {
        start: new Date(2000, 1, 1, 11, 40, 0),
        end: new Date(2000, 1, 1, 12, 30, 0),
      };
      break;
    case 5:
      period = {
        start: new Date(2000, 1, 1, 13, 30, 0),
        end: new Date(2000, 1, 1, 12, 20, 0),
      };
      break;
    case 6:
      period = {
        start: new Date(2000, 1, 1, 14, 30, 0),
        end: new Date(2000, 1, 1, 15, 20, 0),
      };
      break;
    case 7:
      period = {
        start: new Date(2000, 1, 1, 15, 30, 0),
        end: new Date(2000, 1, 1, 16, 20, 0),
      };
      break;
    case 8:
      period = {
        start: new Date(2000, 1, 1, 16, 30, 0),
        end: new Date(2000, 1, 1, 17, 20, 0),
      };
      break;
    case 9:
      period = {
        start: new Date(2000, 1, 1, 17, 30, 0),
        end: new Date(2000, 1, 1, 18, 20, 0),
      };
      break;
    case 10:
      period = {
        start: new Date(2000, 1, 1, 18, 30, 0),
        end: new Date(2000, 1, 1, 19, 20, 0),
      };
      break;
  }
  return period;
};
