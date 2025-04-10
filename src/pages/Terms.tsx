import React from 'react';
import {
	FileText,
	Shield,
	Users,
	Lock,
	AlertTriangle,
	Scale,
	HelpCircle,
} from 'lucide-react';

export function Terms() {
	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Terms of Service
					</h1>
					<p className='text-lg text-gray-600'>Last updated: March 15, 2025</p>
				</div>

				<div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
					<div className='prose max-w-none'>
						<div className='flex items-start mb-8'>
							<FileText className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									1. Introduction
								</h2>
								<p className='text-gray-600 mb-4'>
									Welcome to Komodo Hub, a digital platform for
									community-supported animal conservation, developed by Yayasan
									Komodo. These Terms of Service ("Terms") govern your access to
									and use of the Komodo Hub platform, including any associated
									mobile applications, websites, and services (collectively, the
									"Platform").
								</p>
								<p className='text-gray-600'>
									By accessing or using the Platform, you agree to be bound by
									these Terms. If you do not agree to these Terms, please do not
									access or use the Platform. If you are accessing the Platform
									on behalf of a school, community organization, or other
									entity, you represent that you have the authority to bind that
									entity to these Terms.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Users className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									2. User Eligibility and Roles
								</h2>
								<p className='text-gray-600 mb-4'>
									Komodo Hub serves two primary user types:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										<strong>Schools:</strong> Including teachers, students, and
										school administrators.
									</li>
									<li>
										<strong>Communities:</strong> Including community
										organizations and individual contributors.
									</li>
								</ul>
								<p className='text-gray-600 mb-4'>
									To access the full functionalities of the Platform, schools
									and communities must register and, where applicable, subscribe
									to our services. Registration is subject to approval by
									Yayasan Komodo.
								</p>
								<p className='text-gray-600'>
									Students under the age of 18 may only access the Platform with
									appropriate parental or guardian consent and through access
									codes provided by their schools. Schools are responsible for
									obtaining all necessary consents before providing students
									with access to the Platform.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Shield className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									3. User Accounts and Responsibilities
								</h2>
								<p className='text-gray-600 mb-4'>
									Each school and community will have a primary account with
									authority to:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Register members (students, teachers, community members).
									</li>
									<li>Assign roles (teacher, student, contributor).</li>
									<li>Manage participation in conservation programs.</li>
									<li>
										Control access to platform features based on role
										permissions.
									</li>
								</ul>
								<p className='text-gray-600 mb-4'>
									As a user of the Platform, you are responsible for:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Keeping your login credentials secure and confidential.
									</li>
									<li>Ensuring the accuracy of the information you provide.</li>
									<li>All activities that occur under your account.</li>
									<li>
										Promptly notifying us of any unauthorized use of your
										account.
									</li>
								</ul>
								<p className='text-gray-600'>
									You agree not to share your account credentials with any third
									party. Yayasan Komodo reserves the right to disable any user
									account if we believe you have violated these Terms.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<AlertTriangle className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									4. Acceptable Use
								</h2>
								<p className='text-gray-600 mb-4'>
									You agree to use Komodo Hub for educational and conservation
									purposes only. The following activities are strictly
									prohibited:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Uploading inappropriate, offensive, or harmful content.
									</li>
									<li>Sharing personal information of students publicly.</li>
									<li>
										Misusing platform resources for personal gain or harmful
										purposes.
									</li>
									<li>
										Attempting to breach system security or access unauthorized
										data.
									</li>
									<li>
										Using the Platform to violate any applicable laws or
										regulations.
									</li>
									<li>
										Engaging in any activity that interferes with or disrupts
										the Platform.
									</li>
									<li>
										Impersonating any person or entity, or falsely stating or
										misrepresenting your affiliation.
									</li>
								</ul>
								<p className='text-gray-600'>
									Yayasan Komodo reserves the right to remove any content that
									violates these Terms and to suspend or terminate accounts
									engaged in prohibited activities.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<FileText className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									5. Content Ownership and Contributions
								</h2>
								<p className='text-gray-600 mb-4'>
									Users retain ownership of their original content (e.g.,
									essays, sighting reports, articles), but grant Komodo Hub a
									non-exclusive, worldwide, royalty-free license to use,
									display, distribute, and promote such content within the
									Platform for the purpose of fulfilling our conservation and
									educational mission.
								</p>
								<p className='text-gray-600 mb-4'>
									By submitting content to the Platform, you represent and
									warrant that:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										You own or have the necessary rights to the content you
										submit.
									</li>
									<li>
										Your content does not infringe upon the intellectual
										property rights of any third party.
									</li>
									<li>
										Your content does not violate any applicable laws or
										regulations.
									</li>
								</ul>
								<p className='text-gray-600'>
									School libraries and community pages will be publicly
									accessible, but individual student profiles will remain
									private. Yayasan Komodo reserves the right to review and
									moderate all content submitted to the Platform.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Lock className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									6. Privacy and Data Protection
								</h2>
								<p className='text-gray-600 mb-4'>
									Your privacy is important to us. Our Privacy Policy, which is
									incorporated into these Terms by reference, explains how we
									collect, use, and protect your personal information.
								</p>
								<p className='text-gray-600 mb-4'>
									Key privacy commitments include:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Schools are responsible for obtaining necessary parental
										consent before enrolling students.
									</li>
									<li>
										Komodo Hub will not publicly disclose personal data of
										students.
									</li>
									<li>
										Student data will only be accessible to authorized school
										staff and the individual student.
									</li>
									<li>
										We implement industry-standard security measures to protect
										your data.
									</li>
								</ul>
								<p className='text-gray-600'>
									By using the Platform, you consent to the collection and use
									of your information as described in our Privacy Policy.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<HelpCircle className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									7. Platform Availability and Modifications
								</h2>
								<p className='text-gray-600 mb-4'>
									Komodo Hub aims to provide reliable access to the Platform,
									but we do not guarantee uninterrupted service. The Platform
									may be temporarily unavailable due to maintenance, system
									upgrades, or factors beyond our control.
								</p>
								<p className='text-gray-600 mb-4'>
									Yayasan Komodo reserves the right to:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Modify, suspend, or discontinue any aspect of the Platform,
										with or without notice.
									</li>
									<li>
										Impose limits on certain features or restrict access to
										parts of the Platform.
									</li>
									<li>
										Update these Terms at any time, with continued use
										constituting acceptance of the revised Terms.
									</li>
								</ul>
								<p className='text-gray-600'>
									We will make reasonable efforts to notify users of significant
									changes to the Platform or these Terms.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Shield className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									8. Compliance and Security
								</h2>
								<p className='text-gray-600 mb-4'>
									Users must comply with all applicable laws and regulations
									when using the Platform. You agree not to engage in any
									activity that:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>Compromises system security.</li>
									<li>
										Attempts to access data you are not authorized to view.
									</li>
									<li>
										Interferes with the proper functioning of the Platform.
									</li>
									<li>Violates the privacy or rights of other users.</li>
								</ul>
								<p className='text-gray-600'>
									Komodo Hub follows high security standards (ISO 9241-210:2019)
									to protect data and system integrity. We regularly audit our
									systems and implement security updates to maintain a secure
									environment.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<AlertTriangle className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									9. Termination of Access
								</h2>
								<p className='text-gray-600 mb-4'>
									Komodo Hub reserves the right to:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Suspend or terminate accounts that violate these Terms.
									</li>
									<li>
										Revoke access for users involved in misconduct or illegal
										activities.
									</li>
									<li>
										Remove content that violates these Terms or applicable laws.
									</li>
								</ul>
								<p className='text-gray-600 mb-4'>Upon termination:</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Your right to access and use the Platform will immediately
										cease.
									</li>
									<li>
										We may delete or archive your account data in accordance
										with our Privacy Policy.
									</li>
									<li>
										Provisions of these Terms that by their nature should
										survive termination will remain in effect.
									</li>
								</ul>
								<p className='text-gray-600'>
									You may also terminate your use of the Platform at any time by
									closing your account and discontinuing use of the services.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Scale className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									10. Limitation of Liability
								</h2>
								<p className='text-gray-600 mb-4'>
									Komodo Hub is provided "as is" without warranties of any kind,
									either express or implied. Yayasan Komodo:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>
										Does not guarantee uninterrupted or error-free service.
									</li>
									<li>
										Is not liable for data loss due to system failures, user
										errors, or security breaches.
									</li>
									<li>
										Is not responsible for the accuracy, quality, or
										appropriateness of user-contributed content.
									</li>
									<li>
										Disclaims all warranties regarding the Platform, including
										implied warranties of merchantability and fitness for a
										particular purpose.
									</li>
								</ul>
								<p className='text-gray-600'>
									To the maximum extent permitted by law, Yayasan Komodo shall
									not be liable for any indirect, incidental, special,
									consequential, or punitive damages, or any loss of profits or
									revenues, whether incurred directly or indirectly, arising
									from your use of the Platform.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<Scale className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									11. Dispute Resolution
								</h2>
								<p className='text-gray-600 mb-4'>
									Any disputes related to the Platform will be resolved in
									accordance with Indonesian law. By using the Platform, you
									agree to submit to the exclusive jurisdiction of the courts
									located in Indonesia for the resolution of any disputes.
								</p>
								<p className='text-gray-600'>
									Schools and community organizations are encouraged to contact
									Komodo Hub's support team for dispute resolution before
									pursuing legal action. We are committed to resolving issues in
									a fair and timely manner.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<FileText className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									12. Changes to Terms
								</h2>
								<p className='text-gray-600 mb-4'>
									Komodo Hub may update these Terms of Service from time to
									time. We will notify users of significant changes through:
								</p>
								<ul className='list-disc pl-6 space-y-2 text-gray-600 mb-4'>
									<li>Notifications within the Platform.</li>
									<li>Email communications to registered users.</li>
									<li>Updates on our website.</li>
								</ul>
								<p className='text-gray-600'>
									Your continued use of the Platform after such modifications
									constitutes your acknowledgment of the modified Terms and your
									agreement to abide by them. If you do not agree to the revised
									Terms, you should discontinue your use of the Platform.
								</p>
							</div>
						</div>

						<div className='flex items-start mb-8'>
							<HelpCircle className='h-8 w-8 text-emerald-600 mt-1 mr-4 flex-shrink-0' />
							<div>
								<h2 className='text-2xl font-bold text-gray-900 mb-3'>
									13. Contact Information
								</h2>
								<p className='text-gray-600 mb-4'>
									If you have any questions about these Terms of Service, please
									contact us:
								</p>
								<div className='bg-gray-50 p-4 rounded-lg'>
									<p className='text-gray-600'>
										<strong>General Inquiries:</strong> info@komodohub.org
									</p>
									<p className='text-gray-600'>
										<strong>Privacy Concerns:</strong> privacy@komodohub.org
									</p>
									<p className='text-gray-600'>
										<strong>Report Violations:</strong> report@komodohub.org
									</p>
									<p className='text-gray-600'>
										<strong>Phone:</strong> +62 812 3456 7890
									</p>
									<p className='text-gray-600'>
										<strong>Address:</strong> Komodo Conservation Center, Jl.
										Raya Labuan Bajo, East Nusa Tenggara, Indonesia
									</p>
								</div>
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
								<Users className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								Schools and communities must register to access full platform
								features
							</p>
						</li>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<Shield className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								Users are responsible for maintaining account security and
								appropriate use
							</p>
						</li>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<FileText className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								Users retain ownership of their content but grant Komodo Hub a
								license to use it
							</p>
						</li>
						<li className='flex items-start'>
							<div className='bg-emerald-100 rounded-full p-1 mr-3 mt-0.5'>
								<Lock className='h-4 w-4 text-emerald-600' />
							</div>
							<p className='text-emerald-700'>
								Student data is protected and only accessible to authorized
								users
							</p>
						</li>
					</ul>
				</div>

				<div className='text-center'>
					<p className='text-gray-600 mb-4'>
						By using Komodo Hub, you acknowledge that you have read, understood,
						and agree to be bound by these Terms of Service.
					</p>
					<p className='text-sm text-gray-500'>
						© 2025 Komodo Hub. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
}
