import {} from 'react'
import Styles from './homemid.module.css'

const Homemid = () => {
  return (
    <>
    <div  >
        <div  className={Styles.main} >
            <div  className={Styles.maininner} >
                <p className={Styles.title} >Airbnb it easily with Airbnb Setup</p>
                <img  className={Styles.img} src="https://a0.muscache.com/im/pictures/65214d06-ffb4-4b70-93c0-01d368e76649.jpg?im_w=2560&im_q=highq" alt="" srcset="" />
            </div>
            <div className={Styles.txtcomp} >
            <div>
                <p className={Styles.txtheadline} >One-to-one guidance from a Superhost</p>
                <p className={Styles.txt}>We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.</p>
            </div>
            <div>
                <p className={Styles.txtheadline} >An experienced guest for your first booking</p>
                <p className={Styles.txt}>For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.</p>
            </div>
            <div>
                <p className={Styles.txtheadline} >Specialised support from Airbnb</p>
                <p className={Styles.txt}>New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.</p>
            </div>

            </div>
        </div>
    </div>

    </>
  )
}

export default Homemid