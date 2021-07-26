import { AchievedSkill, Achievement } from "./achievement.model";
import { Metadata } from "./metadata.model";
import { Role } from "./role.model";

export interface RegistrationProfile {
  name: string,
  dob: number,
  gender: string,
  phoneNumber: string,
  address: string,
  selectedRoles: string[]
}
export interface UserProfile extends RegistrationProfile {
  uid: string,
  email: string,
  photoUrl: string,
  roles: Role[],
  profileMetadata?: Metadata,
  contribMetadata?: Metadata
}

export interface UserContribution {
  uid: string,
  email: string,
  credit: number,
  skills: AchievedSkill[],
  achievements?: Achievement[],
}