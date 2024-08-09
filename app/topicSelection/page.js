"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import Raven1 from "../assets/feedback-button-1.svg";
import Raven2 from "../assets/feedback-button-2.svg";
import Raven3 from "../assets/feedback-button-3.svg";

export default function TopicSelection() {
    const router = useRouter();

    const [rqtool, setRQTool] = useState("");

    const onValueChange = (event) => {
        setRQTool(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!rqtool) {
            alert("Selection is required to Continue.");
            return;
        }

        router.push(`/startRaven?rqtool=${rqtool}`);

    };

    return (
        <div className="topic-selection-container">
            <div className="activity-header">
                Flying Game
            </div>

            <div>
                <br></br><br></br>
                <h1 className="center-text">What research area interest you most?</h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                <div className="flex-container">
                    <input
                        type="radio"
                        name="rqtoolanswer"
                        id="rqtoolbe"
                        value={"be"}
                        checked={rqtool === "be"}
                        onChange={onValueChange}
                        className="topic-radio-input"
                    />
                    <label htmlFor="rqtoolbe">
                        <div
                            className={`topic-square biomedical-engineering-square ${rqtool === "be" ? "selected-style" : ""
                                }`}
                        >
                            BIOMEDICAL ENGINEERING
                            <h5>A team of biomedical engineers is developing
                                a new medical device for diagnosing a rare
                                genetic disorder. They conduct a clinical trial
                                involving patients with the disorder and healthy
                                controls.
                            </h5>

                        </div>
                    </label>

                    <input
                        type="radio"
                        name="rqtoolanswer"
                        id="rqtoolns"
                        value={"ns"}
                        checked={rqtool === "ns"}
                        onChange={onValueChange}
                        className="topic-radio-input"
                    />
                    <label htmlFor="rqtoolns">
                        <div
                            className={`topic-square neuro-science-square ${rqtool === "ns" ? "selected-style" : ""
                                }`}
                        >
                            NEUROSCIENCE INVESTIGATION
                            <h5>Neuroscientists are investigating the effects
                                of a new drug on memory consolidation. They conduct
                                an experiment with human participants.
                            </h5>
                        </div>
                    </label>

                    <input
                        type="radio"
                        name="rqtoolanswer"
                        id="rqtoolpi"
                        value={"pi"}
                        checked={rqtool === "pi"}
                        onChange={onValueChange}
                        className="topic-radio-input"
                    />
                    <label htmlFor="rqtoolpi">
                        <div
                            className={`topic-square pharmaceutical-industry-square ${rqtool === "pi" ? "selected-style" : ""
                                }`}
                        >
                            PHARMACEUTICAL INDUSTRY
                            <h5>A pharmaceutical company is testing a new drug for a
                                common chronic condition. They conduct a large-scale clinical
                                trial.
                            </h5>
                        </div>
                    </label>

                    <input
                        type="radio"
                        name="rqtoolanswer"
                        id="rqtoolps"
                        value={"ps"}
                        checked={rqtool === "ps"}
                        onChange={onValueChange}
                        className="topic-radio-input"
                    />
                    <label htmlFor="rqtoolps">
                        <div
                            className={`topic-square psychology-industry-square ${rqtool === "ps" ? "selected-style" : ""
                                }`}
                        >
                            PSYCHOLOGY TESTING
                            <h5>A pharmaceutical company is testing a new drug for a
                                common chronic condition. They conduct a large-scale clinical
                                trial.
                            </h5>
                        </div>
                    </label>

                </div>

                <div className="select-topic-button">
                    <button type="submit">CONTINUE</button>
                </div>
            </form>
        </div>

    );
}
