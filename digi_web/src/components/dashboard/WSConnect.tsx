import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buffer } from "redux-saga";
import {
  updateScripData,
  updateScripFeed,
} from "../../slices/scripFeed/scripFeedSlice";
import { IScripData, IScripObject } from "../../interfaces/IScripData";
import { scripCodeEnum } from "../../services/enum";
import { scripFeedListSelector } from "../../selectors/selectors";

export const WSConnect: React.FC = () => {
  const dispatch = useDispatch();
  const token =
    "Z2tvKV7B2octIZ8IZrAxTzYInRgEbHZaqcRrOMZ/fYg3e4jCHwBLx+7d/iYrNJNUSXD7pokoZ/Xy9aZg/3hoj0eSLfcr44Ob2y4M91PAs8o3fS5q0wAqgA==";

  const scripFeedList = useSelector(scripFeedListSelector);

  const encodeAccessToken = () => {
    function customEncode(str: string | number | boolean) {
      return encodeURIComponent(str)
        .replace(/%2F/g, "/")
        .replace(/%3D/g, "=")
        .replace(/\//g, "%2F")
        .replace(/=/g, "%3D");
    }
    const encodedText = customEncode(token);
    return encodedText;
  };
  const accessToken = encodeAccessToken();
  let ws: WebSocket;
  const wsUrl = `wss://ws.zerodha.com/?api_key=kitefront&user_id=ZN1427&enctoken=${accessToken}&uid=1719703791675&user-agent=kite3-web&version=3.0.0`;

  console.log("ws Url ", wsUrl);
  ws = new WebSocket(wsUrl);

  //uncomment below lines for prod
  const subscribe = () => {
    ws.onopen = (event) => {
      console.log("marketFeed Arrays");
      const message = { a: "mode", v: ["ltp", scripFeedList] };
      ws.send(JSON.stringify(message));
      console.log(message);
    };
    ws.onmessage = async (event) => {
      const blob = event.data;
      //@ts-ignore
      blob
        .arrayBuffer()
        .then(
          (
            arrayBuffer: ArrayBufferLike & { BYTES_PER_ELEMENT?: undefined }
          ) => {
            const dataView = new DataView(arrayBuffer);
            if (dataView?.byteLength > 1) {
              const token = dataView.getInt32(4, false);
              const ltp = dataView.getInt32(8, false) / 100;
              const scripObj: IScripObject = {
                token: token,
                ltp: ltp,
              };
              console.log(scripObj);
              dispatch(updateScripData(scripObj));
              dispatch(updateScripFeed(scripObj));
            }
          }
        )
        .catch((err: any) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    subscribe();
  }, [scripFeedList]);

  return <Grid container></Grid>;
};
