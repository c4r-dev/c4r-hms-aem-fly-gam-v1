"use client";

import Image from "next/image";

import Raven1 from "../assets/raven-1-clouds-2.svg";

import { useRouter } from "next/navigation";

export default function BioMedEng() {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/beQuestion1');

    };

    return (
        <div className="topic-selection-container">
            <div className="activity-header">
                Flying Game
            </div>

            <div className="center-text">
                <br></br><br></br>
                <h1>BIOMEDICAL ENGINEERING</h1>
                <h3>A team of biomedical engineers is developing
                    a new medical device for diagnosing a rare
                    genetic disorder. They conduct a clinical trial
                    involving patients with the disorder and healthy
                    controls.
                </h3>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="select-topic-button">
                    <button type="submit">START FLYING</button>
                </div>
            </form>

            <div>
                <Image
                    priority
                    src={Raven1}
                    alt="Follow us at c4r.io"
                />
            </div>
        </div>
    );
}