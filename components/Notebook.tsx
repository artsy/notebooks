import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Runtime, Inspector } from '@observablehq/runtime';
import React, {useEffect, useRef, useState} from 'react';

export default function Notebook() {
    const ref = useRef();

    useEffect(() => {
      async function loadNotebook() {
        const runtime = new Runtime();
        // TODO: This doesn't work.
        // const notebook = (await import('http://localhost:3000/api/notebook')).default
        const notebook = (await import('https://api.observablehq.com/@anandaroop/hello-world.js?v=3')).default
        runtime.module(notebook, Inspector.into(ref.current));
      }
      loadNotebook()
    }, []);

    return (
      <div className={styles.container}>
        <Head>
          <title>Artsy ObservableHQ Notebooks</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div ref={ref} />
        </main>
      </div>
    )
  }