package com.mong.mmbs.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mong.mmbs.dto.DtlLikepageDto;
import com.mong.mmbs.dto.ResponseDto;
import com.mong.mmbs.service.DtlpageService;

@RestController
@RequestMapping("/api/auth")
public class DtlpageController {
	@Autowired DtlpageService dtlpageService;
	@GetMapping("/dtlPage/{productSeq}")
	public ResponseDto<?>dtlPage(@PathVariable("productSeq")int productSeq){
	return dtlpageService.dtlPage(productSeq);
	}
//	@PostMapping("/dtlLikePage")
//	public ResponseDto<?>dtllikePage(@RequestBody DtlLikepageDto requestbody){
//		return dtlpageService.dtllikePage(null);
//	}
}
