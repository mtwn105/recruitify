/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCompnayProfile = /* GraphQL */ `subscription OnCreateCompnayProfile(
  $filter: ModelSubscriptionCompnayProfileFilterInput
) {
  onCreateCompnayProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCompnayProfileSubscriptionVariables,
  APITypes.OnCreateCompnayProfileSubscription
>;
export const onCreateJob = /* GraphQL */ `subscription OnCreateJob($filter: ModelSubscriptionJobFilterInput) {
  onCreateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobSubscriptionVariables,
  APITypes.OnCreateJobSubscription
>;
export const onCreateJobApplications = /* GraphQL */ `subscription OnCreateJobApplications(
  $filter: ModelSubscriptionJobApplicationsFilterInput
) {
  onCreateJobApplications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobApplicationsSubscriptionVariables,
  APITypes.OnCreateJobApplicationsSubscription
>;
export const onCreateJobNotifications = /* GraphQL */ `subscription OnCreateJobNotifications(
  $filter: ModelSubscriptionJobNotificationsFilterInput
) {
  onCreateJobNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateJobNotificationsSubscriptionVariables,
  APITypes.OnCreateJobNotificationsSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onCreateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteCompnayProfile = /* GraphQL */ `subscription OnDeleteCompnayProfile(
  $filter: ModelSubscriptionCompnayProfileFilterInput
) {
  onDeleteCompnayProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCompnayProfileSubscriptionVariables,
  APITypes.OnDeleteCompnayProfileSubscription
>;
export const onDeleteJob = /* GraphQL */ `subscription OnDeleteJob($filter: ModelSubscriptionJobFilterInput) {
  onDeleteJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobSubscriptionVariables,
  APITypes.OnDeleteJobSubscription
>;
export const onDeleteJobApplications = /* GraphQL */ `subscription OnDeleteJobApplications(
  $filter: ModelSubscriptionJobApplicationsFilterInput
) {
  onDeleteJobApplications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobApplicationsSubscriptionVariables,
  APITypes.OnDeleteJobApplicationsSubscription
>;
export const onDeleteJobNotifications = /* GraphQL */ `subscription OnDeleteJobNotifications(
  $filter: ModelSubscriptionJobNotificationsFilterInput
) {
  onDeleteJobNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteJobNotificationsSubscriptionVariables,
  APITypes.OnDeleteJobNotificationsSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onDeleteUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateCompnayProfile = /* GraphQL */ `subscription OnUpdateCompnayProfile(
  $filter: ModelSubscriptionCompnayProfileFilterInput
) {
  onUpdateCompnayProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCompnayProfileSubscriptionVariables,
  APITypes.OnUpdateCompnayProfileSubscription
>;
export const onUpdateJob = /* GraphQL */ `subscription OnUpdateJob($filter: ModelSubscriptionJobFilterInput) {
  onUpdateJob(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobSubscriptionVariables,
  APITypes.OnUpdateJobSubscription
>;
export const onUpdateJobApplications = /* GraphQL */ `subscription OnUpdateJobApplications(
  $filter: ModelSubscriptionJobApplicationsFilterInput
) {
  onUpdateJobApplications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobApplicationsSubscriptionVariables,
  APITypes.OnUpdateJobApplicationsSubscription
>;
export const onUpdateJobNotifications = /* GraphQL */ `subscription OnUpdateJobNotifications(
  $filter: ModelSubscriptionJobNotificationsFilterInput
) {
  onUpdateJobNotifications(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateJobNotificationsSubscriptionVariables,
  APITypes.OnUpdateJobNotificationsSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onUpdateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
