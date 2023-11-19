import { getTestsInput, getTestsResponse } from "@/types/types";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    // Looks up the details for the ProjectIDs provided.
    const body = await request.json();

    let response: getTestsResponse = {
        Tests: [
            {
                ID: 123,
                Name: 'Test1',
                Status: 'Pass',
                Extra: 'Extra data, might be JSON'
            },
            {
                ID: 124,
                Name: 'Test2',
                Status: 'Pass',
                Extra: 'Extra data, might be JSON'
            },
            {
                ID: 222,
                Name: 'Test3',
                Status: 'Fail',
                Extra: 'Extra data, might be JSON'
            },
        ]
    }

    return NextResponse.json({ data: response }, { status: 200 });
}
