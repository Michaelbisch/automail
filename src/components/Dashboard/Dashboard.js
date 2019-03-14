import React from 'react';
import { Link } from 'react-router-dom'
import Logout from '../Logout/Logout'
import { FacebookShareButton, GooglePlusShareButton, LinkedinShareButton, FacebookIcon, GooglePlusIcon, LinkedinIcon} from 'react-share'


const ShareButtons = {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
  } 
  

function Dashboard(){

    return(
        <div>
        <Logout />
        <Link to='/reviews'><button>Reviews</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
        <Link to='/customize'><button>Customize</button></Link>
        <Link to='/about'><button>About</button></Link>

                    <div>
                    <div>
                    <FacebookShareButton
                    url={`https://www.automailindustries.com/`}
                    >
                        <FacebookIcon
                            size={32}
                            round />
                    </FacebookShareButton>
                    </div>
                    <div>
                    <GooglePlusShareButton
                    url={`https://www.automailindustries.com/`}
                    >
                        <GooglePlusIcon 
                        size={32}
                        round
                        />
                    
                    </GooglePlusShareButton>
                    </div>
                    <div>
                    <LinkedinShareButton
                    url={`https://www.automailindustries.com/`}
                    >
                        <LinkedinIcon 
                        size={32}
                        round
                        />
                    
                    </LinkedinShareButton>
                    </div>
                    </div>

        </div>
    )
}

export default Dashboard