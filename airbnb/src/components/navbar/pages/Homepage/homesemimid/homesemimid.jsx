import {} from "react";
import Styles from "./homesemimid.module.css";
import Accodian from "./Accodian";
import MyAccodian from "./myAccodian";
import Smallcomp from "./Smallcomp";
const Homesemimid = () => {
  return (
    <>
      <div>
        <div className={Styles.main} >
          <div>
            <h1 className={Styles.txt} >Your questions, answered</h1>
          </div>
          <div>
            <div>
            <Accodian/>
            </div>
          </div>
          <div>
            </div>
        </div>
        <Smallcomp/>
      </div>
    </>
  );
};

export default Homesemimid;
