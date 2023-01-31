package com.mong.mmbs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mong.mmbs.dto.DeleteFromCartDto;
import com.mong.mmbs.dto.FindIdDto;
import com.mong.mmbs.dto.FindPasswordDto;
import com.mong.mmbs.dto.PutInCartDto;
import com.mong.mmbs.dto.ResponseDto;
import com.mong.mmbs.dto.SignInDto;
import com.mong.mmbs.dto.SignInResponseDto;
import com.mong.mmbs.dto.SignUpDto;
import com.mong.mmbs.entity.CartEntity;
import com.mong.mmbs.entity.RecommendEntity;
import com.mong.mmbs.entity.UserEntity;
import com.mong.mmbs.repository.CartRepository;
import com.mong.mmbs.repository.RecommendRepository;
import com.mong.mmbs.repository.UserRepository;
import com.mong.mmbs.security.TokenProvider;

@Service
public class AuthService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    RecommendRepository recommendRepository;
    @Autowired
    TokenProvider tokenProvider;
  

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
    //입력한 유저이름과 이메일이 둘다 맞는지만 판단하는 메서드
    public ResponseDto<?> findId(FindIdDto dto) {
    	String userName = dto.getUserName();
    	String userEmail = dto.getUserEmail();
    	
    	UserEntity userEntity = userRepository.findByUserEmailAndUserName(userEmail, userName);
    	if (userEntity == null) return ResponseDto.setFailed("일치하는 정보가 없음"); 
    	return ResponseDto.setSuccess("성공", userEntity.getUserId());
    }
    
    public ResponseDto<?> findPassword(FindPasswordDto dto){
    	String userId = dto.getUserId();
    	String userName = dto.getUserName();
    	String userEmail = dto.getUserEmail();
    	
    	UserEntity userEntity = userRepository.findByUserIdAndUserNameAndUserEmail(userId, userName, userEmail);
    	if(userEntity == null) return ResponseDto.setFailed("일치하는 정보가 없음");
    	return ResponseDto.setSuccess("성공", userEntity.getUserPassword());
    }

    public ResponseDto<?> signUp(SignUpDto dto) {

        // description: 검증 프로세스 //

        // description: 아이디 중복 검증 //
        String userId = dto.getUserId();
        // * repository.existsById(기본키 값) :
        // * 데이터베이스에서 기본키에 해당하는 데이터가 존재하면 true / 존재하지 않으면 false
        if (userRepository.existsById(userId))
            return ResponseDto.setFailed("Exist ID");

        // description: 이메일 중복 검증 //
        String userEmail = dto.getUserEmail();
        if (userRepository.existsByUserEmail(userEmail))
            return ResponseDto.setFailed("Exist Email");
        // description: 비밀번호가 서로 같은지 검증 //
        String userPassword = dto.getUserPassword();
        String userPasswordCheck = dto.getUserPasswordCheck();
        if (!userPassword.equals(userPasswordCheck))
            return ResponseDto.setFailed("Password Does not match");
        // description: 필수값 모두 입력 됐는지 검증 //

        // description: 실제 프로세스 //

        // description: 추천인 //
        String recommendedUserId = dto.getRecommendedUserId();
        System.out.println("recommendedUserId : " + recommendedUserId);
        if (recommendedUserId != null && !recommendedUserId.isEmpty()) {
            // description: 추천인 존재 여부 검증 //
            if (!userRepository.existsById(recommendedUserId))
                return ResponseDto.setFailed("Recommended User Does Not Exist");

            // description: Entity 생성 //
            RecommendEntity recommendEntity = RecommendEntity.builder().recommendedUserId(recommendedUserId)
                    .recommendingUserId(userId).build();
            // description: Repository에 Entity 저장 //
            System.out.println(recommendEntity.toString());
            recommendRepository.save(recommendEntity);

            // todo: 추천 당한 사람에게 쿠폰 지급 //
            
        }
        
        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(userPassword);
        dto.setUserPassword(encodedPassword);
//        UserEntity.setUserPassword(passwordEncoder.encode(userPassword));

        // description: Entity 생성 //
        UserEntity userEntity = new UserEntity(dto);
        // description: Repository에 Entity 저장 //
        try {
        	System.out.println(userEntity.toString());
        	userRepository.save(userEntity);        	
        } catch (Exception error) {
        	return ResponseDto.setFailed("DataBase Error");
        }

        return ResponseDto.setSuccess("Sign Up Success", null);
    }
    
    public ResponseDto<SignInResponseDto> signIn(SignInDto dto) {
    	// 필수로 아이디와 패스워드를 받아와야 한다. @NotBlank //
    	// 데이터가 있는지 검증 //
    	String userId = dto.getUserId();
    	String userPassword = dto.getUserPassword();
    	
    	// 암호화 적용으로 더 이상 불필요 2023.01.27. 이승아
//    	try {
//    		boolean existed = userRepository.existsByUserIdAndUserPassword(userId, userPassword);
//    		if(!existed) return ResponseDto.setFailed("Sign In Information Does Not Match");    		
//    	} catch (Exception error) {
//    		return ResponseDto.setFailed("DataBase Error");
//    	}
    	
    	UserEntity userEntity = null;
    	try {
    		userEntity = userRepository.findByUserId(userId);    
//    		boolean matched = passwordEncoder.matches(userPassword, userEntity.getUserPassword());
//    		System.out.println("userId : " + userId + "userEntity : " + userEntity + "userPassword : " + userPassword);
//    		if (!matched) return ResponseDto.setFailed("Password Not Matched");
    	} catch (Exception error) {
    		return ResponseDto.setFailed("DataBase Error");
    	}
    	
    	userEntity.setUserPassword("");
    	
    	String token = tokenProvider.create(userId);
    	int exprTime = 3600000;
    	
    	SignInResponseDto signInResponseDto = new SignInResponseDto(token, exprTime, userEntity);
    	return ResponseDto.setSuccess("Sign In Success", signInResponseDto);
    
    }
}

