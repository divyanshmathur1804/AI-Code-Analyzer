package com.CodeDebugger.Code.Debugger.Dto;

/**
 * This record maps the incoming JSON request.
 * {
 * "code": "your buggy code here",
 * "error": "the error message here"
 * }
 */
public record DebugRequest(String code, String error) {
}