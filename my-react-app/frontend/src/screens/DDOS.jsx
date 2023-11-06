import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function DDOS() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                <p>Allsafe Cybersecurity is the firm which Elliot is working at as a cybersecurity engineer, it specialises in protecting large corporations from cyber attacks, but they are currently being attacked in this scene. Elliot gets notified within 30 minutes and he goes to the office to check. He says calm down, its only been an hour. However, it is the worst DOS he's ever seen. He asked the support person to reconfigure DNS, stop services, reboot servers, redirect traffic, but they aren't coming back up, the network is dead. Protocol error, access errors everywhere. He runs a status on all services within the network. USA, Finland, Thailand, where all the attacks are coming from Elliot is saying its not just a DOS attack, the hackers have a root kit sitting inside the server, its malicious code that takes over a system, delete files, install viruses. Elliot says when the server is trying to reboot, the virus replicates itself and crashes the host, so host unknown. By defending themselves, they kept increasing the spread of the virus. The only solution is to take the whole system offline, and clean the servers from the virus, then bring them back up The server farm in Dallas, so they take a private jet there. He's downloading all the logs, and doesn't start the bootup sequence since 1 server with the malware is still online. He waits for the backup server had to be ready, and then they configure an auto switch, so the server with the malware can be shut off completely. They modify their DNS, redirect traffic, then it moves over to the backup server, the server with the malware was kept dead. Elliot then goes into the infected server, he says ever hacker leaves a message, they love leaving easter eggs. He finds a file left by the hackers, instead of deleting it, he reconfigures the admin access to the root directory, so only he can access it
                </p>
                <h1>Analysis</h1>
                <p>This scene demonstrated what a DOS was, a Denial-of-Service (DOS) attack - more specifically it was a big distributed DOS (DDoS). A DDoS aims to disrupt the normal traffic of a targeted server by overwhelming it with a flood of internet traffic. (Below information is from my weekly blog 1: https://www.openlearning.com/u/richardshen-s0tfc6/blog/Week1CyberSecurityHistory/)
                </p>
                <h2>DDoS</h2>
                <p>A network of computers has been manipulated with to have malware installed and is controlled by the attacker through remote instructions. It sends out requests to the target's IP address and causes it to become overwhelmed to the point normal traffic is unable to be processed and results in a denial-of-service to other users. There are different types of DDoS attacks as well.

                    To provide some context, a network connection on the internet is made up of multiple layers, portrayed in the OSI model. The types of DDoS attacks can therefore, be categorised by the different network layers, most commonly, it will be the Application, Network / Transport and Volumetric layers.

                    1. Application layer attack
                        - Goal is to exhaust the target's resources to create a DoS through spamming HTTP requests since webpages rely on the server to send and receive these requests.
                    2. Protocol attack
                        - Exhaust target's resources by over-consuming server resources of network equipment like firewalls. It breaks the TCP handshake (initiation and link of network between two computers) by sending a large number of TCP initial connection requests with spoofed IP addresses, which then returns a huge amount of requests to the victim's IP address.
                    3. Volumetric attack
                        - Goal is to create congestion by consuming all available bandwidth between target and the internet. A DNS amplification occurs, where a request from the victim's IP address ends up receiving a huge response and becomes overwhelmed. In the scene's situation, it was evident it was a protocol attack, where Allsafe's network was being intercepted and the servers were being overloaded due to the requests being accepted from the spoofed IP addresses, explaining why the requests were coming from  USA, Finland, Thailand, all random locations.

                    Furthermore, the idea of a rootkit was also mentioned. This was not accurately depicted in Mr. Robot since the dialogue from Elliot about what a rootkit was, “malicious code that takes over a system, delete files, install viruses”. The description above is a generic statement which can cover almost all viruses and malware. A rootkit is an unique malware because it is able to be undetected as it can be installed into the operating system and essentially override the legitimate bootloader - the component that loads the operating system. This makes more sense regarding the scene when Elliot was explaining that every time the server was trying to reboot, it would automatically crash, the bootloader was compromised by the bootloader rootkit installed.
                </p>
                <h2>Potential Solutions / Preventative Actions</h2>
                <p>To prevent the situation above from happening, which can actually be very common as DDoS attacks have become a hot topic in the past decade. The solution for this situation is to stop the attack from coming in at the first instance, this way the rootkit would not be able to be installed in the operating system as well - which was evidently the key issues.

                    Blackhole routing should have been implemented as a precautionary / backup process, since it will essentially funnel all traffic, good and bad into a blackhole route. It is essentially a null route and it will be dropped from the network (Cloudfare 2023). This defence mechanism however, may not be ideal since it will make the network inaccessible, which could be the hackers end goal. However, in this situation, the hacker's goal was to drop the rootkit into one of the servers. In hindsight, it would have been smart to implement the blackhole routing as a preventative method to stop the hackers in their tracks.

                    Another solution would be to have a backup server system process in place, so that when a server is attacked, it is able to shut off and bring online another mirrored server. It would be the equivalent to what Elliot had done when he flew over to the datacentre physically, however, to be automated instead. This way, it could respond to the malicious attack faster, and it will make the server redundant faster so that the hackers have access to the network shorter and their connection is cut off earlier. Further, even in a situation where it is a type 1 error (false-positive) exists. If a server receives traffic which seems suspicious but it is not 100% sure if it is legitimate or not, just have it shut off either way and bring up a backup server.

                    The challenger here is, the functionality and feasibility of implementing the above solutions. How much extra cost would it be to the cybersecurity firm, and is it actually necessary in order to prevent the same hacks from occurring again. I would argue yes, however, with my minimal knowledge and expertise. Either way, the scene is quite realistic minus the slight inaccurate descriptions of how certain components work, like the rootkit.
                </p>
            </div>
        </>
    );
}
export default DDOS;
