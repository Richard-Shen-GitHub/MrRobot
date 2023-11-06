import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function Tape_Backups() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                <p>Elliot is planning on destroying E-Corp’s (a client of Allsafe Cybersecurity) entire database in order to wipe out the entirety of America’s debt, as the rich are getting richer while the poor are getting poorer. He has a team which some of them get intel that E-Corp is currently planning on copying the current local tape storage system in America to 5 other locations in China and other US states. Their plan is to hack into the local tape storage system which is located at Steel Mountain, before they are able to transport copies of the tape data to the 5 other locations, since then it would be impossible to hack.

To do this, they will hack into E-Corp’s headquarters and install a circuit board behind a thermostat, helps plan asymmetric backdoor and gets VPN into network. Then they will be able to hack into the climate control system and increase the temperature high enough it will destroy all the tapes.</p>
                <h1>Analysis</h1>
                <p>I was doubtful if tape data was still a thing which is used as good cybersecurity practice in the modern era. Upon research, yes it is actually still being used and it is preferred because it is a low cost method to properly store data in a resistant method to cyber attacks since it is physical (Horizon Editorial 2023). Tape data is used in a storage system for a large corporation to act as a backup in case of system failures and also for archiving long-term storage. I can agree with the show when they say that tape data is an essential component to a company’s security.

There was a nice quote which Elliot said as well. 
<br></br>
<br></br>
<b> Steel Mountain. The hacker's dilemma. What to do when a bunch of data you want to destroy is completely off the grid?</b>
<br></br>
<br></br>

Next, I wanted to look into whether or not tapes would actually be destroyed at a high temperature. I was doubtful since my understanding of tape data was it was plastic and metal, and you would need a really high temperature to destroy them. However, again, upon research, when tapes are stored in an environment which is hotter than around 23 degrees Celsius, the tape’s foil may no longer be able to withstand the heat, and will become unreadable even if the tape is still in tact (CLIR 2023). This is a key factor which I didn’t think about, they don’t need to be destroyed, they just need to be unreadable and unusable which is the end goal of Elliot’s - so again, realistic and yes makes sense.

Finally, moving onto the hacking of the climate control system, it is also realistic once you tap into the network. Other internal systems are all hooked to the same network so you would be able to access it that way. It was also interesting that during the scene one of the team members raised their concern about the alarms going off once the temperature becomes too hot, but they had made sure to take that into account by disabling the alarms to not sound once the temperature is too hot. This way, the entire operation is silent and there is no issue.</p>

            </div>
        </>
    );
}
export default Tape_Backups;
