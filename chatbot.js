// AI Chatbot using Claude API
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    let conversationHistory = [];

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('hidden');
        if (!chatbotContainer.classList.contains('hidden')) {
            chatbotInput.focus();
        }
    });

    chatbotClose.addEventListener('click', function() {
        chatbotContainer.classList.add('hidden');
    });

    // Send message on button click
    chatbotSend.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    async function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message to chat
        addMessageToChat(message, 'user');
        chatbotInput.value = '';

        // Add to conversation history
        conversationHistory.push({
            role: 'user',
            content: message
        });

        // Show typing indicator
        const typingDiv = addTypingIndicator();

        try {
            // Call Claude API
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'claude-sonnet-4-20250514',
                    max_tokens: 1000,
                    system: getSystemPrompt(),
                    messages: conversationHistory
                })
            });

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const assistantMessage = data.content[0].text;

            // Remove typing indicator
            typingDiv.remove();

            // Add assistant message to chat
            addMessageToChat(assistantMessage, 'bot');

            // Add to conversation history
            conversationHistory.push({
                role: 'assistant',
                content: assistantMessage
            });

        } catch (error) {
            console.error('Chatbot error:', error);
            typingDiv.remove();
            
            // Fallback to rule-based responses
            const fallbackResponse = getFallbackResponse(message);
            addMessageToChat(fallbackResponse, 'bot');

            conversationHistory.push({
                role: 'assistant',
                content: fallbackResponse
            });
        }
    }

    function getSystemPrompt() {
        return `You are a helpful customer service assistant for Kshitij International, a leading supplier in Nepal of:

1. MACHINERY for concrete production:
   - Concrete Mixers
   - Vibrating Tables
   - Color Mixers
   - Pan Concrete Mixers
   - Hollow Block Making Machines (Manual and Hydraulic)
   - Plate Compactors
   - Monkey Lifts and Jumpers
   - Mini Rollers and Compactors
   - Power Trowels

2. MOLDS for paver tiles and blocks:
   - Cosmic, Milano, Zig-Zag patterns
   - Sudarsan Chakra, Hexagon, I-shape (Dumbbell)
   - D-shape, Brucks, Curvestone
   - Square, Bench Molds, Checker

3. COLOR PIGMENTS (LANXESS brand):
   - IOX RO3 (Red Synthetic Iron Oxide)
   - IOX YO2 (Yellow Synthetic Iron Oxide)
   - IOX BO3 (Black Synthetic Iron Oxide)

Company Info:
- Contact: +977 9852029937
- Email: contact@kshitijinternational.com.np
- We supply all over Nepal
- We provide complete solutions for starting concrete product factories

Your role:
- Help customers find the right products
- Provide product information and specifications
- Answer questions about pricing, availability, and delivery
- Guide them to make inquiries or contact us
- Be friendly, professional, and helpful
- Keep responses concise and relevant

If you don't know specific details like exact prices or technical specifications, guide customers to contact us directly for accurate information.`;
    }

    function getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Product inquiries
        if (lowerMessage.includes('machine') || lowerMessage.includes('mixer') || lowerMessage.includes('equipment')) {
            return "We offer a wide range of machinery including concrete mixers, vibrating tables, hollow block making machines, and more. Would you like to know about a specific machine? Or I can help you choose the right equipment for your needs.";
        }

        if (lowerMessage.includes('mold') || lowerMessage.includes('paver') || lowerMessage.includes('pattern')) {
            return "We have various paver molds including Cosmic, Milano, Zig-Zag, Hexagon, and many other patterns. These molds are used to create beautiful interlocking paver tiles. Which pattern interests you?";
        }

        if (lowerMessage.includes('color') || lowerMessage.includes('pigment') || lowerMessage.includes('lanxess')) {
            return "We supply LANXESS synthetic iron oxide pigments in three colors: Red (IOX RO3), Yellow (IOX YO2), and Black (IOX BO3). These are premium quality pigments for concrete coloring. Would you like more details?";
        }

        // Pricing inquiries
        if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rate')) {
            return "For current pricing and quotes, please contact us directly at +977 9852029937 or email contact@kshitijinternational.com.np. Prices vary based on quantity and specific requirements. Would you like to submit an inquiry form?";
        }

        // Availability
        if (lowerMessage.includes('available') || lowerMessage.includes('stock') || lowerMessage.includes('delivery')) {
            return "We supply products all over Nepal. For stock availability and delivery timelines, please call us at +977 9852029937 or send an inquiry through our website. What products are you interested in?";
        }

        // Starting a business
        if (lowerMessage.includes('start') || lowerMessage.includes('factory') || lowerMessage.includes('business') || lowerMessage.includes('setup')) {
            return "Great! We provide complete solutions for starting concrete product factories. We can help you with all necessary machinery, molds, and pigments. Would you like to schedule a call to discuss your requirements? Call us at +977 9852029937.";
        }

        // Contact inquiries
        if (lowerMessage.includes('contact') || lowerMessage.includes('call') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
            return "You can reach us at:\n📞 Phone: +977 9852029937\n📧 Email: contact@kshitijinternational.com.np\n\nWe're here to help with all your inquiries!";
        }

        // Greetings
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return "Hello! Welcome to Kshitij International. How can I help you today? We offer machinery, molds, and color pigments for concrete production.";
        }

        // Thank you
        if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            return "You're welcome! If you have any other questions, feel free to ask. You can also contact us at +977 9852029937 for direct assistance.";
        }

        // Default response
        return "I'm here to help you with information about our machinery, molds, and color pigments. For detailed information or specific requirements, please call us at +977 9852029937 or email contact@kshitijinternational.com.np. What would you like to know?";
    }

    function addMessageToChat(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = type === 'user' ? 'user-message' : 'bot-message';
        
        const messageP = document.createElement('p');
        messageP.textContent = message;
        messageDiv.appendChild(messageP);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message typing-indicator';
        typingDiv.innerHTML = '<p>Typing<span class="dots"><span>.</span><span>.</span><span>.</span></span></p>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        return typingDiv;
    }

    // Quick reply buttons (optional enhancement)
    function addQuickReplies() {
        const quickReplies = [
            "Show me machines",
            "Tell me about molds",
            "Color pigments info",
            "Contact information"
        ];

        const quickReplyContainer = document.createElement('div');
        quickReplyContainer.className = 'quick-replies';
        quickReplyContainer.style.cssText = 'display: flex; gap: 0.5rem; flex-wrap: wrap; padding: 1rem; border-top: 1px solid var(--border-color);';

        quickReplies.forEach(reply => {
            const button = document.createElement('button');
            button.textContent = reply;
            button.className = 'quick-reply-btn';
            button.style.cssText = 'padding: 0.5rem 1rem; background: var(--bg-light); border: 1px solid var(--border-color); border-radius: 20px; cursor: pointer; font-size: 0.85rem;';
            button.addEventListener('click', function() {
                chatbotInput.value = reply;
                sendMessage();
            });
            quickReplyContainer.appendChild(button);
        });

        return quickReplyContainer;
    }
});

// Add typing animation CSS
const style = document.createElement('style');
style.textContent = `
    .typing-indicator .dots span {
        animation: blink 1.4s infinite;
        animation-fill-mode: both;
    }
    .typing-indicator .dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    .typing-indicator .dots span:nth-child(3) {
        animation-delay: 0.4s;
    }
    @keyframes blink {
        0%, 80%, 100% { opacity: 0; }
        40% { opacity: 1; }
    }
`;
document.head.appendChild(style);
