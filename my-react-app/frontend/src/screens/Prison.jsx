import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function Prison() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                <p>Elliot is in a situation where he has to break someone out of jail. To do this, he plans on hacking into the prison’s network and opening all the cell doors so that there is mass chaos in the yard so all the prisoners retaliate and try escape. To get into the network, he does some preparations by visiting the person and he leaves his phone at the desk. His phone is running an undetectable wireless sniffer, to get the network. He finds it is using WPA2 Wi-Fi, borderline unhackable, getting the handshake could take days - he needs to break the person out at night.

However, he thinks of an alternative method to hack into the network. He uses a police car mobile signal which can be hacker via bluetooth. He then is able to establish a connection to the police car network, and ultimately the jail network that way.

At night, he is in the network and opens up all the cells, which causes a power surge. The jail network was showing all cells closed since it essentially just crashed, alarms are silent for 2 minutes. All the prisoners start running out and climb over the fence, dig underneath the fence and run out.</p>
                <h1>Analysis</h1>
                <p>Most prison’s use industry practice security. But I agree, it is likely that once you have control of their network, you can hack into their cell doors, like what we’ve explored earlier, it would work like a car, all the components are linked on a single network. Have control of the network, and you control everything.

What I found interesting was the mention about WPA2 Wi-Fi, which I don’t know anything about.</p>
                <h2>Wireless Protected Access 2 (WPA2)</h2>
                <p>WPA2 is an encrypted security protocol that protects internet traffic for specifically wireless networks (Ghimiray 2022). It is the standard for Wi-Fi network security ever since it was introduced in 2004. WPA2 is secure because it uses advanced data encryption methods which protect internet routers with encryption keys, it scrambles data so that hackers are not able to decipher it (Ghimiray 2022). The addition of dynamic key encryption also makes it more difficult to hack since it will be a random pattern every cycle.</p>
                <h2>Advanced Encryption Standard (AES) Encryption</h2>
                <p>AES is a symmetric block cipher algorithm with a block size of 128 bits, and it converts each individual block into keys of 128, 196 and 256 bits (Jena 2023). It encrypts each block and then joins them together to form the ciphertext, and as mentioned earlier, this pattern is insanely impossible to crack.</p>
                <h2>Potential Solutions / Preventative Actions</h2>
                <p>As mentioned above in the scene about hacking into the car, Elliot was able to get into the jail network by first going through the police car’s bluetooth. So as mentioned before, turn your car’s bluetooth and Wi-Fi off and lock it when you exit the vehicle. That would have prevented the hack from occurring since the jail network was using WPA2 which would have been impossible to hack into.</p>
            </div>
        </>
    );
}
export default Prison;
