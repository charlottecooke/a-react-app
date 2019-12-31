import React, { Component } from 'react';
import profile from './assets/profile.jpg';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile} alt='me' className='picture-of-me'/>
                <h1> Hey! Is this the worst page you've ever seen?</h1>
                <p>My name is Charlotte and I am a software engineer.</p>
                <p>Right now I am trying to learn a little bit of React.</p>
                {
                    this.state.displayBio ? (
                        <div>
                        <p>I live in Oxford, and I used to be a physicist. </p>
                        <p></p>
                        <p>Besides learning React.js right now, I am trying to learn German, learn Machine Learning
                            and become stronger and fitter.
                        </p>
                        <div class="button_container" align="center">
                            <a class="nice-button" onClick={this.toggleDisplayBio}>Show less</a>
                        </div>
                        </div>
                    ) : (
                        <div class="button_container" align="center">
                            <a class="nice-button" onClick={this.toggleDisplayBio}>Bio</a>
                        </div>
                    )
                }
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;