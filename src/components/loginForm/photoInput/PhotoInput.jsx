import './PhotoInput.css'
import profilePhoto from '../../../assets/USER_LOGGED_NO_PFP_ICON.png'
import { useState } from "react";

const PhotoInput = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };


    return (
        <div className="fileContainer">
            <input
                type="file"
                id="fileInput"
                className="fileInput"
                accept="image/*"
                onChange={handleFileChange}
            />

            <label htmlFor="fileInput" className="fileButton">
                <img src={profilePhoto} height={50} />
            </label>
        </div>
    );
};

export default PhotoInput;
