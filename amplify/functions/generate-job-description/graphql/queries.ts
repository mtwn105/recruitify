/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCompnayProfile = /* GraphQL */ `query GetCompnayProfile($id: ID!) {
  getCompnayProfile(id: $id) {
    createdAt
    description
    id
    industry
    logo
    name
    updatedAt
    userId
    website
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCompnayProfileQueryVariables,
  APITypes.GetCompnayProfileQuery
>;
export const getJob = /* GraphQL */ `query GetJob($id: ID!) {
  getJob(id: $id) {
    city
    companyId
    country
    createdAt
    description
    domain
    id
    isRemote
    minExperience
    salary
    skills
    title
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetJobQueryVariables, APITypes.GetJobQuery>;
export const getJobApplications = /* GraphQL */ `query GetJobApplications($id: ID!) {
  getJobApplications(id: $id) {
    companyId
    createdAt
    id
    jobId
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobApplicationsQueryVariables,
  APITypes.GetJobApplicationsQuery
>;
export const getJobNotifications = /* GraphQL */ `query GetJobNotifications($id: ID!) {
  getJobNotifications(id: $id) {
    companyId
    createdAt
    id
    jobId
    jobTitle
    status
    updatedAt
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetJobNotificationsQueryVariables,
  APITypes.GetJobNotificationsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    createdAt
    email
    id
    name
    phone
    type
    updatedAt
    username
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    city
    country
    createdAt
    currentOrg
    currentRole
    domain
    education
    expectedSalary
    experience
    github
    id
    linkedin
    name
    resume
    resumeFileName
    skills
    updatedAt
    userId
    website
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listCompnayProfiles = /* GraphQL */ `query ListCompnayProfiles(
  $filter: ModelCompnayProfileFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCompnayProfiles(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      description
      id
      industry
      logo
      name
      updatedAt
      userId
      website
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompnayProfilesQueryVariables,
  APITypes.ListCompnayProfilesQuery
>;
export const listJobApplications = /* GraphQL */ `query ListJobApplications(
  $filter: ModelJobApplicationsFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listJobApplications(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      companyId
      createdAt
      id
      jobId
      status
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobApplicationsQueryVariables,
  APITypes.ListJobApplicationsQuery
>;
export const listJobNotifications = /* GraphQL */ `query ListJobNotifications(
  $filter: ModelJobNotificationsFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listJobNotifications(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      companyId
      createdAt
      id
      jobId
      jobTitle
      status
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListJobNotificationsQueryVariables,
  APITypes.ListJobNotificationsQuery
>;
export const listJobs = /* GraphQL */ `query ListJobs(
  $filter: ModelJobFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listJobs(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      city
      companyId
      country
      createdAt
      description
      domain
      id
      isRemote
      minExperience
      salary
      skills
      title
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListJobsQueryVariables, APITypes.ListJobsQuery>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserProfiles(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      city
      country
      createdAt
      currentOrg
      currentRole
      domain
      education
      expectedSalary
      experience
      github
      id
      linkedin
      name
      resume
      resumeFileName
      skills
      updatedAt
      userId
      website
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      id
      name
      phone
      type
      updatedAt
      username
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
