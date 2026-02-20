import { Search, CheckCircle } from 'lucide-react';
import type { Conversation } from '../../pages/host-messages';

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelectConversation: (id: string) => void;
}

export function ConversationList({
  conversations,
  selectedId,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="w-full md:w-96 bg-white border-r border-[#E2E8F0] flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-[#E2E8F0]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
          />
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={`w-full px-4 py-4 border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors text-left ${
              selectedId === conversation.id ? 'bg-[#F8FAFC] border-l-4 border-l-[#3B82F6]' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                conversation.unread ? 'bg-[#3B82F6] text-white' : 'bg-[#EADBC8] text-[#0F172A]'
              }`}>
                {conversation.avatar}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-sm font-semibold truncate ${
                    conversation.unread ? 'text-[#0F172A]' : 'text-[#64748B]'
                  }`}>
                    {conversation.guestName}
                  </h3>
                  {conversation.hasVerifiedStay && (
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-[#64748B] mb-1.5 truncate">
                  {conversation.propertyName}
                </p>
                <p className={`text-sm truncate ${
                  conversation.unread ? 'text-[#0F172A] font-medium' : 'text-[#64748B]'
                }`}>
                  {conversation.lastMessage}
                </p>
              </div>

              {/* Timestamp & Unread Badge */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-xs text-[#64748B]">{conversation.timestamp}</span>
                {conversation.unread && (
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
