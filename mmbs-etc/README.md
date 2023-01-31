## Authentication 
__/api/auth__    
> 인증과 관련된 모듈    
    
#### 회원가입
__POST /signUp__    
    
> userId: 문자열    
> userPassword: 문자열    
> userPasswordCheck: 문자열    
> userPhone: 문자열    
> userEmail: 문자열    
> userAddress: 문자열    
> userAddressDetail: 문자열    
> userKidBirth: 문자열    
> recommendedUserId: 문자열   
    
#### 중복확인 (아이디, 이메일)
__POST /checkDuplicate__    
    
> sortation: 문자열 (userEmail, userId)
> value: 문자열
    
#### 아이디 찾기
__POST /findId__    
    
> userName: 문자열     
> userEmail: 문자열    
    
#### 비밀번호 찾기
__POST /findPassword__    
    
> userId: 문자열    
> userName: 문자열     
> userEmail: 문자열    
    
#### 로그인
__POST /signIn__
    
> userId: 문자열
> userPassword: 문자열
    
## User
__/api/user__    
__REQUEST HEADER Bearer token__  
> 회원과 관련된 모듈      
    
#### 회원정보 보기
__GET /__  

#### 회원정보 수정
__PATCH /__    
    
> userPassword: 문자열    
> userPasswordCheck: 문자열    
> userPhone: 문자열    
> userAddress: 문자열    
> userAddressDetail: 문자열        
> userKidBirth: 문자열     

#### 회원 탈퇴 처리
__DELETE /__

