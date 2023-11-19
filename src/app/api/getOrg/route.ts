import { getOrgInput, getOrgResponse } from "@/types/types";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  // Looks up the details for the ProjectIDs provided.
  const body = await request.json();

  let response:getOrgResponse[] = []

  // Dummy 'lookups'
  for (const ID of body.OrgIDs) {
    response.push({
        ID: ID,
        Name: `Organization ${ID}`,
        Desc: `Organization ${ID} description here`
    })
  }

  return NextResponse.json({ data: response }, { status: 200 });
}
