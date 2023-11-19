import { NextResponse } from "next/server";
import { getProjectInput, getProjectResponse } from "@/types/types";

export async function POST(request: Request) {
  // Looks up the details for the ProjectIDs provided.
  const body:getProjectInput = await request.json();

  let response:getProjectResponse[] = []
  
  // Dummy 'lookups'
  for (const ID of body.ProjectIDs) {
    response.push({
        ID: ID,
        Name: `Project ${ID}`,
        Desc: `Project ${ID} description here`
    })
  }

  return NextResponse.json({ data: response }, { status: 200 });
}
