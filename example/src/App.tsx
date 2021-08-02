import React, { useState } from 'react';
import YouTubeIframe, { Commands } from 'react-yotube-iframe';

import './App.css';

function App() {
    const [sampleTwo, setSampleTwo] = useState<Commands>(Commands.pause);

    return (
        <div className='App'>
            <div className='sample'>
                <h2>Simple</h2>
                <YouTubeIframe videoId='44XYEeD1A1U' />
            </div>
            <div className='sample'>
                <h2>With actions</h2>
                <div className='with-mask'>
                    <div className='mask'/>

                    <YouTubeIframe
                        command={sampleTwo}
                        videoId='44XYEeD1A1U'
                    />
                </div>
                <div className='actions'>
                    <button onClick={() => setSampleTwo(Commands.play)}>play</button>
                    <button onClick={() => setSampleTwo(Commands.pause)}>pause</button>
                    <button onClick={() => setSampleTwo(Commands.mute)}>mute</button>
                    <button onClick={() => setSampleTwo(Commands.unMute)}>unmute</button>
                    <button onClick={() => setSampleTwo(Commands.stop)}>stop</button>
                </div>
            </div>
        </div>
    );
}

export default App;
