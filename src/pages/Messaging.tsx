import React, { useState } from 'react';
import { Send, Search, User, Clock, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Messaging() {
	const { user } = useAuth();
	const [selectedChat, setSelectedChat] = useState<string | null>(null);
	const [message, setMessage] = useState('');

	const chats = [
		{
			id: '1',
			name: 'Dr. Sarah Johnson',
			role: 'Teacher',
			lastMessage: 'Great progress on your conservation project!',
			time: '10:30 AM',
			unread: 2,
		},
		{
			id: '2',
			name: 'Conservation Team',
			role: 'Group',
			lastMessage: 'Next field trip scheduled for Friday',
			time: '9:15 AM',
			unread: 0,
		},
	];

	const messages = [
		{
			id: '1',
			senderId: 'teacher1',
			content: 'How is your research on local bird species going?',
			timestamp: '10:30 AM',
		},
		{
			id: '2',
			senderId: user?.id,
			content: 'I have documented 5 new species this week!',
			timestamp: '10:32 AM',
		},
		{
			id: '3',
			senderId: 'teacher1',
			content:
				'Excellent work! Would you like to present your findings to the class?',
			timestamp: '10:35 AM',
		},
	];

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (!message.trim()) return;

		// TODO: Implement message sending with Supabase
		console.log('Sending message:', message);
		setMessage('');
	};

	return (
		<div className='min-h-screen bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
					<div className='grid grid-cols-12 h-[calc(100vh-12rem)]'>
						{/* Sidebar */}
						<div className='col-span-4 border-r border-gray-200'>
							<div className='p-4 border-b border-gray-200'>
								<div className='relative'>
									<input
										type='text'
										placeholder='Search conversations...'
										className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
									/>
									<Search className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
								</div>
							</div>

							<div className='overflow-y-auto h-[calc(100%-5rem)]'>
								{chats.map((chat) => (
									<div
										key={chat.id}
										onClick={() => setSelectedChat(chat.id)}
										className={`p-4 hover:bg-gray-50 cursor-pointer ${
											selectedChat === chat.id ? 'bg-gray-50' : ''
										}`}
									>
										<div className='flex items-center justify-between mb-1'>
											<div className='flex items-center'>
												<User className='h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2' />
												<div className='ml-3'>
													<h3 className='text-sm font-medium text-gray-900'>
														{chat.name}
													</h3>
													<p className='text-xs text-gray-500'>{chat.role}</p>
												</div>
											</div>
											<span className='text-xs text-gray-500'>{chat.time}</span>
										</div>
										<p className='text-sm text-gray-600 truncate'>
											{chat.lastMessage}
										</p>
										{chat.unread > 0 && (
											<span className='inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-emerald-500 rounded-full mt-2'>
												{chat.unread}
											</span>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Chat Area */}
						<div className='col-span-8 flex flex-col'>
							{selectedChat ? (
								<>
									{/* Chat Header */}
									<div className='p-4 border-b border-gray-200 flex items-center justify-between'>
										<div className='flex items-center'>
											<User className='h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2' />
											<div className='ml-3'>
												<h3 className='text-sm font-medium text-gray-900'>
													Dr. Sarah Johnson
												</h3>
												<p className='text-xs text-gray-500'>Teacher</p>
											</div>
										</div>
										<button className='text-gray-400 hover:text-gray-600'>
											<ChevronDown className='h-5 w-5' />
										</button>
									</div>

									{/* Messages */}
									<div className='flex-1 overflow-y-auto p-4 space-y-4'>
										{messages.map((msg) => (
											<div
												key={msg.id}
												className={`flex ${
													msg.senderId === user?.id
														? 'justify-end'
														: 'justify-start'
												}`}
											>
												<div
													className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
														msg.senderId === user?.id
															? 'bg-emerald-500 text-white'
															: 'bg-gray-100 text-gray-900'
													}`}
												>
													<p className='text-sm'>{msg.content}</p>
													<span className='text-xs opacity-75 mt-1 inline-block'>
														{msg.timestamp}
													</span>
												</div>
											</div>
										))}
									</div>

									{/* Message Input */}
									<form
										onSubmit={handleSendMessage}
										className='p-4 border-t border-gray-200'
									>
										<div className='flex items-center space-x-4'>
											<input
												type='text'
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												placeholder='Type your message...'
												className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
											/>
											<button
												type='submit'
												className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
											>
												<Send className='h-5 w-5' />
											</button>
										</div>
									</form>
								</>
							) : (
								<div className='flex-1 flex items-center justify-center'>
									<div className='text-center'>
										<Clock className='h-12 w-12 text-gray-400 mx-auto mb-4' />
										<h3 className='text-lg font-medium text-gray-900 mb-2'>
											No conversation selected
										</h3>
										<p className='text-sm text-gray-500'>
											Choose a conversation from the sidebar to start messaging
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
