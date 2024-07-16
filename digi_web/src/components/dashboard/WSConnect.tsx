import { Grid } from "@mui/material";
import { esES } from "@mui/x-date-pickers";
import { useEffect } from "react";
import { Buffer } from "redux-saga";

export const WSConnect: React.FC = () => {
  const token =
    "CPZ95dgix0fHleQd1RBVuiwcmn+ND1ZTBBO6mLvE5iGV3me8OsXnP+pgEGbPOPihT3y9GQkGEQQdqPzfJT46jXzfy4x/XiZK1jbAG9v23pzldb3sQYa1WA==";
  const scripFeedList = [1660];
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
    // ws.on("open", function open() {
    //   console.log("marketFeed Arrays");
    //   const message = { a: "mode", v: ["ltp", scripFeedList] };
    //   ws.send(JSON.stringify(message));
    // });
    ws.onmessage = function (data) {
      //const json = JSON.parse(event.data);
      console.log(data);
      const feedObj = {
        token: data?.readInt32BE(4),
        ltp: data?.readInt32BE(8) / 100,
      };
      //orderPipelineFivePaisa(feedObj);
      console.log(feedObj);
      //   if (json.length > 1) {
      //     const feedObj = {
      //       token: json?.readInt32BE(4),
      //       ltp: json?.readInt32BE(8) / 100,
      //     };
      //     //orderPipelineFivePaisa(feedObj);
      //     console.log(feedObj);
      //   }
    };
  };

  useEffect(() => {
    subscribe();
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        This is WS
      </Grid>
    </Grid>
  );
};
