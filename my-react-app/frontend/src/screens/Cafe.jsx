import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function Cafe() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                    <p>Elliot Alderson (main character and hacker majority of the show) sits in front of a cafe owner, Ron, (Ron’s Coffee). Elliot exposes Ron’s real name is Rohit Mehta, when he started his first coffee shop 6 years ago which caused him to change his name to Ron. Elliot, then explains, he likes coming here because of the free Wi-Fi, and has a fibre connection with gigabit speed, which is good. But that is what made him suspicious, that the cafe’s free Wi-Fi was incredibly fast. He became curious and decided to dig into the network to see what was going on. He intercepted all the traffic on his network and realised there was something strange in the network. Playdo’s Boys, a server which is hosted by Rohit, was using the networking to sell child pornography. He printed out all his emails, files and child pornography photographs physically, and blackmails him that he has 100T of child pornography to his 400 users, so Rohit couldn’t call the police on him even if he wanted to. Elliot then says, whoever is control of the exit nodes, is also in control of the traffic Mr. Robot partly broke the law, but, he did it in person, he made sure to include the current time and the location of his anonymous tip (and the police is now aware of the coffee shop’s scandalous activities). Rohit then gets arrested and the scene closes.

                <h1>Analysis</h1>
                <p>From the situation explained above, it is evident that this was a Man-in-the-middle (MITM) attack, where a hacker puts himself in the conversation between a user and an application to eavesdrop by impersonating one of the parties so there is no detection of unordinary activity. Once Elliot (the hacker) was in the network, he found that the cafe owner used The Onion Router (Tor) which is an open-source software for enabling anonymous communication, to share child pornography with other clients on the dark web.</p>
                </p>
                <h2>The Onion Router (Tor)</h2>
                <p>The name is self-explanatory for how this network functions. Like an onion, there are multiple layers until you can reach the core, it is similar in this context. A message will be encrypted in multiple layers, and will be required to be decrypted at each destination, technically called a node. The contents of the original message is kept hidden until it is transferred to the destination node, also called the exit node, and it will then decrypt and reveal the message contents. A weakness identified in the Tor network architecture, lies in the exit node when decrypting the final layer and message. If the exit node is compromised, and it controlled by an attacker, then all the raw data in the message will be exposed and the entry node (originator of the message) will be exposed as well. This breaks the anonymity of Tor and is a critical flaw in the network architecture. As Elliot said in the episode as well, once I have control of the exit nodes, I have control to the entire network - he wasn’t joking, and that proves that this show may genuinely demonstrate and use realistic situations and terminologies in real life! Very exciting.</p>
                <h2>Potential Solutions / Preventative Actions</h2>
                <p>Downtown Portland - Floyd’s Coffee (https://www.youtube.com/watch?v=cPD0ViXvX_E&ab_channel=KPTVFOX12Oregon), a live news report was explaining how a cafe Wi-Fi network got hacked, owner realised it was getting slow, and got an IT expert to investigate. The hacker had changed their passwords, and their video security footage.

There is no actual method for Tor to combat the compromised exit root node issue. That is a known weakness of the network and there has been no current findings on how to fix it. However, generally speaking, for public places like cafe’s and restaurants, there are proven methods to prevent this from network breaches from happening. 

Have 2 Wi-Fi networks:

1. Guest Wi-Fi, access to internet only, not the rest of the systems in the cafe
2. Your own private Wi-Fi, which is used for your systems

Other general advice:

- Make sure site is encrypted
- Purchase a VPN, will launch an encrypted network

The reason why it is recommended to encrypt your network, whether or not it is public or private is because there is the risk of endangering transferred data. The methodology behind encrypting is that it can only be decoded or decrypt by trusted parties. This helps to protect private information and sensitive data, so that unauthorised people are not able to gain access (Kohout 2016) like what we saw in Rohit’s situation when Elliot hacked into an unencrypted network. If the network was encrypted, it would have definitely made it a lot harder for Elliot to hack into, so that should always have been the first step taken.

Given this first scene, it is actually quite realistic and this can happen easily to cafe’s and other public places with Wi-Fi which you would expect to be easily accessible and harmless.</p>
            </div>
        </>
    );
}
export default Cafe;
