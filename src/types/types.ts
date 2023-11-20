export type userInfoResp = {
    userID: string,
    firstName: string,
    lastName: string,
    email: string,

    currentOrg: number,
    currentProject: number,

    orgs: number[],
    projects: number[]
}

export type getProjectInput = {
    ProjectIDs: number[]
};

export type getProjectResponse = {
    ID: number,
    Name: string,
    Desc: string
};

export type getOrgInput = {
    OrgIDs: number[]
};

export type getOrgResponse = {
    ID: number,
    Name: string,
    Desc: string
};

export type getTestsInput = {
    ProjectID: number
};

export type testCase = {
    ID: number,
    Name: string,
    Status: string,
    Extra: string
};

export type getTestsResponse = {
    Tests:  testCase[]
}