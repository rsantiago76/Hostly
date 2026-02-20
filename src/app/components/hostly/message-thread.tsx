import { useState, useRef } from 'react';
import { CheckCircle, Paperclip, Send, MoreVertical, Calendar } from 'lucide-react';
import type { Conversation } from '../../pages/host-messages';

interface Message {
  id: string;
  sender: 'host' | 'guest';
  content: string;
  timestamp: string;
  attachment?: {
    name: string;
    type: string;
  };
}

interface MessageThreadProps {
  conversation: Conversation;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'guest',
    content: 'Hi! I have a question about the check-in process. Is there a key lockbox or will someone be there to greet us?',
    timestamp: '10:23 AM',
  },
  {
    id: '2',
    sender: 'host',
    content: 'Hello Michael! Great question. We have a smart lock system. I\'ll send you the access code 24 hours before your check-in date.',
    timestamp: '10:25 AM',
  },
  {
    id: '3',
    sender: 'guest',
    content: 'Perfect, that sounds convenient. Also, is there parking available at the property?',
    timestamp: '10:28 AM',
  },
  {
    id: '4',
    sender: 'host',
    content: 'Yes! There are 2 dedicated parking spots in the driveway. I\'m attaching a photo of the property layout for your reference.',
    timestamp: '10:30 AM',
    attachment: {
      name: 'property-layout.pdf',
      type: 'application/pdf',
    },
  },
  {
    id: '5',
    sender: 'guest',
    content: 'Thanks! Looking forward to the stay.',
    timestamp: '10:32 AM',
  },
];

export function MessageThread({ conversation }: MessageThreadProps) {
  const [messageInput, setMessageInput] = useState('');
  const [showTypingIndicator, setShowTypingIndicator] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle send message logic here
      setMessageInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAttachFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Thread Header */}
      <div className="px-6 py-4 border-b border-[#E2E8F0] flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-[#EADBC8] flex items-center justify-center text-sm font-semibold text-[#0F172A]">
              {conversation.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base font-semibold text-[#0F172A]">
                  {conversation.guestName}
                </h2>
                {conversation.hasVerifiedStay && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-[#DBEAFE] rounded-full">
                    <CheckCircle className="w-3 h-3 text-[#3B82F6]" />
                    <span className="text-xs font-semibold text-[#3B82F6]">Verified stay</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <Calendar className="w-3 h-3" />
                <span>{conversation.propertyName}</span>
                <span className="w-1 h-1 bg-[#CBD5E1] rounded-full"></span>
                <span>Mar 20-25, 2026</span>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5 text-[#64748B]" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Date Divider */}
        <div className="flex items-center justify-center">
          <div className="px-3 py-1 bg-[#F8FAFC] rounded-full">
            <span className="text-xs font-medium text-[#64748B]">Today</span>
          </div>
        </div>

        {/* Message Bubbles */}
        {MOCK_MESSAGES.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'host' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] ${message.sender === 'host' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
              {/* Message Bubble */}
              <div
                className={`px-4 py-3 rounded-2xl ${
                  message.sender === 'host'
                    ? 'bg-[#0F172A] text-white rounded-br-md'
                    : 'bg-[#F8FAFC] text-[#0F172A] rounded-bl-md'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                
                {/* Attachment */}
                {message.attachment && (
                  <div className={`mt-2 px-3 py-2 rounded-lg flex items-center gap-2 ${
                    message.sender === 'host' ? 'bg-white/10' : 'bg-white'
                  }`}>
                    <Paperclip className={`w-4 h-4 ${
                      message.sender === 'host' ? 'text-white' : 'text-[#64748B]'
                    }`} />
                    <span className={`text-xs font-medium ${
                      message.sender === 'host' ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                      {message.attachment.name}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Timestamp */}
              <span className="text-xs text-[#64748B] px-2">{message.timestamp}</span>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {showTypingIndicator && (
          <div className="flex justify-start">
            <div className="max-w-[70%] flex flex-col gap-1">
              <div className="px-4 py-3 bg-[#F8FAFC] rounded-2xl rounded-bl-md">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#64748B] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-[#64748B] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[#64748B] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
              <span className="text-xs text-[#64748B] px-2">{conversation.guestName} is typing...</span>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 border-t border-[#E2E8F0] flex-shrink-0">
        <div className="flex items-end gap-3">
          {/* Attachment Button */}
          <button
            onClick={handleAttachFile}
            className="p-2.5 hover:bg-[#F8FAFC] rounded-lg transition-colors flex-shrink-0"
            aria-label="Attach file"
          >
            <Paperclip className="w-5 h-5 text-[#64748B]" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(e) => {
              // Handle file attachment
              console.log('File selected:', e.target.files?.[0]);
            }}
          />

          {/* Text Input */}
          <div className="flex-1 relative">
            <textarea
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-4 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-sm text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all resize-none"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={!messageInput.trim()}
            className="p-2.5 bg-[#3B82F6] hover:bg-[#2563EB] disabled:bg-[#E2E8F0] disabled:cursor-not-allowed rounded-lg transition-colors flex-shrink-0"
            aria-label="Send message"
          >
            <Send className={`w-5 h-5 ${messageInput.trim() ? 'text-white' : 'text-[#94A3B8]'}`} />
          </button>
        </div>

        {/* Helpful Tips */}
        <p className="text-xs text-[#64748B] mt-2 px-2">
          Press Enter to send, Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}
