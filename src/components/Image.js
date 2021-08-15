import React from 'react';
import { useState } from "react";
import firebase from '../lib/Firebase';

const storage = firebase.storage();
const storageRef = storage.ref();
const folder = "/main-site-assets/";

export default function Image({ path, alt = "" }) {
  if (!path) throw new Error('path prop required.');

  const [src, setSrc] = useState('');

  const assetRef = storageRef.child(`${folder}${path}`);

  async function getImage() {
    const url = await assetRef.getDownloadURL();
    setSrc(url);
  }

  getImage();

  if (!!src) {
    return <img src={src} alt={alt} />;
  } else {
    return <div />
  }
};
