export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			profiles: {
				Row: {
					id: string;
					email: string;
					role:
						| 'super_admin'
						| 'school_admin'
						| 'teacher'
						| 'student'
						| 'community_member'
						| 'public';
					first_name: string | null;
					last_name: string | null;
					school_id: string | null;
					community_id: string | null;
					location: string | null;
					bio: string | null;
					created_at: string;
					updated_at: string;
					is_public_profile: boolean;
					subscription_status: 'active' | 'inactive' | 'pending' | null;
					access_code: string | null;
				};
				Insert: {
					id: string;
					email: string;
					role:
						| 'super_admin'
						| 'school_admin'
						| 'teacher'
						| 'student'
						| 'community_member'
						| 'public';
					first_name?: string | null;
					last_name?: string | null;
					school_id?: string | null;
					community_id?: string | null;
					location?: string | null;
					bio?: string | null;
					created_at?: string;
					updated_at?: string;
					is_public_profile?: boolean;
					subscription_status?: 'active' | 'inactive' | 'pending' | null;
					access_code?: string | null;
				};
				Update: {
					id?: string;
					email?: string;
					role?:
						| 'super_admin'
						| 'school_admin'
						| 'teacher'
						| 'student'
						| 'community_member'
						| 'public';
					first_name?: string | null;
					last_name?: string | null;
					school_id?: string | null;
					community_id?: string | null;
					location?: string | null;
					bio?: string | null;
					created_at?: string;
					updated_at?: string;
					is_public_profile?: boolean;
					subscription_status?: 'active' | 'inactive' | 'pending' | null;
					access_code?: string | null;
				};
			};
			achievements: {
				Row: {
					id: string;
					user_id: string;
					title: string;
					description: string | null;
					type: 'conservation' | 'education' | 'community';
					date_earned: string;
					created_at: string;
				};
				Insert: {
					id?: string;
					user_id: string;
					title: string;
					description?: string | null;
					type: 'conservation' | 'education' | 'community';
					date_earned?: string;
					created_at?: string;
				};
				Update: {
					id?: string;
					user_id?: string;
					title?: string;
					description?: string | null;
					type?: 'conservation' | 'education' | 'community';
					date_earned?: string;
					created_at?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
	};
};
