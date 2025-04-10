import React from 'react';
import {
	Shield,
	Lock,
	Eye,
	FileText,
	Bell,
	Users,
	Database,
	Server,
	Cookie,
	FileCheck,
	Mail,
	RefreshCcw,
} from 'lucide-react';

export function Privacy() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Privacy Policy
					</h1>
					<p className='text-lg text-gray-600'>Last updated: March 15, 2025</p>
				</div>

				<div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
					<div className='prose max-w-none'>
						<p className='text-gray-600 mb-6'>
							At Komodo Hub, we are committed to protecting your privacy and
							ensuring the security of your personal information.This Privacy
							Policy explains how we collect, use, disclose, and safeguard your
							information when you use our platform.
						</p>

						<div className='flex items-start mb-8'>
							<Shield className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									1. Data Collection and Purpose
								</h2>
								<p className='text-gray-600 mb-4'>
									We collect different types of information depending on your
									role within our platform:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										<strong>Students:</strong> Name, school ID, email address,
										class information, assignment submissions, and learning
										progress.
									</li>
									<li>
										<strong>Teachers:</strong> Name, school ID, email address,
										professional information, and teaching materials.
									</li>
									<li>
										<strong>School Administrators:</strong> School profile
										information, administrative data, and program participation
										details.
									</li>
									<li>
										<strong>Community Members:</strong> Name, email address,
										location, conservation interests, and contribution history.
									</li>
								</ul>
								<p className='text-gray-600'>
									This information is collected to facilitate conservation
									education programs, track participation and progress,enable
									school-community interaction, and support wildlife
									conservation efforts in Indonesia.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Eye className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									2. User Types and Data Visibility
								</h2>
								<p className='text-gray-600 mb-4'>
									We maintain clear distinctions between public and private
									data:
								</p>
								<h3 className='text-xl font-semibold text-gray-800 mb-2'>
									Public Data
								</h3>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>School profiles and general program information</li>
									<li>Community member profiles (limited information)</li>
									<li>
										Published conservation articles and educational resources
									</li>
									<li>
										Verified species sightings (without personal identifiers)
									</li>
								</ul>
								<h3 className='text-xl font-semibold text-gray-800 mb-2'>
									Private Data
								</h3>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>Student personal information and academic records</li>
									<li>Teacher evaluations and notes</li>
									<li>Private messages and communications</li>
									<li>Detailed user activity logs</li>
								</ul>
								<p className='text-gray-600 font-medium'>
									Student profiles are never publicly accessible. Student data
									is only visible to authorized school staff, the individual
									student, and system administrators.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Lock className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									3. Data Security Measures
								</h2>
								<p className='text-gray-600 mb-4'>
									We implement comprehensive security measures to protect your
									information:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										<strong>Encryption:</strong> End-to-end encryption for all
										sensitive data transmission and storage.
									</li>
									<li>
										<strong>Secure Infrastructure:</strong> Industry-standard
										security protocols and regular security audits.
									</li>
									<li>
										<strong>Access Controls:</strong> Role-based access control
										ensuring data is only accessible to authorized users.
									</li>
									<li>
										<strong>Regular Backups:</strong> Automated backup systems
										to prevent data loss.
									</li>
									<li>
										<strong>Compliance:</strong> Adherence to ISO 9241-210:2019
										and relevant data protection standards.
									</li>
								</ul>
								<p className='text-gray-600'>
									Our security team continuously monitors the platform for
									potential vulnerabilities and implementsupdates to maintain
									the highest level of protection.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<FileText className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									4. User Rights
								</h2>
								<p className='text-gray-600 mb-4'>
									All users have the following rights regarding their personal
									data:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										<strong>Right to Access:</strong> You can request a copy of
										your personal data.
									</li>
									<li>
										<strong>Right to Rectification:</strong> You can update or
										correct inaccurate information.
									</li>
									<li>
										<strong>Right to Deletion:</strong> You can request deletion
										of your data, subject to legal requirements.
									</li>
									<li>
										<strong>Right to Restriction:</strong> You can request
										limited use of your data.
									</li>
									<li>
										<strong>Right to Data Portability:</strong> You can request
										your data in a structured, commonly used format.
									</li>
								</ul>
								<p className='text-gray-600'>
									For students under 18, these rights may be exercised by
									parents or legal guardians. School administrators may exercise
									certain rights on behalf of their institution.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Users className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									5. Consent and Access Management
								</h2>
								<p className='text-gray-600 mb-4'>
									Our platform implements strict access controls:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Students access the platform only via unique access codes
										generated by their schools.
									</li>
									<li>
										Schools must obtain appropriate consent from
										parents/guardians before registering students.
									</li>
									<li>
										Community members provide explicit consent during
										registration.
									</li>
									<li>
										All users can withdraw consent and request account deletion
										at any time.
									</li>
								</ul>
								<p className='text-gray-600'>
									School administrators are responsible for managing user
									registrations and permissions within their institution. They
									must ensure appropriate consent is obtained and maintained.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Database className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									6. Communication and Internal Messaging Privacy
								</h2>
								<p className='text-gray-600 mb-4'>
									Our platform includes various communication channels:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Internal messages between teachers and students are private
										and accessible only to the participants.
									</li>
									<li>
										School administrators may access communications for
										legitimate educational or safety purposes.
									</li>
									<li>
										System-generated notifications and announcements are logged
										for operational purposes.
									</li>
									<li>
										Community forums are moderated to ensure appropriate
										content.
									</li>
								</ul>
								<p className='text-gray-600'>
									We do not use automated scanning of private messages for
									advertising or commercial purposes.Limited monitoring may
									occur for safety and security reasons only.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Server className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									7. Third-Party Sharing
								</h2>
								<p className='text-gray-600 mb-4'>
									We limit sharing of your information:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Student and teacher data is never shared with third parties
										for marketing purposes.
									</li>
									<li>
										Anonymized, aggregated data may be shared with conservation
										partners for research purposes.
									</li>
									<li>
										We may share information with service providers who help us
										operate the platform, subject to strict confidentiality
										agreements.
									</li>
									<li>
										Information may be disclosed if required by law or to
										protect rights, safety, or property.
									</li>
								</ul>
								<p className='text-gray-600'>
									Any third-party service providers we use must meet our strict
									data protection standards and are prohibited from using your
									data for their own purposes.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Bell className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									8. Incident Response and Audits
								</h2>
								<p className='text-gray-600 mb-4'>
									We maintain robust security practices:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Regular security audits and vulnerability assessments.
									</li>
									<li>
										Comprehensive incident response plan for potential data
										breaches.
									</li>
									<li>
										Prompt notification to affected users in case of a breach,
										in accordance with applicable laws.
									</li>
									<li>
										Continuous monitoring of system access and unusual
										activities.
									</li>
								</ul>
								<p className='text-gray-600'>
									In the event of a data breach, we will notify affected users
									within 72 hours of discovery, providing details about the
									breach and steps taken to mitigate risks.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Cookie className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									9. Cookies and Tracking
								</h2>
								<p className='text-gray-600 mb-4'>
									Our platform uses cookies and similar technologies:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										<strong>Essential Cookies:</strong> Required for basic
										platform functionality.
									</li>
									<li>
										<strong>Functional Cookies:</strong> Remember your
										preferences and settings.
									</li>
									<li>
										<strong>Analytics Cookies:</strong> Help us understand how
										users interact with our platform.
									</li>
								</ul>
								<p className='text-gray-600'>
									You can manage cookie preferences through your browser
									settings. Disabling certain cookies may limit functionality.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<FileCheck className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									10. Compliance and Regulations
								</h2>
								<p className='text-gray-600 mb-4'>
									Komodo Hub complies with applicable data protection laws:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>Indonesian Personal Data Protection Law</li>
									<li>
										Principles of international standards for children's online
										privacy protection
									</li>
									<li>Educational data privacy best practices</li>
								</ul>
								<p className='text-gray-600'>
									We regularly review and update our practices to ensure ongoing
									compliance with evolving regulations.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Mail className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									11. Contact Information
								</h2>
								<p className='text-gray-600 mb-4'>
									For privacy-related inquiries, please contact our Data
									Protection Officer:
								</p>
								<div className='bg-gray-50 p-4 rounded-lg'>
									<p className='text-gray-600'>Email: privacy@komodohub.org</p>
									<p className='text-gray-600'>Phone: +62 812 3456 7890</p>
									<p className='text-gray-600'>
										Address: Komodo Conservation Center, Jl. Raya Labuan Bajo,
										East Nusa Tenggara, Indonesia
									</p>
								</div>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<RefreshCcw className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									12. Changes to This Policy
								</h2>
								<p className='text-gray-600'>
									We may update this Privacy Policy from time to time. We will
									notify users of any material changes through the platform or
									via email. Your continued use of Komodo Hub after such
									modifications constitutes your acknowledgment of the modified
									Privacy Policy and your agreement to abide by its terms.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-emerald-50 rounded-lg p-6 border border-emerald-100 mb-8'>
					<h2 className='text-xl font-bold text-emerald-800 mb-3'>
						Summary of Key Points
					</h2>
					<ul className='space-y-2'>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<Shield className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								Student data is protected and never publicly accessible
							</p>
						</li>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<Lock className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								We use industry-standard security measures to protect your
								information
							</p>
						</li>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<Users className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								Students access the platform only via school-generated access
								codes
							</p>
						</li>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<Server className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								We don't share personal data with third parties for marketing
								purposes
							</p>
						</li>
					</ul>
				</div>

				<div className='text-center'>
					<p className='text-gray-600 mb-4'>
						If you have any questions about this Privacy Policy, please contact
						us at{' '}
						<a
							href='mailto:privacy@komodohub.org'
							className='text-emerald-600 hover:text-emerald-700'
						>
							privacy@komodohub.org
						</a>
					</p>
					<p className='text-sm text-gray-500'>
						© 2025 Komodo Hub. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
