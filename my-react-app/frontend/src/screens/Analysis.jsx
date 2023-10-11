import * as React from 'react';
import ResponsiveAppBar from '../components/Navbar';
import ActionAreaCard from '../components/Card';

function Analysis() {
    React.useEffect(() => {
        const render = async () => {
            const response = await fetch('http://127.0.0.1:5000/get_all_analysis', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            })
            const data = await response.json();

            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data)
            }
        }
        render();
    }, []);


    return (
        <>
            <ResponsiveAppBar/>
            <div className='analysis-header'>
                <h1>Welcome to the analysis of Mr Robot...</h1>
                <div className='analysis-body'>
                    <h2>Hi</h2>
                    <ActionAreaCard></ActionAreaCard>
                </div>
            </div>
        </>
    );
}
export default Analysis;
