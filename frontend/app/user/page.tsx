"use client";
import { Appbar } from "@/components/shared/Appbar";
import { Hero } from "@/components/user/Hero";
import { Upload } from "@/components/user/Upload";
import { UploadImage } from "@/components/user/UploadImage";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
    <main>
      <Appbar />
      <Hero />
      <Upload />
    </main>
  );
}
