import {} from "react";
import { HiSearchCircle} from 'react-icons/hi'
import { MdSettingsEthernet } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import Styles from '../css/search.module.css' 

const Searchbar = () => {
  return (
    <>
      <div className={Styles.outersearch}>
        <div className={Styles.innersearch} >
          <div className={Styles.anywhere}>
            <p>Anywhere</p>
            <div className={Styles.line}></div>
          </div>
          <div className={Styles.anyweek} >
            <p>Any week</p>
            <div className={Styles.line}></div>
          </div>
          <div className={Styles.guest} >
            <p className={Styles.guestname}>Add guests</p>
            <HiSearchCircle className={Styles.logo}/>
          </div>
        </div>
      </div>

      {/*  responsive design for mobile devices */}
      <div className={Styles.searchmobileout} >
        <div className={Styles.searchmobilein} >
        <div className={Styles.searchmobileleft}>
        <BsSearch className={Styles.searchmobilelogo} />
        <div className={Styles.searchmobiletxt}>
          <h1 className={Styles.searchtxt}>Anywhere</h1>
          <div className={Styles.searchmobiletxtinnerpart}>
            <p className={Styles.txt}>Any week</p>
            <p className={Styles.txt}>Add guests</p>
          </div>
        </div>
        </div>

        <MdSettingsEthernet className={Styles.searchmobilelogo}/>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
