package com.mong.mmbs.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/board")
public class BoardController {
	
	@GetMapping("/")
	public String getBoard(@AuthenticationPrincipal String userId) {
		return "로그인 된 사용자는 " + userId + " 입니다.";
	}
}
