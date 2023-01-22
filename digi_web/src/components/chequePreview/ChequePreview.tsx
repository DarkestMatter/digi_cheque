import "./cheque.css";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  bankName: string;
  ifsccode: string;
  bankAddreess: string;
  payeName: string;
  amount: string | number;
  acountNumber: string;
  shouldShow: boolean;
  fromName: string;
  amountInWord: string;
  chequeClearanceDate: string;
  handleClose: () => void;
  isAuth?: boolean;
}

const ChequePreview = (props: IProps) => {
  return (
    <div>
      <div>
        <div
          className="chequepreviecheck"
          style={{
            margin: "auto",
            marginTop: `${props.isAuth ? "-3%" : "10%"}`,
          }}
        >
          <div className="chequepreviewborder">
            <div className="chequepreviewcontainer">
              {
                !props.isAuth && ( <Button
                  style={{
                    cursor: "pointer",
                    float: "right",
                    marginTop: "5px",
                    width: "20px",
                    marginRight: "10px",
                  }}
                  onClick={() => props.handleClose()}
                >
                  <CloseIcon />
                </Button>)
              }
             
              <div
                style={{
                  float: "right",
                  marginTop: "10px",
                  width: "20px",
                  marginRight: "100px",
                  display: "inline",
                }}
              >
                Date:{props.chequeClearanceDate}
              </div>
              <div className="chequepreviewcontent">
                <div className="one">
                  <div className="title">
                    <div id="bold">{props.bankName}</div>
                    <div className="name">
                      {props.bankAddreess}
                      <br />
                      RTGS/NEFT/IFSC Code: {props.ifsccode}
                      <br />
                    </div>
                  </div>
                </div>

                <div className="orderof">
                  Pay: {props.payeName}
                  {/* <input
                      className="chequepreviewinput"
                      type="text"
                      disabled
                      value={props.payeName}
                    /> */}
                </div>
                <div className="orderof">Rupees : {props.amountInWord}</div>
                <div className="orderof3">
                  <input className="chequepreviewinput" type="text" />{" "}
                  <table className="info1">
                    <tr>
                      <td className="blank short">
                        <label>Rs.</label>
                      </td>
                      <td className="blank long">
                        <input
                          className="chequepreviewinput"
                          type="text"
                          value={`${props.amount}/-`}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <br></br>
                <table className="info">
                  <tr>
                    <td className="blank short">
                      <label>A/c No.</label>
                    </td>
                    <td className="blank long">
                      <input
                        className="chequepreviewinput"
                        type="text"
                        value={props.acountNumber}
                      />
                    </td>
                  </tr>
                </table>
                <div className="chequepreviebank"></div>
                <table className="chequepreviesignature ">
                  <tbody>
                    <td className="chequepreviebank">{props.fromName}</td>
                    {/* <tr>
                        <td className="chequepresig" />
                      </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChequePreview;
