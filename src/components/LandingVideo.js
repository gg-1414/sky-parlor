import React from 'react';
import { useState } from "react";
import firebase from '../lib/Firebase';

const storage = firebase.storage();
const storageRef = storage.ref();
const folder = "/main-site-assets/";

export default function LandingVideo() {
  const path = "sky-bg-spinning-logo.mp4";

  const [src, setSrc] = useState('');
  const [loading, setLoading] = useState(true);

  const assetRef = storageRef.child(`${folder}${path}`);

  async function getVideo() {
    const url = await assetRef.getDownloadURL();
    setSrc(url);
    setLoading(false);
  }

  getVideo();

  if (!loading && !!src) {
    return (
      <video id="landing-video" className="object-cover m-0 h-screen w-full" autoPlay loop muted playsInline poster={'/assets/sky-bg-spinning-logo.png'}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <img
      src={'/assets/sky-bg-spinning-logo.png'}
      alt="sky with sky parlor logo"
      className="object-cover m-0 h-screen w-full"
    />
  );
};
