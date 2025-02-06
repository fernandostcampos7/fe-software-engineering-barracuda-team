export type UserRole = 'super_admin' | 'school_admin' | 'teacher' | 'student' | 'community_member' | 'public';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  schoolId?: string;
  communityId?: string;
  createdAt: string;
  updatedAt: string;
}