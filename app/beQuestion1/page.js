"use client";

import { useRouter } from "next/navigation";

export default function BEQuestion1() {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/beQuestion1a');

    };

    return (
        <div className="topic-selection-container">
            <div className="activity-header">
                Flying Game
            </div>

            <div className="center-text">
                <br></br><br></br>
                <h1>OWNERSHIP ISSUES</h1>
                <h3>The lead principal investigator (PI) believes that if other 
                    researchers contribute to the experiment, it will lead to 
                    ownership or authorship issues. They worry about difficulties in 
                    attributing credit for the work conducted.
                </h3>
            </div>
           
            <form onSubmit={handleSubmit}>
                <div className="select-topic-button">
                    <button type="submit">CONTINUE</button>
                </div>
            </form>


        </div>
    );
}