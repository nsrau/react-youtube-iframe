import React, { useEffect, useRef } from 'react';

export enum Commands {
    play,
    pause,
    stop,
    mute,
    unMute
}

type Props = {
    videoId: string
    command?: Commands
}

const YouTubeIframe = (props: Props): JSX.Element => {
    const { videoId, command } = props;
    const iframeVideoRef = useRef<HTMLIFrameElement | null>(null);

    const sendCommand = (func: string, args?: any) => {
        const iframe = iframeVideoRef.current;
        if (iframe) {
            const src = iframe.getAttribute('src');
            if (src) {
                if (iframe.contentWindow) {
                    iframe.contentWindow.postMessage(JSON.stringify({
                        'event': 'command',
                        'func': func,
                        'args': args || []
                    }), '*');
                }
            }
        }
    };

    useEffect(() => {
        switch (command) {
            case Commands.play:
                sendCommand('playVideo');
                break;
            case Commands.stop:
                sendCommand('stopVideo');
                break;
            case Commands.pause:
                sendCommand('pauseVideo');
                break;
            case Commands.mute:
                sendCommand('mute');
                break;
            case Commands.unMute:
                sendCommand('unMute');
                break;
        }
    }, [command]);

    return (
        <iframe
            title={videoId}
            ref={iframeVideoRef}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&enablejsapi=1&controls=0`}
        />
    );
};

export default YouTubeIframe;