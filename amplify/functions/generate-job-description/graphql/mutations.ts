/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCompnayProfile = /* GraphQL */ `mutation CreateCompnayProfile(
  $condition: ModelCompnayProfileConditionInput
  $input: CreateCompnayProfileInput!
) {
  createCompnayProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCompnayProfileMutationVariables,
  APITypes.CreateCompnayProfileMutation
>;
export const createJob = /* GraphQL */ `mutation CreateJob(
  $condition: ModelJobConditionInput
  $input: CreateJobInput!
) {
  createJob(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateJobMutationVariables,
  APITypes.CreateJobMutation
>;
export const createJobApplications = /* GraphQL */ `mutation CreateJobApplications(
  $condition: ModelJobApplicationsConditionInput
  $input: CreateJobApplicationsInput!
) {
  createJobApplications(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateJobApplicationsMutationVariables,
  APITypes.CreateJobApplicationsMutation
>;
export const createJobNotifications = /* GraphQL */ `mutation CreateJobNotifications(
  $condition: ModelJobNotificationsConditionInput
  $input: CreateJobNotificationsInput!
) {
  createJobNotifications(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateJobNotificationsMutationVariables,
  APITypes.CreateJobNotificationsMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteCompnayProfile = /* GraphQL */ `mutation DeleteCompnayProfile(
  $condition: ModelCompnayProfileConditionInput
  $input: DeleteCompnayProfileInput!
) {
  deleteCompnayProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCompnayProfileMutationVariables,
  APITypes.DeleteCompnayProfileMutation
>;
export const deleteJob = /* GraphQL */ `mutation DeleteJob(
  $condition: ModelJobConditionInput
  $input: DeleteJobInput!
) {
  deleteJob(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteJobMutationVariables,
  APITypes.DeleteJobMutation
>;
export const deleteJobApplications = /* GraphQL */ `mutation DeleteJobApplications(
  $condition: ModelJobApplicationsConditionInput
  $input: DeleteJobApplicationsInput!
) {
  deleteJobApplications(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteJobApplicationsMutationVariables,
  APITypes.DeleteJobApplicationsMutation
>;
export const deleteJobNotifications = /* GraphQL */ `mutation DeleteJobNotifications(
  $condition: ModelJobNotificationsConditionInput
  $input: DeleteJobNotificationsInput!
) {
  deleteJobNotifications(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteJobNotificationsMutationVariables,
  APITypes.DeleteJobNotificationsMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const sendJobNotification = /* GraphQL */ `mutation SendJobNotification($companyId: String, $jobId: String) {
  sendJobNotification(companyId: $companyId, jobId: $jobId)
}
` as GeneratedMutation<
  APITypes.SendJobNotificationMutationVariables,
  APITypes.SendJobNotificationMutation
>;
export const updateCompnayProfile = /* GraphQL */ `mutation UpdateCompnayProfile(
  $condition: ModelCompnayProfileConditionInput
  $input: UpdateCompnayProfileInput!
) {
  updateCompnayProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCompnayProfileMutationVariables,
  APITypes.UpdateCompnayProfileMutation
>;
export const updateJob = /* GraphQL */ `mutation UpdateJob(
  $condition: ModelJobConditionInput
  $input: UpdateJobInput!
) {
  updateJob(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateJobMutationVariables,
  APITypes.UpdateJobMutation
>;
export const updateJobApplications = /* GraphQL */ `mutation UpdateJobApplications(
  $condition: ModelJobApplicationsConditionInput
  $input: UpdateJobApplicationsInput!
) {
  updateJobApplications(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateJobApplicationsMutationVariables,
  APITypes.UpdateJobApplicationsMutation
>;
export const updateJobNotifications = /* GraphQL */ `mutation UpdateJobNotifications(
  $condition: ModelJobNotificationsConditionInput
  $input: UpdateJobNotificationsInput!
) {
  updateJobNotifications(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateJobNotificationsMutationVariables,
  APITypes.UpdateJobNotificationsMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
