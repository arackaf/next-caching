//import { headers } from "next/headers";

import { getA, getB, getC } from "@/app/services";
import { Content } from "./content";

export default async function Page(props: any) {
  //const h = headers();
  //console.log(h.get("authentication"));

  const a = await getA();
  const b = await getB();
  // const resp = await fetch("http://localhost:5002/api/b", { next: { revalidate: 10, tags: ["b"] } });
  // const b = await resp.json();

  const c = await getC();

  return <Content a={a} b={b} c={c} />;
}

export const dynamic = "force-dynamic";
