import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

import Header from "../components/Header.tsx"
import Card from "../components/Card.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Color Palet</title>
        <link rel="stylesheet" href="/Css/main.css"></link>
      </Head>
      <Header></Header>
      <div className={"content"}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </>
  );
}