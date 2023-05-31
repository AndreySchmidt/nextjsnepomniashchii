import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headersList = headers();
  const type = headersList.get("Content-type");

  const cookiesList = cookies();
  const cookiesParam = cookiesList.get("cookiesParam")?.value;

  // here delete post logic

  redirect("/blog");
  //   return NextResponse.json({ id });
}
