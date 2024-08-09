"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Raven1 from './assets/raven-1.svg';

export default function Home() {

  const router = useRouter();

  const startActivity = () => {
    router.push(`/topicSelection`);
  }

  return (
    <>
      <div>HOME</div>

      <div className="activity-start-button-footer">
        <button onClick={startActivity}>Start Activity</button>
      </div>

      <div>
        <Image
          priority
          src={Raven1}
          alt="Follow us at c4r.io"
          className="background-image"
        />
      </div>
    </>
  );
}
