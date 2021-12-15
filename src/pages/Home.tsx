import React, { useEffect, useState, createContext, Dispatch } from "react";
import { css } from "@emotion/react";
import CustomDialog from "../components/dialog/Dialog";
import { checkDisable } from "../lib/checkDisable";

export type disableTimeProps = {
  [key: string]: {
    target: string;
    start: Date;
    end: Date;
  };
};

export const DisableTimeContext = createContext(
  {} as {
    disableTime: disableTimeProps;
    setDisableTime: Dispatch<React.SetStateAction<disableTimeProps>>;
  }
);

const Home: React.FC = () => {
  const [scheduleData, setScheduleData] = useState<string[][]>([]);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: {
      selected: boolean;
      day: string;
    };
  }>({});
  const [disableTime, setDisableTime] = useState<disableTimeProps>({});
  const tabeleHeadData = [
    "",
    "",
    "8:40 - 9:30",
    "9:40 - 10:30",
    "10:40 - 11:30",
    "11:40 - 12:30",
    "13:30 - 14:20",
    "14:30 - 15:20",
    "15:30 - 16:20",
    "16:30 - 17:20",
    "17:30 - 18:20",
    "18:30 - 19:20",
  ];
  useEffect(() => {
    const url = "202112.csv";
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const formatData: string[][] = [];
        data.split("\n").forEach((line) => {
          const lineData: string[] = [];
          const cells = line.split(",");
          if (cells[0] === "") return;
          cells.forEach((cell, index) => {
            // 13列目は備考なので無視します
            if (index !== 12) {
              // テキストに入っている半角スペースを削除
              lineData.push(cell.replace(/\s/g, ""));
            }
          });
          formatData.push(lineData);
        });
        setScheduleData(formatData);
      });
  }, []);

  return (
    <div
      css={css`
        max-width: 1104px;
        margin: 0 auto;
        padding: 40px;
        h1 {
          margin-bottom: 32px;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
        }
        .text-button {
          padding: 4px 12px;
          margin-bottom: 40px;
          color: #fff;
          font-weight: 700;
          background-color: #008bbb;
          border: 2px solid #008bbb;
          border-radius: 8px;
          transition: color 0.2s ease-out, background-color 0.2s ease-out;
          &:hover {
            color: #008bbb;
            background-color: #fff;
          }
        }
        table {
          border-collapse: collapse;
        }
        tr {
          &.closed {
            td {
              color: #fff;
              background-image: linear-gradient(
                45deg,
                #777 25%,
                #555 25%,
                #555 50%,
                #777 50%,
                #777 75%,
                #555 75%
              );
              background-size: 8px 8px;
            }
          }
        }
        th,
        td {
          padding: 8px 4px;
          border: 2px #fff solid;
          border-left: 2px #fff solid;
          text-align: center;
          vertical-align: middle;
          background-color: #f5f5f5;
          &:nth-of-type(1),
          &:nth-of-type(2) {
            width: 40px;
            background-color: #ddd;
          }
          &:nth-of-type(n + 3) {
            width: calc(1120px / 11);
          }
        }
        th {
          font-size: 16px;
          letter-spacing: 0.08rem;
          background-color: #ffd700;
        }
        td {
          font-size: 14px;
          &.disable {
            color: #fff;
            background-color: #999;
            button {
              pointer-events: none;
            }
          }
          button {
            padding: 4px 12px;
            color: #fff;
            font-weight: 700;
            letter-spacing: 0.08rem;
            background-color: #008bbb;
            border: 2px solid #008bbb;
            border-radius: 8px;
            transition: color 0.2s ease-out, background-color 0.2s ease-out;
            &[aria-selected="true"] {
              color: #008bbb;
              background-color: #fff;
            }
            &:disabled {
              background-color: #999;
              border-color: #999;
            }
          }
        }
      `}
    >
      <h1>🚗 💨</h1>
      <DisableTimeContext.Provider
        value={{
          disableTime,
          setDisableTime,
        }}
      >
        <CustomDialog />
      </DisableTimeContext.Provider>
      <table>
        <thead>
          <tr>
            {tabeleHeadData.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((line, index) => {
            const day = line[0];
            const dow = line[1];
            const closed = line[2] === "定休日" || line[2] === "年末休暇";
            return (
              <tr key={index} className={closed ? "closed" : ""}>
                {line.map((cell, index) => {
                  const disable =
                    index > 1
                      ? checkDisable(index - 1, dow, disableTime)
                      : false;
                  return (
                    <td key={index} className={disable ? "disable" : ""}>
                      {cell &&
                      index > 1 &&
                      cell !== "定休日" &&
                      cell !== "年末休暇" &&
                      cell !== "入所式" &&
                      cell !== "適性" ? (
                        <button
                          aria-selected={
                            selectedItems[cell]?.selected &&
                            selectedItems[cell]?.day === day
                          }
                          disabled={
                            disable ||
                            (selectedItems[cell]?.selected &&
                              selectedItems[cell]?.day !== day)
                          }
                          onClick={(e) => {
                            setSelectedItems({
                              ...selectedItems,
                              [cell]: {
                                selected:
                                  e.currentTarget.ariaSelected === "true"
                                    ? false
                                    : true,
                                day: day,
                              },
                            });
                          }}
                        >
                          {cell}
                        </button>
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
