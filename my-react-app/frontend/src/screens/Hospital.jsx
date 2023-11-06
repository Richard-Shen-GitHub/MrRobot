import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function Hospital() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                <p>A really nice quote from the scene
                <br></br>
                <br></br>
                    <b>Debugging is understanding how the bug was there, and how it came in. It is not about fixing the bug</b>
                <br></br>
                <br></br>
Elliot was sent to hospital after an injury. Krista (therapist) came to visit him and was worried that he was abusing drugs again (morphine). He had to promise to take a drug test, and she would continue seeing him if his tests came out negative.

He said sure (even though he was abusing morphine daily). Reason was because he could hack the IT department of a hospital. He knew that the entire IT department was just 1 person, and had a super low budget - 7k dollars for the year to protect the network of the hospital. He was able to hack into the network, realise that they were using outdated servers, software that runs on Windows 98, which you can easily hack into it. He the modified the results of his drug test and could present that to Krista.</p>
                <h1>Analysis</h1>
                <p>Hacking into the hospital network is not hard according to Elliot, however, this is under the assumption that the hospital does not care about their cybersecurity. What was interesting was the specific mention about Windows 98 and how easy it was to be hacked into.</p>
                <h2>Windows 98 vulnerabilities</h2>
                <p>Upon researching, Windows 98 allows users to create shared files without passwords and is therefore, easy for anyone to access if they are able to access the network (CNET 1998). There is actually a popup when a user is trying to create a shared file with a potential security problem alert. The main issue which I believe though is just the fact that the operating system is outdated. Microsoft is no longer supporting Windows 98. It is also announced by Microsoft themselves that it is no longer supported, and that means that it will definitely not be up to date with the best security practices and not have the security patches required for its safety. Furthermore, a lot of modern tools and applications won’t work anyways since they are not expected to be run on such an old operating system.

This is my critique about the scene, the fact that a hospital, who holds a lot of private information about patient data, health conditions and issues which they would want to keep secret - it is way too exposed. It does not seem realistic for a hospital then, to have their systems still on the old Windows 98 operating system, and not migrated to a more recent one, even Windows 2012 would be more believable (it is almost decommissioned now). However, besides the fact that the situation is unrealistic, if the hospital was using Windows 98, then yes, it would have been very easy for Elliot to hack into and manipulate his own drug test results since the file share without passwords mentioned earlier is a key vulnerability of Windows 98.</p>
                <h2>Potential Solutions / Preventative Actions</h2>
                <p>As mentioned above, migrating the system to a more recent operating system which is actively being supported by the vendor, like Microsoft, would be the first step to take. Migrating of server versions is a pain, for example, from Windows 98 to Windows 2016 will be a crazy jump, however, it is critical and urgent since the entire hospital’s patient database is reliant on a cyber secure system.</p>
            </div>
        </>
    );
}
export default Hospital;
