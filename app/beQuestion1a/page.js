"use client";

import React, { useState } from "react";

import Image from "next/image";

import CloudLeft from '../assets/bequestion1a-left.svg'
import CloudRight from '../assets/bequestion1a-right.svg'

import { useRouter } from "next/navigation";

export default function BEQuestion1a() {

    const router = useRouter();

    const onClickCA1 = async (e) => {
        e.preventDefault();
        router.push('/beQuestion1aCA1');
    };

    const onClickSC1 = async (e) => {
        e.preventDefault();
        router.push('/beQuestion1aCA1');
    };

    return (
        <>
            <div className="activity-header">
                Flying Game
            </div>

            <div>
                <br></br><br></br>
                <div className="question-header">
                    OWNERSHIP ISSUES
                </div>
                <br></br><br></br>
                <div style={{ fontSize: 18, fontFamily: 'GeneralSands-Semibold', fontWeight: 600 }}>The lead principal investigator (PI) believes that if other
                    researchers contribute to the experiment, it will lead to
                    ownership or authorship issues. They worry about difficulties in
                    attributing credit for the work conducted.
                </div>
            </div>

            <div >
                <button className="cloud-button" onClick={onClickCA1}>
                    <Image
                        priority={true}
                        src={CloudLeft}
                        alt="Follow us at c4r.io"
                        width={650}
                        height={650}
                    />
                </button>

                <button className="cloud-button" onClick={onClickSC1}>
                    <Image
                        priority={true}
                        src={CloudRight}
                        alt="Follow us at c4r.io"
                        width={650}
                        height={650}
                    />
                </button>
            </div>
        </>

    );
}