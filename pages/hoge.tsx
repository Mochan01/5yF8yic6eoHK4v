import Head from "next/head";
import React from 'react';
import { Page_1 } from "../components/templates/Page_1/Page_1";

// For redux stuff.
import { IStoreState } from "../stores/IStoreState";

export default function Home() {

  return (
    <>
      <Head>
        <title>hoge</title>
      </Head>
      Hoge ページ
    </>
  )
}

declare module 'react-redux' {
  interface DefaultRootState extends IStoreState {}
}
