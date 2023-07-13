import { getA, getB, getC } from "@/app/services";
import { Content } from "../content";

export default async function Page(props: any) {
  const userId = props.params.id;

  const a = await getA(userId);
  const b = await getB(userId);
  const c = await getC(userId);

  return <Content a={a} b={b} c={c} />;
}
