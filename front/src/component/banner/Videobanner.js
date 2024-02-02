import React from 'react'

function Mainvideo() {
    const videoSy = {
        width: "100%",
        height: "auto",
        objectFit: "fill"
    };
    return (
        <>
            <video style={videoSy} autoPlay muted loop>
                <source src="/video/aveda.mp4" type="video/mp4" />
            </video>
        </>
    )
}

export default Mainvideo
