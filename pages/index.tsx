import Head from "next/head";
import React from 'react';
import { Page_1 } from "../components/templates/Page_1/Page_1";
import Link from "next/link";

// For redux stuff.
import { IStoreState } from "../stores/IStoreState";

export default function Home() {

  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <Link href="/hoge"><a>Hoge ページに遷移！！！！</a></Link>
    </>
  )
}

declare module 'react-redux' {
  interface DefaultRootState extends IStoreState {}
}
