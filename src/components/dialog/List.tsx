import React, { useContext } from "react";
import { css } from "@emotion/react";
import { MinusIcon } from "@radix-ui/react-icons";
import { DisableTimeContext } from "../../pages/Home";

export const List: React.FC = () => {
  const { disableTime, setDisableTime } = useContext(DisableTimeContext);
  return (
    <ul
      className="list"
      css={css`
        margin-top: 16px;
        li {
          display: flex;
          align-items: center;
          margin-top: 8px;
        }
        .name,
        .target {
          display: inline-block;
          min-width: 96px;
        }
        .name {
          font-weight: bold;
        }
        .target,
        .time {
          margin-left: 16px;
        }
        .delete {
          position: relative;
          width: 16px;
          height: 16px;
          margin-left: auto;
          border-radius: 50%;
          background-color: #ff4500;
          text-align: center;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            path {
              fill: #fff;
            }
          }
        }
      `}
    >
      {Object.keys(disableTime).map((key) => {
        const target = disableTime[key].target;
        const start = disableTime[key].start;
        const end = disableTime[key].end;
        return (
          <li key={key}>
            <p>
              <span className="name">{key}</span>
              <span className="target">対象：{target}</span>
              <span className="time">
                {start.getHours()}:{String(start.getMinutes()).padStart(2, "0")}{" "}
                〜 {end.getHours()}:{String(end.getMinutes()).padStart(2, "0")}
              </span>
            </p>
            <button
              className="delete"
              onClick={() => {
                const data = Object.assign({}, disableTime);
                delete data[key];
                setDisableTime(data);
              }}
            >
              <MinusIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
