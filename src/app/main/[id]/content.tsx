"use client";

import { FC } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { invalidateA, invalidateAll, invalidateB, invalidateC } from "@/app/actions";

export const Content: FC<{ a: any; b: any; c: any }> = (props) => {
  const params = useParams();
  const path = usePathname();

  return (
    <div className="p-12">
      <div className="flex flex-col gap-16">
        <div className="flex gap-5">
          {path.endsWith("page1") ? <span>Page 1</span> : <Link href={`/main/${params.id}/page1`}>Page 1</Link>}
          {path.endsWith("page2") ? <span>Page 2</span> : <Link href={`/main/${params.id}/page2`}>Page 2</Link>}
        </div>

        <div className="flex flex-col gap-9">
          <span>a: {JSON.stringify(props.a)}</span>
          <span>b: {JSON.stringify(props.b)}</span>
          <span>c: {JSON.stringify(props.c)}</span>
        </div>

        <div className="flex gap-5">
          <button onClick={invalidateA}>Invalidate A</button>
          <button onClick={invalidateB}>Invalidate B</button>
          <button onClick={invalidateC}>Invalidate C</button>
          <button onClick={invalidateAll}>Invalidate All</button>
        </div>
      </div>
    </div>
  );
};
