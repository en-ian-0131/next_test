import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  return <div>Catch-all Segment： Path is /blog/{id.join("/")}</div>;
}
