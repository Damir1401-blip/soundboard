import './MusicButton.css'
import { useRef } from 'react';

function MusicButton(props) {
    const musics = useRef([]);
    const buttonRef = useRef(null);

    const handleClick = () => {
        if (musics.current.length > 0) {
            musics.current.forEach((audio) => {
                audio.pause();
                audio.currentTime = 0;
            });
            musics.current = [];
            if (buttonRef.current) {
                buttonRef.current.style.backgroundColor = 'blue';
                buttonRef.current.textContent = 'Play';
            }
        } else {
            const audio = new Audio(`${props.link}`);
            musics.current.push(audio);
            audio.play().catch(err => console.log(err));
            if (buttonRef.current) {
                buttonRef.current.style.backgroundColor = 'red';
                buttonRef.current.textContent = 'Stop';
            }
        }
    };

    return (
        <div className="music-button">
            <img width="150" height="150" src={props.img} alt="Music" /> <br />
            <button
                className="play"
                ref={buttonRef}
                onClick={handleClick}
            >
                Play
            </button>
        </div>
    );
}

export default MusicButton