import { Appbar } from "@/components/worker/Appbar";
import { NextTask } from "@/components/worker/NextTask";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Appbar />
      <NextTask />
    </div>
  );
}
