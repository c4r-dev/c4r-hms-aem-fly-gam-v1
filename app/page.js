"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Raven1 from './assets/raven-1-clouds-1.svg';

export default function Home() {

  const router = useRouter();

  const startActivity = () => {
    router.push(`/topicSelection`);
  }

  return (
    <>
      <div>CONFIRMATION BIAS</div>
      <div>Flying Game</div>
      <p>Pick what you decide is the most relevant or useful strategy for
        each obstacle you face to successfully masking and completing
        your experiment.
      </p>

      <div className="activity-start-button-footer">
        <button onClick={startActivity}>Start Activity</button>
      </div>

      <div>
        <Image
          priority
          src={Raven1}
          alt="Follow us at c4r.io"
        />
      </div>
    </>
  );
}
