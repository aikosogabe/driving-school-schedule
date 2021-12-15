import React, {
  useContext,
  useState,
  ChangeEvent,
  SetStateAction,
  Dispatch,
  createContext,
} from "react";
import { css } from "@emotion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, ChevronDownIcon, PlusIcon } from "@radix-ui/react-icons";
import { DisableTimeContext } from "../../pages/Home";
import { List } from "./List";
import { TimePicker } from "./TimePicker";

const StyledOverlay = css`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  inset: 0;
`;
const StyledContent = css`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 560px;
  padding: 20px 20px 32px;
  background-color: #fff;
  border-radius: 8px;
`;
const StyledCloseButton = css`
  display: block;
  width: 24px;
  height: 24px;
  margin-left: auto;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const StyledTitle = css`
  margin-bottom: 16px;
  font-size: 18px;
`;
const StyledInputArea = css`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  .input {
    input {
      width: 96px;
      padding: 2px 4px;
      border: 1px solid #333;
      border-radius: 4px;
    }
  }
  .target {
    margin-left: 16px;
  }
  .time {
    display: flex;
    margin-left: 16px;
    .select {
      width: 40px;
      select {
        padding: 2px 4px;
        text-align: center;
      }
    }
    span {
      margin: 0 4px;
      line-height: 30px;
    }
  }
  .select {
    position: relative;
    width: 96px;
    svg {
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);
      pointer-events: none;
    }
    select {
      width: 100%;
      padding: 2px 20px 2px 4px;
      border: 1px solid #333;
      border-radius: 4px;
    }
  }
`;
const StyledAddButton = css`
  position: relative;
  width: 24px;
  height: 24px;
  margin-left: auto;
  border-radius: 50%;
  background-color: #008bbb;
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
`;
const StyledError = css`
  color: #ff4500;
  font-size: 14px;
  &[aria-hidden="true"] {
    display: none;
  }
`;

export const TimeContext = createContext(
  {} as {
    startTime: Date;
    setStartTime: Dispatch<React.SetStateAction<Date>>;
    endTime: Date;
    setEndTime: Dispatch<React.SetStateAction<Date>>;
  }
);

export const CustomDialog: React.FC = () => {
  const date = new Date(2000, 1, 1, 8, 0, 0);
  const { disableTime, setDisableTime } = useContext(DisableTimeContext);
  const [name, setName] = useState("");
  const [target, setTarget] = useState("全体");
  const [startTime, setStartTime] = useState<Date>(date);
  const [endTime, setEndTime] = useState<Date>(date);
  const [error, setError] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-button">除外条件を追加</button>
      </Dialog.Trigger>
      <Dialog.Overlay css={StyledOverlay} />
      <Dialog.Content css={StyledContent}>
        <Dialog.Close asChild>
          <button css={StyledCloseButton}>
            <Cross2Icon />
          </button>
        </Dialog.Close>
        <Dialog.Title css={StyledTitle}>除外条件を追加</Dialog.Title>
        <div className="input-area" css={StyledInputArea}>
          <div className="input">
            <input
              type="text"
              placeholder="条件名"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="target">
            <div className="select">
              <ChevronDownIcon />
              <select
                name=""
                id=""
                onChange={(e) => {
                  setTarget(e.target.value);
                }}
              >
                <option value="全体">全体</option>
                <option value="平日">平日</option>
                <option value="休日">休日</option>
              </select>
            </div>
          </div>
          <div className="time">
            <TimeContext.Provider
              value={{ startTime, setStartTime, endTime, setEndTime }}
            >
              <TimePicker type={"start"} />
              <span>:</span>
              <TimePicker type={"end"} />
            </TimeContext.Provider>
          </div>
          <button
            className="add"
            css={StyledAddButton}
            onClick={() => {
              if (name) {
                setError(false);
                setDisableTime({
                  ...disableTime,
                  [name]: {
                    target: target,
                    start: startTime,
                    end: endTime,
                  },
                });
              } else {
                setError(true);
              }
            }}
          >
            <PlusIcon />
          </button>
        </div>
        <p aria-hidden={!error} css={StyledError}>
          条件名を入れてください
        </p>
        <List />
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
