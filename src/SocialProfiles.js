import React, { Component } from 'react';
import SOCIALPROFILES from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        const { image, link } = this.props.socialProfile;

        return (
            <span>
                <a href={link} >
                    <img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }} />
                </a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
               <h2>Contact</h2>
                <div>
                    {
                        SOCIALPROFILES.map(SOCIALPROFILE => {
                            return (
                                <SocialProfile key={SocialProfile.id} socialProfile={SOCIALPROFILE} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;
