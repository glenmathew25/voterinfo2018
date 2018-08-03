// Constanst for Civic HTTP requests
export const CIVICURL = "https://www.googleapis.com/civicinfo/v2";
export const ELECTIONURL = CIVICURL + "/elections";
export const VOTERURL = CIVICURL + "/voterinfo";
export const APIKEY = "AIzaSyBrfCvcQtYQT4MQhuQ-m2HaGmYzxr49tVk";
export const DEFAULTADDRESS = "1521 2nd Ave., Seattle, WA 98101";
// CivicInfoElections
// generated from https://www.googleapis.com/civicinfo/v2/elections
// using http://rest-area.firebaseapp.com
export interface CivicElectionRequest {
  kind: string;
  elections: CivicElection[];
}
// CivicInfoElections
export interface CivicElection {
  id: string;
  name: string;
  electionDay: string;
  ocdDivisionId: string;
}
// CivicVoterInfo
// generated from https://www.googleapis.com/civicinfo/v2/voterinfo
// using http://rest-area.firebaseapp.com
export interface CivicVoterInfo {
  kind: string;
  election: CivicElection;
  normalizedInput: CivicNormalizedInput;
  pollingLocations: CivicPollingLocations[];
  earlyVoteSites: CivicEarlyVoteSites[];
  dropOffLocations: CivicDropOffLocations[];
  contests: CivicContests[];
  state: CivicState[];
  mailOnly: boolean;
}

// CivicNormalizedInput
export interface CivicNormalizedInput {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicPollingLocations
export interface CivicPollingLocations {
  address: CivicAddress;
  notes: any;
  pollingHours: string;
  sources: CivicSource[];
}
// CivicAddress
export interface CivicAddress {
  locationName: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicSources
export interface CivicSource {
  name: string;
  official: boolean;
}

// CivicEarlyVoteSites
export interface CivicEarlyVoteSites {
  address: CivicAddress;
  notes: any;
  pollingHours: string;
  name: string;
  voterServices: string;
  startDate: string;
  endDate: string;
  sources: CivicSource[];
}
// CivicAddress
export interface CivicAddress {
  locationName: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicSources
export interface CivicSource {
  name: string;
  official: boolean;
}

// CivicDropOffLocations
export interface CivicDropOffLocations {
  address: CivicAddress;
  notes: any;
  pollingHours: string;
  name: string;
  voterServices: string;
  startDate: string;
  endDate: string;
  sources: CivicSource[];
}
// CivicAddress
export interface CivicAddress {
  locationName: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicSources
export interface CivicSource {
  name: string;
  official: boolean;
}

// CivicReferendum
export interface CivicReferendum extends CivicBaseContest {
  // referendum props
  referendumTitle?: string;
  referendumSubtitle?: string;
  referendumText?: string;
  referendumProStatement?: string;
  referendumConStatement?: string;
  referendumBallotResponses?: string[];
  // primarys
}
export interface CivicBaseContest {
  type: string;
  special: string;
  level?: string[];
  district: CivicDistrict;
  ballotPlacement: string;
  sources: CivicSource[];
}
export interface CivicContests extends CivicBaseContest {
  referendumSubtitle?: string;
  referendumText?: string;
  referendumProStatement?: string;
  referendumConStatement?: string;
  referendumBallotResponses?: string[];
  office?: string;
  candidates?: CivicCandidate[];
}
// CivicPrimary
interface CivicPrimary extends CivicBaseContest {
  office: string;
  ballotPlacement: string;
  candidates: CivicCandidate[];
}

interface CivicCandidate {
  name: string;
  party?: string;
  phone?: string;
  photoUrl: string;
  email?: string;
  candidateUrl?: string;
}

// CivicDistrict
export interface CivicDistrict {
  name: string;
  scope?: string;
}

// CivicSources
export interface CivicSource {
  name: string;
  official: boolean;
}

// CivicState
export interface CivicState {
  name: string;
  electionAdministrationBody: CivicElectionAdministrationBody;
  local_jurisdiction: CivicLocalJurisdiction;
  sources: CivicSource[];
}
// CivicElectionAdministrationBody
export interface CivicElectionAdministrationBody {
  name: string;
  electionInfoUrl: string;
  electionRegistrationUrl: string;
  electionRegistrationConfirmationUrl: string;
  absenteeVotingInfoUrl: string;
  votingLocationFinderUrl: string;
  ballotInfoUrl: string;
  electionRulesUrl: string;
  correspondenceAddress: CivicCorrespondenceAddress;
  physicalAddress: CivicPhysicalAddress;
  electionOfficials: CivicElectionOfficial[];
}
// CivicCorrespondenceAddress
export interface CivicCorrespondenceAddress {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicPhysicalAddress
export interface CivicPhysicalAddress {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicElectionOfficials
export interface CivicElectionOfficial {
  name: string;
  title: string;
  officePhoneNumber: string;
  faxNumber: string;
  emailAddress: string;
}

// CivicLocalJurisdiction
export interface CivicLocalJurisdiction {
  name: string;
  electionAdministrationBody: CivicElectionAdministrationBody;
  sources: CivicSource[];
}
// CivicElectionAdministrationBody
export interface CivicElectionAdministrationBody {
  name: string;
  electionInfoUrl: string;
  electionRegistrationUrl: string;
  electionRegistrationConfirmationUrl: string;
  absenteeVotingInfoUrl: string;
  votingLocationFinderUrl: string;
  ballotInfoUrl: string;
  electionRulesUrl: string;
  correspondenceAddress: CivicCorrespondenceAddress;
  physicalAddress: CivicPhysicalAddress;
  electionOfficials: CivicElectionOfficial[];
}
// CivicCorrespondenceAddress
export interface CivicCorrespondenceAddress {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicPhysicalAddress
export interface CivicPhysicalAddress {
  line1: string;
  city: string;
  state: string;
  zip: string;
}

// CivicElectionOfficials
export interface CivicElectionOfficial {
  name: string;
  title: string;
  officePhoneNumber: string;
  faxNumber: string;
  emailAddress: string;
}

// CivicSources
export interface CivicSource {
  name: string;
  official: boolean;
}
