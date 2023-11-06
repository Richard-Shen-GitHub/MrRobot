import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import COMP6441_Cafe from '../COMP6441_Cafe.jpg';
import COMP6441_Social_Engineering from '../COMP6441_Social_Engineering.jpg';
import COMP6441_Tape_Backups from '../COMP6441_Tape_Backups.jpeg';
import COMP6441_Hospital from '../COMP6441_Hospital.avif';
import COMP6441_DDOS from '../COMP6441_DDOS.jpg';
import COMP6441_Prison from '../COMP6441_Prison.jpg';
import COMP6441_Car from '../COMP6441_Car.jpg';
import COMP6441_References from '../COMP6441_References.jpg';

function Home() {
    // Sacking the dynamic navigating and HTTP requests for data, whole website will be static and hardcoded
    // React.useEffect(() => {
    //     const render = async () => {
    //         const response = await fetch('http://127.0.0.1:5000/get_all_analysis', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //         })
    //         const data = await response.json();

    //         if (data.error) {
    //             console.log(data.error)
    //         } else {
    //             console.log(data)
    //         }
    //     }
    //     render();
    // }, []);

    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-header'>
                <h1>Welcome to the analysis of Mr Robot...</h1>
                <div className='analysis-body'>
                    <p>This Something Awesome project consists of a detailed analysis of the drama thriller television series ‘Mr. Robot’. It will assess how realistic the cybersecurity content is in throughout the series as I will provide my own opinions and judgement. Further, it will provide detail and breakdown each cybersecurity scene with context about how everything works and whether it can happen in real life. Additionally, I will also provide potential mitigating methods and preventative actions which can be taken for an average person to understand and implement in their lives to avoid hackers from intruding their lives.</p>
                    <div className='analysis-container'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/cafe">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_Cafe}
                                alt="cafe"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Hacking a cafe’s public internet network
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Elliot Alderson (main character and hacker majority of the show) sits in front of a cafe owner, Ron, (Ron’s Coffee). Elliot exposes Ron’s real name is Rohit Mehta, when he started his first coffee shop 6 years ago which caused him to change his name to Ron.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/social_engineering">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_Social_Engineering}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hacking someone’s personal life (social engineering)
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elliot trying to hack his Psychotherapists (Krista) current boyfriend (Michael), who he wants to know more about.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/ddos">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_DDOS}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Allsafe Cybersecurity gets hacked via DOS
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Allsafe Cybersecurity is the firm which Elliot is working at as a cybersecurity engineer, it specialises in protecting large corporations from cyber attacks, but they are currently being attacked in this scene.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/hospital">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_Hospital}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hacking a hospital database and system
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elliot was sent to hospital after an injury. Krista (therapist) came to visit him and was worried that he was abusing drugs again (morphine). He had to promise to take a drug test, and she would continue seeing him if his tests came out negative.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/tape_backups">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_Tape_Backups}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Destroying a company’s tape data backups
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elliot is planning on destroying E-Corp’s (a client of Allsafe Cybersecurity) entire database in order to wipe out the entirety of America’s debt, as the rich are getting richer while the poor are getting poorer.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/car">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_Car}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hacking into a Car
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elliot plugs an USB into his computer, terminal opens up and it runs a lot of digits, then it starts the car.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/prison">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_Prison}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Hacking into a Prison
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elliot is in a situation where he has to break someone out of jail. To do this, he plans on hacking into the prison’s network and opening all the cell doors so that there is mass chaos in the yard so all the prisoners retaliate and try escape.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href="/references">
                                <CardMedia
                                component="img"
                                height="140"
                                image={COMP6441_References}
                                alt="cafe"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    All my References
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Enjoy looking if you do. All the references which I had used throughout my analysis. Using Harvard style referencing as guided by UNSW.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;

