import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function Car() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                <p>Elliot plugs an USB into his computer, terminal opens up and it runs a lot of digits, then it starts the car. </p>
                <h1>Analysis</h1>
                <p>This was shocking to me. I couldn’t believe it at first and had to rewatch it multiple times. How on earth does a USB going from the computer to the wires in the car somehow start it? There is no pin system as far as I’m aware.

Looking at freeCodeCamp, there is a post all about how to hack a car by Kenny Kuchera. He states that a car is a network, and it consists of multiple computers to control the engine, trasmission, windows etc. (Kuchera 2017). These computers are called electronic control units (ECU) and communicate with each other over a network. Each button sends a command over the network and then the action is executed.

Most cars use a Controller Area Network (CAN bus) to allow the components communicate with each other without a host computer. What you can do to hack the car is to receive and transmit CAN packets so that you can control the car. To do this you can use hardware with the correct software installed, like the can-utils package. Running command line code can now send packets to the ECU to start the car, and it just starts - simple as that.

I would have never imagined a car could just be hacked like that, let alone, the car being a network of components.</p>
                <h2>Potential Solutions / Preventative Actions</h2>
                <p>To help secure your car from being hacked, there are multiple factors to keep in mind. Firstly, always keep your car locked when you exit your car. Yes, it can still be lockpicked, but at least it will create more obstacles for the hacker if they wanted to get into your car. The reason why Elliot could hack the car was because he saw the lady didn’t lock her car, so he could just hop in.

Always have your car’s Wi-Fi and Bluetooth turned off. Bluetooth traces are really easy nowadays with applications like BLE scanners, which are free on the app store on phones. It will help scan what bluetooth connections are available around you, and it will allow the hacker to track IP addresses and eventually hack into your car that way.

Another method is to have a mechanic install a physical steering wheel lock, so that even if the software was hacked, like what Kuchera explored above, the physical lock will stop the CAN bus from allowing the ECU to unlock the components and let the car be controlled completely.

In a situation where your car is modern, there is the risk of key fob attacks, where relay gadgets can be purchased online and can open your car as if it was your key. The relay gadgets work by scanning the area for a key fob signal, which is your key. It will that transmit that signal closer to the car, prompting it to open since from the car’s perspective all it understands is the key’s signal to open and lock the car (Komando 2023). To prevent key fob attacks, it will require some signal-blocking method. Putting your keys near on your fridge or some metal surface, it will block the signal with all the layers of metal and the relay gadget will be ineffective. Another method would be to keep your keys in a special holder called a faraday pouch which are stupidly cheap nowadays, and they help to protect the key fob’s signals from being intercepted and manipulated.</p>
            </div>
        </>
    );
}
export default Car;
