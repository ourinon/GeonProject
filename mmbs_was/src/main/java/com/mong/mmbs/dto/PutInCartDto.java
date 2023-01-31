package com.mong.mmbs.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PutInCartDto {
	@NotBlank
	private String cartUserId;
	private Integer cartProductId;
	@NotBlank
	private String cartProductName;
	@NotBlank
	private String cartProductImage;
	private Integer cartProductPrice;
	private Integer cartProductAmount;
}
