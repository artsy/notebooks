import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Runtime, Inspector } from '@observablehq/runtime';
import React, {useEffect, useRef, useState} from 'react';
// import notebook from '../hello-world';

import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/Notebook'),
    { ssr: false }
  )

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Artsy ObservableHQ Notebooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicComponentWithNoSSR />
      </main>
    </div>
  )
}