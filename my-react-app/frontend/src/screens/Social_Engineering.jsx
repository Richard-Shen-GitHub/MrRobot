import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';

function Social_Engineering() {
    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-text'>
                <h1>Context</h1>
                <p>He’s trying to hack his Psychotherapists (Krista) current boyfriend (Michael), who he wants to know more about. Sees Michael go into a cab, Elliot then calls the cab company saying he left his keys in a cab, 56Y2 which is where he went into… finds out it is heading to 306 Hawkfawn St currently, so now he goes after it. He then bumps into him, knows where he lives.

Elliot asks to borrow Michael’s phone because his own phone died and he wants to call his mum. He then goes into his contacts, calls himself, so now he knows his number. Then deletes his own number from the phone’s call history.

The next day, Elliot calls the number, saying he is a representative from Michael’s bank, and says his account has been compromised. He then asks for all these private information to verify his identify, gets his home address, and secret questions, like favourite baseball team and pet’s name. Then hangs up.

He inputs this information into a dictionary brute force attack, and tries to get his password. Comes out with his password, which was a mix of his favourite artist and the year he was born in.

In the next scene, Elliot goes up to him in person, and confronts him. He blackmails him to break up with Krista, he got digital proof that he cheated on his current wife with 7 different women, 1 of the escorts was 15 years old, he made that up and lied, but it was close enough. He agrees to the deal, and forced him to tell her the truth that he was just using her, not truly loving her and wanting to start a family. Elliot also steals his dog… Flipper… funny.

He stores and saves everything on disk, and delete it from his computer.</p>
                <h1>Analysis</h1>
                <p>Here we can see a very realistic situation where Elliot is demonstrating social engineering at its finest - trying to get all the information about Michael so that he can blackmail him into breaking up with Krista, which is his end goal. Social engineering is about the art of manipulation, and this falls under the social engineering in IT category as it is using IT technologies to support psychological manipulation techniques to achieve a goal outside the IT realm (European Union Agency for Cybersecurity 2023).

What I found fascinating about this scene is how realistic the situation is, it is very easy for someone to stalk you getting into the cab, and since there is the cab number on the side of the car, it can be easily tracked down. The hacking of the password is something which should be raised awareness as well. I had never thought about this, but using personal information to create a password is dangerous. This is the fundamentals of how social engineering is made easy. Hackers get essentially a free clue to what your password could be, and they can take educated guesses about passwords (My1Login 2015) - even more commonly and dangerously, they feed it through a program or algorithm which will then crack the password. Another issue which isn’t specifically noted, but is a common problem in real life, is that someone’s personal password will be reused for many different purposes, such as their bank account, investment account, social media, work. This poses an even bigger threat as a hacker can essentially get access to every single piece of your personal information with the 1 cracked password.</p>
                <h2>Potential Solutions / Preventative Actions</h2>
                <p>With social engineering, the preventative actions to be taken to break the loop is to think about your own digital footprint. However, this is very difficult. Given the situation above, let’s say someone goes up to you to ask your phone because they need to call someone since their phone died, it is hard to say no because it would show that you are selfish and rude. However, to protect your own personal information it is necessary and you could proceed by explaining you are very cautious about giving away your phone and phone number like that.

On the other hand, protecting your password is a much easier thing to do with less psychological warfare involved. The strongest and flawless password is by using a random password generator, which combines a combination of characters, letters and symbols in a randomised method to create the password. This will leave no personal information in the password so it will be extremely difficult for a hacker to crack. A combination of randomised characters with no context and a long password, longer than 12 characters would be the most safe - like what the Society for Worldwide Interbank Financial Telecommunication (SWIFT) recommends. Your password needs to be at least 12 characters long (SWIFT 2023) and it cannot contain any information relevant to your name or date of birth. The reason I reference SWIFT is because it is one of the most critical elements in the settlements of financial transactions between parties and custodians, so their cybersecurity is always constantly being reviewed to ensure best practice and security within the finance industry.

Regarding the phone call which Elliot acted as a representative from the bank, Michael was suspicious when Elliot was asking the security questions, as he claimed that he has never been required to provide them over call. As soon as he realised this, he should have stopped and questioned the legitimacy of the phone call. A simple action could have been to physically go into the bank to confirm that this was true, this would have completely stopped the social engineering in its tracks. The best way to prevent social engineering from happening to you beyond the IT realm is to just think realistically, is this what would be happening, is this what they would say, is this what they would ask etc. It is hard during situations like a bank calling you that your entire account has been compromised, and that is all your savings, but you need to be switched on and analytical, take some time to assess whether the situation is realistic or not (Kaspersky 2023)</p>
            </div>
        </>
    );
}
export default Social_Engineering;
