import React from "react"
import '../css/Subjects.css'


const Subjects = () => {
    return (
        <div className="page-wrapper">
            <div className="page-container">
                <ul className="subject-list">
                    <li className="active">
                        <button type="button">English</button>
                    </li>
                    <li>
                        <button type="button">Chemistry</button>
                    </li>
                    <li>
                        <button type="button">Maths</button>
                    </li>
                    <li>
                        <button type="button">Geography</button>
                    </li>
                    <li>
                        <button type="button">Spanish</button>
                    </li>
                    <li>
                        <button type="button">Literature</button>
                    </li>
                    <li>
                        <button type="button">PE</button>
                    </li>
                    <li>
                        <button type="button">History</button>
                    </li>
                    <li>
                        <button type="button">Biology</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Subjects;