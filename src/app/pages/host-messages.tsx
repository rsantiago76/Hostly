import { useState } from 'react';
import { HostlyLogo } from '../components/hostly/logo';
import { ConversationList } from '../components/hostly/conversation-list';
import { MessageThread } from '../components/hostly/message-thread';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { HostlyButton } from '../components/hostly/button';

export interface Conversation {
  id: string;
  guestName: string;
  propertyName: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  hasVerifiedStay: boolean;
  avatar: string;
}

const MOCK_CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    guestName: 'Michael Chen',
    propertyName: 'Modern Beach House',
    lastMessage: 'Thanks! Looking forward to the stay.',
    timestamp: '2m ago',
    unread: true,
    hasVerifiedStay: true,
    avatar: 'MC',
  },
  {
    id: '2',
    guestName: 'Emma Rodriguez',
    propertyName: 'Luxury Downtown Penthouse',
    lastMessage: 'What time is check-in?',
    timestamp: '1h ago',
    unread: true,
    hasVerifiedStay: true,
    avatar: 'ER',
  },
  {
    id: '3',
    guestName: 'James Wilson',
    propertyName: 'Rustic Mountain Cabin',
    lastMessage: 'The cabin is beautiful! Thank you.',
    timestamp: '3h ago',
    unread: false,
    hasVerifiedStay: true,
    avatar: 'JW',
  },
  {
    id: '4',
    guestName: 'Sofia Patel',
    propertyName: 'Tropical Beach Cottage',
    lastMessage: 'Is parking available on-site?',
    timestamp: 'Yesterday',
    unread: false,
    hasVerifiedStay: false,
    avatar: 'SP',
  },
  {
    id: '5',
    guestName: 'David Kim',
    propertyName: 'Modern Beach House',
    lastMessage: 'Great experience! Will book again.',
    timestamp: '2 days ago',
    unread: false,
    hasVerifiedStay: true,
    avatar: 'DK',
  },
];

export function HostMessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string>(MOCK_CONVERSATIONS[0].id);

  const activeConversation = MOCK_CONVERSATIONS.find(c => c.id === selectedConversation);

  return (
    <div className="h-screen bg-[#F8FAFC] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <HostlyLogo />
              <div className="h-6 w-px bg-[#E2E8F0]"></div>
              <div>
                <h1 className="text-lg font-semibold text-[#0F172A]">Messages</h1>
                <p className="text-sm text-[#64748B]">Communicate with your guests</p>
              </div>
            </div>
            <Link to="/host/dashboard">
              <HostlyButton variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </HostlyButton>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content - Two Panel Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Conversation List */}
        <ConversationList
          conversations={MOCK_CONVERSATIONS}
          selectedId={selectedConversation}
          onSelectConversation={setSelectedConversation}
        />

        {/* Right Panel - Message Thread */}
        {activeConversation && (
          <MessageThread conversation={activeConversation} />
        )}
      </div>
    </div>
  );
}
