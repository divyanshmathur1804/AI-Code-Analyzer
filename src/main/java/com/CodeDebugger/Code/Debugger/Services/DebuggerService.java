package com.CodeDebugger.Code.Debugger.Services;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.stereotype.Service;

@Service
public class DebuggerService {

    private final ChatModel chatModel;

    // Spring AI automatically configures this using your API key
    public DebuggerService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String getFix(String code, String error) {
        String prompt = """
            You are a highly skilled polyglot software engineer.
            Examine the provided code and error message.
            Detect the programming language and provide a fix.
            
            Code: %s
            Error: %s
            """.formatted(code, error);

        // This one line replaces all the manual JSON and HTTP logic
        return chatModel.call(prompt);
    }
}