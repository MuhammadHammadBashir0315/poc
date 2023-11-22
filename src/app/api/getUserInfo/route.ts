import { NextResponse } from "next/server";
import { userInfoResp } from "@/types/types";

export async function GET(request: Request) {
  // Looks up user data for the currently logged in user.
  // This would call a real API to get this information.

  // Dummy user data
    const user:userInfoResp = {
        userID: 'testuser_123456789',
        firstName: 'Test',
        lastName: 'User',
        email: 'testuser@test.com',

        orgs: [1, 2, 4, 5], // List of organizationIDs
    }

  return NextResponse.json({ data: user }, { status: 200 });
}
