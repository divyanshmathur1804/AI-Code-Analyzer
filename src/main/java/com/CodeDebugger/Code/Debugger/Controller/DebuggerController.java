package com.CodeDebugger.Code.Debugger.Controller;

import com.CodeDebugger.Code.Debugger.Dto.DebugRequest;
import com.CodeDebugger.Code.Debugger.Services.DebuggerService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/debugger")
@CrossOrigin
public class DebuggerController {

    private final DebuggerService debuggerService;

    public DebuggerController(DebuggerService debuggerService) {
        this.debuggerService = debuggerService;
    }

    @PostMapping("/fix")
    public String fixMyCode(@RequestBody DebugRequest request) {
        return debuggerService.getFix(request.code(), request.error());
    }
}