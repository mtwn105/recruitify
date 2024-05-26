/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CompnayProfile = {
  __typename: "CompnayProfile",
  createdAt: string,
  description?: string | null,
  id: string,
  industry?: string | null,
  logo?: string | null,
  name?: string | null,
  updatedAt: string,
  userId?: string | null,
  website?: string | null,
};

export type Job = {
  __typename: "Job",
  city?: string | null,
  companyId?: string | null,
  country?: string | null,
  createdAt: string,
  description?: string | null,
  domain?: string | null,
  id: string,
  isRemote?: boolean | null,
  minExperience?: number | null,
  salary?: number | null,
  skills?: string | null,
  title?: string | null,
  updatedAt: string,
};

export type JobApplications = {
  __typename: "JobApplications",
  companyId?: string | null,
  createdAt: string,
  id: string,
  jobId?: string | null,
  status?: string | null,
  updatedAt: string,
  userId?: string | null,
};

export type JobNotifications = {
  __typename: "JobNotifications",
  companyId?: string | null,
  createdAt: string,
  id: string,
  jobId?: string | null,
  jobTitle?: string | null,
  status?: string | null,
  updatedAt: string,
  userId?: string | null,
};

export type User = {
  __typename: "User",
  createdAt: string,
  email: string,
  id: string,
  name: string,
  phone?: string | null,
  type?: UserType | null,
  updatedAt: string,
  username?: string | null,
};

export enum UserType {
  COMPANY = "COMPANY",
  INDIVIDUAL = "INDIVIDUAL",
}


export type UserProfile = {
  __typename: "UserProfile",
  city?: string | null,
  country?: string | null,
  createdAt: string,
  currentOrg?: string | null,
  currentRole?: string | null,
  domain?: string | null,
  education?: string | null,
  expectedSalary?: number | null,
  experience?: number | null,
  github?: string | null,
  id: string,
  linkedin?: string | null,
  name?: string | null,
  resume?: string | null,
  resumeFileName?: string | null,
  skills?: string | null,
  updatedAt: string,
  userId?: string | null,
  website?: string | null,
};

export type ModelCompnayProfileFilterInput = {
  and?: Array< ModelCompnayProfileFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  industry?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCompnayProfileFilterInput | null,
  or?: Array< ModelCompnayProfileFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  website?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCompnayProfileConnection = {
  __typename: "ModelCompnayProfileConnection",
  items:  Array<CompnayProfile | null >,
  nextToken?: string | null,
};

export type ModelJobApplicationsFilterInput = {
  and?: Array< ModelJobApplicationsFilterInput | null > | null,
  companyId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  jobId?: ModelStringInput | null,
  not?: ModelJobApplicationsFilterInput | null,
  or?: Array< ModelJobApplicationsFilterInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelJobApplicationsConnection = {
  __typename: "ModelJobApplicationsConnection",
  items:  Array<JobApplications | null >,
  nextToken?: string | null,
};

export type ModelJobNotificationsFilterInput = {
  and?: Array< ModelJobNotificationsFilterInput | null > | null,
  companyId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  jobId?: ModelStringInput | null,
  jobTitle?: ModelStringInput | null,
  not?: ModelJobNotificationsFilterInput | null,
  or?: Array< ModelJobNotificationsFilterInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelJobNotificationsConnection = {
  __typename: "ModelJobNotificationsConnection",
  items:  Array<JobNotifications | null >,
  nextToken?: string | null,
};

export type ModelJobFilterInput = {
  and?: Array< ModelJobFilterInput | null > | null,
  city?: ModelStringInput | null,
  companyId?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  id?: ModelIDInput | null,
  isRemote?: ModelBooleanInput | null,
  minExperience?: ModelFloatInput | null,
  not?: ModelJobFilterInput | null,
  or?: Array< ModelJobFilterInput | null > | null,
  salary?: ModelFloatInput | null,
  skills?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelJobConnection = {
  __typename: "ModelJobConnection",
  items:  Array<Job | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  currentOrg?: ModelStringInput | null,
  currentRole?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  education?: ModelStringInput | null,
  expectedSalary?: ModelFloatInput | null,
  experience?: ModelFloatInput | null,
  github?: ModelStringInput | null,
  id?: ModelIDInput | null,
  linkedin?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  resume?: ModelStringInput | null,
  resumeFileName?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  website?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  phone?: ModelStringInput | null,
  type?: ModelUserTypeInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCompnayProfileConditionInput = {
  and?: Array< ModelCompnayProfileConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  industry?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCompnayProfileConditionInput | null,
  or?: Array< ModelCompnayProfileConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  website?: ModelStringInput | null,
};

export type CreateCompnayProfileInput = {
  description?: string | null,
  id?: string | null,
  industry?: string | null,
  logo?: string | null,
  name?: string | null,
  userId?: string | null,
  website?: string | null,
};

export type ModelJobConditionInput = {
  and?: Array< ModelJobConditionInput | null > | null,
  city?: ModelStringInput | null,
  companyId?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  isRemote?: ModelBooleanInput | null,
  minExperience?: ModelFloatInput | null,
  not?: ModelJobConditionInput | null,
  or?: Array< ModelJobConditionInput | null > | null,
  salary?: ModelFloatInput | null,
  skills?: ModelStringInput | null,
  title?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateJobInput = {
  city?: string | null,
  companyId?: string | null,
  country?: string | null,
  description?: string | null,
  domain?: string | null,
  id?: string | null,
  isRemote?: boolean | null,
  minExperience?: number | null,
  salary?: number | null,
  skills?: string | null,
  title?: string | null,
};

export type ModelJobApplicationsConditionInput = {
  and?: Array< ModelJobApplicationsConditionInput | null > | null,
  companyId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  jobId?: ModelStringInput | null,
  not?: ModelJobApplicationsConditionInput | null,
  or?: Array< ModelJobApplicationsConditionInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateJobApplicationsInput = {
  companyId?: string | null,
  id?: string | null,
  jobId?: string | null,
  status?: string | null,
  userId?: string | null,
};

export type ModelJobNotificationsConditionInput = {
  and?: Array< ModelJobNotificationsConditionInput | null > | null,
  companyId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  jobId?: ModelStringInput | null,
  jobTitle?: ModelStringInput | null,
  not?: ModelJobNotificationsConditionInput | null,
  or?: Array< ModelJobNotificationsConditionInput | null > | null,
  status?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreateJobNotificationsInput = {
  companyId?: string | null,
  id?: string | null,
  jobId?: string | null,
  jobTitle?: string | null,
  status?: string | null,
  userId?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  phone?: ModelStringInput | null,
  type?: ModelUserTypeInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  email: string,
  id?: string | null,
  name: string,
  phone?: string | null,
  type?: UserType | null,
  username?: string | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  currentOrg?: ModelStringInput | null,
  currentRole?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  education?: ModelStringInput | null,
  expectedSalary?: ModelFloatInput | null,
  experience?: ModelFloatInput | null,
  github?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  resume?: ModelStringInput | null,
  resumeFileName?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  website?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  city?: string | null,
  country?: string | null,
  currentOrg?: string | null,
  currentRole?: string | null,
  domain?: string | null,
  education?: string | null,
  expectedSalary?: number | null,
  experience?: number | null,
  github?: string | null,
  id?: string | null,
  linkedin?: string | null,
  name?: string | null,
  resume?: string | null,
  resumeFileName?: string | null,
  skills?: string | null,
  userId?: string | null,
  website?: string | null,
};

export type DeleteCompnayProfileInput = {
  id: string,
};

export type DeleteJobInput = {
  id: string,
};

export type DeleteJobApplicationsInput = {
  id: string,
};

export type DeleteJobNotificationsInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type UpdateCompnayProfileInput = {
  description?: string | null,
  id: string,
  industry?: string | null,
  logo?: string | null,
  name?: string | null,
  userId?: string | null,
  website?: string | null,
};

export type UpdateJobInput = {
  city?: string | null,
  companyId?: string | null,
  country?: string | null,
  description?: string | null,
  domain?: string | null,
  id: string,
  isRemote?: boolean | null,
  minExperience?: number | null,
  salary?: number | null,
  skills?: string | null,
  title?: string | null,
};

export type UpdateJobApplicationsInput = {
  companyId?: string | null,
  id: string,
  jobId?: string | null,
  status?: string | null,
  userId?: string | null,
};

export type UpdateJobNotificationsInput = {
  companyId?: string | null,
  id: string,
  jobId?: string | null,
  jobTitle?: string | null,
  status?: string | null,
  userId?: string | null,
};

export type UpdateUserInput = {
  email?: string | null,
  id: string,
  name?: string | null,
  phone?: string | null,
  type?: UserType | null,
  username?: string | null,
};

export type UpdateUserProfileInput = {
  city?: string | null,
  country?: string | null,
  currentOrg?: string | null,
  currentRole?: string | null,
  domain?: string | null,
  education?: string | null,
  expectedSalary?: number | null,
  experience?: number | null,
  github?: string | null,
  id: string,
  linkedin?: string | null,
  name?: string | null,
  resume?: string | null,
  resumeFileName?: string | null,
  skills?: string | null,
  userId?: string | null,
  website?: string | null,
};

export type ModelSubscriptionCompnayProfileFilterInput = {
  and?: Array< ModelSubscriptionCompnayProfileFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  industry?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCompnayProfileFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionJobFilterInput = {
  and?: Array< ModelSubscriptionJobFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  companyId?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  domain?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  isRemote?: ModelSubscriptionBooleanInput | null,
  minExperience?: ModelSubscriptionFloatInput | null,
  or?: Array< ModelSubscriptionJobFilterInput | null > | null,
  salary?: ModelSubscriptionFloatInput | null,
  skills?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionJobApplicationsFilterInput = {
  and?: Array< ModelSubscriptionJobApplicationsFilterInput | null > | null,
  companyId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  jobId?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionJobApplicationsFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionJobNotificationsFilterInput = {
  and?: Array< ModelSubscriptionJobNotificationsFilterInput | null > | null,
  companyId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  jobId?: ModelSubscriptionStringInput | null,
  jobTitle?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionJobNotificationsFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  phone?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  currentOrg?: ModelSubscriptionStringInput | null,
  currentRole?: ModelSubscriptionStringInput | null,
  domain?: ModelSubscriptionStringInput | null,
  education?: ModelSubscriptionStringInput | null,
  expectedSalary?: ModelSubscriptionFloatInput | null,
  experience?: ModelSubscriptionFloatInput | null,
  github?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  linkedin?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  resume?: ModelSubscriptionStringInput | null,
  resumeFileName?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
};

export type GetCompnayProfileQueryVariables = {
  id: string,
};

export type GetCompnayProfileQuery = {
  getCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type GetJobQueryVariables = {
  id: string,
};

export type GetJobQuery = {
  getJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type GetJobApplicationsQueryVariables = {
  id: string,
};

export type GetJobApplicationsQuery = {
  getJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type GetJobNotificationsQueryVariables = {
  id: string,
};

export type GetJobNotificationsQuery = {
  getJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type ListCompnayProfilesQueryVariables = {
  filter?: ModelCompnayProfileFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCompnayProfilesQuery = {
  listCompnayProfiles?:  {
    __typename: "ModelCompnayProfileConnection",
    items:  Array< {
      __typename: "CompnayProfile",
      createdAt: string,
      description?: string | null,
      id: string,
      industry?: string | null,
      logo?: string | null,
      name?: string | null,
      updatedAt: string,
      userId?: string | null,
      website?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListJobApplicationsQueryVariables = {
  filter?: ModelJobApplicationsFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListJobApplicationsQuery = {
  listJobApplications?:  {
    __typename: "ModelJobApplicationsConnection",
    items:  Array< {
      __typename: "JobApplications",
      companyId?: string | null,
      createdAt: string,
      id: string,
      jobId?: string | null,
      status?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListJobNotificationsQueryVariables = {
  filter?: ModelJobNotificationsFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListJobNotificationsQuery = {
  listJobNotifications?:  {
    __typename: "ModelJobNotificationsConnection",
    items:  Array< {
      __typename: "JobNotifications",
      companyId?: string | null,
      createdAt: string,
      id: string,
      jobId?: string | null,
      jobTitle?: string | null,
      status?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      city?: string | null,
      companyId?: string | null,
      country?: string | null,
      createdAt: string,
      description?: string | null,
      domain?: string | null,
      id: string,
      isRemote?: boolean | null,
      minExperience?: number | null,
      salary?: number | null,
      skills?: string | null,
      title?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      city?: string | null,
      country?: string | null,
      createdAt: string,
      currentOrg?: string | null,
      currentRole?: string | null,
      domain?: string | null,
      education?: string | null,
      expectedSalary?: number | null,
      experience?: number | null,
      github?: string | null,
      id: string,
      linkedin?: string | null,
      name?: string | null,
      resume?: string | null,
      resumeFileName?: string | null,
      skills?: string | null,
      updatedAt: string,
      userId?: string | null,
      website?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      phone?: string | null,
      type?: UserType | null,
      updatedAt: string,
      username?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCompnayProfileMutationVariables = {
  condition?: ModelCompnayProfileConditionInput | null,
  input: CreateCompnayProfileInput,
};

export type CreateCompnayProfileMutation = {
  createCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type CreateJobMutationVariables = {
  condition?: ModelJobConditionInput | null,
  input: CreateJobInput,
};

export type CreateJobMutation = {
  createJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateJobApplicationsMutationVariables = {
  condition?: ModelJobApplicationsConditionInput | null,
  input: CreateJobApplicationsInput,
};

export type CreateJobApplicationsMutation = {
  createJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type CreateJobNotificationsMutationVariables = {
  condition?: ModelJobNotificationsConditionInput | null,
  input: CreateJobNotificationsInput,
};

export type CreateJobNotificationsMutation = {
  createJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type DeleteCompnayProfileMutationVariables = {
  condition?: ModelCompnayProfileConditionInput | null,
  input: DeleteCompnayProfileInput,
};

export type DeleteCompnayProfileMutation = {
  deleteCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type DeleteJobMutationVariables = {
  condition?: ModelJobConditionInput | null,
  input: DeleteJobInput,
};

export type DeleteJobMutation = {
  deleteJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteJobApplicationsMutationVariables = {
  condition?: ModelJobApplicationsConditionInput | null,
  input: DeleteJobApplicationsInput,
};

export type DeleteJobApplicationsMutation = {
  deleteJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type DeleteJobNotificationsMutationVariables = {
  condition?: ModelJobNotificationsConditionInput | null,
  input: DeleteJobNotificationsInput,
};

export type DeleteJobNotificationsMutation = {
  deleteJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type SendJobNotificationMutationVariables = {
  companyId?: string | null,
  jobId?: string | null,
};

export type SendJobNotificationMutation = {
  sendJobNotification?: string | null,
};

export type UpdateCompnayProfileMutationVariables = {
  condition?: ModelCompnayProfileConditionInput | null,
  input: UpdateCompnayProfileInput,
};

export type UpdateCompnayProfileMutation = {
  updateCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type UpdateJobMutationVariables = {
  condition?: ModelJobConditionInput | null,
  input: UpdateJobInput,
};

export type UpdateJobMutation = {
  updateJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateJobApplicationsMutationVariables = {
  condition?: ModelJobApplicationsConditionInput | null,
  input: UpdateJobApplicationsInput,
};

export type UpdateJobApplicationsMutation = {
  updateJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type UpdateJobNotificationsMutationVariables = {
  condition?: ModelJobNotificationsConditionInput | null,
  input: UpdateJobNotificationsInput,
};

export type UpdateJobNotificationsMutation = {
  updateJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type OnCreateCompnayProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCompnayProfileFilterInput | null,
};

export type OnCreateCompnayProfileSubscription = {
  onCreateCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type OnCreateJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnCreateJobSubscription = {
  onCreateJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateJobApplicationsSubscriptionVariables = {
  filter?: ModelSubscriptionJobApplicationsFilterInput | null,
};

export type OnCreateJobApplicationsSubscription = {
  onCreateJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnCreateJobNotificationsSubscriptionVariables = {
  filter?: ModelSubscriptionJobNotificationsFilterInput | null,
};

export type OnCreateJobNotificationsSubscription = {
  onCreateJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type OnDeleteCompnayProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCompnayProfileFilterInput | null,
};

export type OnDeleteCompnayProfileSubscription = {
  onDeleteCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type OnDeleteJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobApplicationsSubscriptionVariables = {
  filter?: ModelSubscriptionJobApplicationsFilterInput | null,
};

export type OnDeleteJobApplicationsSubscription = {
  onDeleteJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnDeleteJobNotificationsSubscriptionVariables = {
  filter?: ModelSubscriptionJobNotificationsFilterInput | null,
};

export type OnDeleteJobNotificationsSubscription = {
  onDeleteJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type OnUpdateCompnayProfileSubscriptionVariables = {
  filter?: ModelSubscriptionCompnayProfileFilterInput | null,
};

export type OnUpdateCompnayProfileSubscription = {
  onUpdateCompnayProfile?:  {
    __typename: "CompnayProfile",
    createdAt: string,
    description?: string | null,
    id: string,
    industry?: string | null,
    logo?: string | null,
    name?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};

export type OnUpdateJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob?:  {
    __typename: "Job",
    city?: string | null,
    companyId?: string | null,
    country?: string | null,
    createdAt: string,
    description?: string | null,
    domain?: string | null,
    id: string,
    isRemote?: boolean | null,
    minExperience?: number | null,
    salary?: number | null,
    skills?: string | null,
    title?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobApplicationsSubscriptionVariables = {
  filter?: ModelSubscriptionJobApplicationsFilterInput | null,
};

export type OnUpdateJobApplicationsSubscription = {
  onUpdateJobApplications?:  {
    __typename: "JobApplications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnUpdateJobNotificationsSubscriptionVariables = {
  filter?: ModelSubscriptionJobNotificationsFilterInput | null,
};

export type OnUpdateJobNotificationsSubscription = {
  onUpdateJobNotifications?:  {
    __typename: "JobNotifications",
    companyId?: string | null,
    createdAt: string,
    id: string,
    jobId?: string | null,
    jobTitle?: string | null,
    status?: string | null,
    updatedAt: string,
    userId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    phone?: string | null,
    type?: UserType | null,
    updatedAt: string,
    username?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    city?: string | null,
    country?: string | null,
    createdAt: string,
    currentOrg?: string | null,
    currentRole?: string | null,
    domain?: string | null,
    education?: string | null,
    expectedSalary?: number | null,
    experience?: number | null,
    github?: string | null,
    id: string,
    linkedin?: string | null,
    name?: string | null,
    resume?: string | null,
    resumeFileName?: string | null,
    skills?: string | null,
    updatedAt: string,
    userId?: string | null,
    website?: string | null,
  } | null,
};
