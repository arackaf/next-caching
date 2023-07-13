import { getA, getB, getC } from "@/app/services";
import { Content } from "./content";

export default async function Page(props: any) {
  //const userId = props.params.id;
  //console.log({ userId });

  const a = await getA();
  const b = await getB();
  const c = await getC();

  return <Content a={a} b={b} c={c} />;
}
