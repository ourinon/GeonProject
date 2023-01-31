-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `mmbs_database` DEFAULT CHARACTER SET utf8mb4;
USE `mmbs_database`;
-- -----------------------------------------------------
-- Table `mmbs_database`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`order` (
  -- 주문번호 uuid
  `order_number` VARCHAR(45),
  -- 회원여부
  `order_user_whether` boolean not null,
  -- 비회원 비밀번호
  `order_guest_password` VARCHAR(20),
  -- 회원 아이디
  `order_user_id` VARCHAR(45),
  -- 사은품
  `order_gift_code` VARCHAR(2),
  -- 주문자 이름
  `order_user_name` VARCHAR(45) NOT NULL,
  -- 주문자 전화번호
  `order_user_phone` VARCHAR(45) NOT NULL,
  -- 주문자 이메일
  `order_user_email` VARCHAR(45) NOT NULL,
  -- 주문 날짜
  `order_datetime` DATETIME NOT NULL,
  -- 수령인 이름
  `order_reciept_name` VARCHAR(45) NOT NULL,
  -- 수령인 전화 번호
  `order_reciept_phone` VARCHAR(45) NOT NULL,
  -- 수령인 주소
  `order_ship_address` TEXT NOT NULL,
  -- 수령인 상세 주소
  `order_ship_address_detail` TEXT NOT NULL,
  -- 최종 결제 금액
  `order_total_price` INT NOT NULL,
  -- 주문 상태
  `order_status` INT NOT NULL,
  -- 배송 회사
  `order_ship_company` VARCHAR(45),
  -- 송장번호
  `order_ship_number` INT,
  -- 배송 메세지
  `order_ship_message` TEXT,
  PRIMARY KEY (`order_number`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`order_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`order_detail` (
  -- 주문상세 시퀀스
  `order_detail_seq` int AUTO_INCREMENT,
  -- 주문번호
  `order_number` VARCHAR(50) NOT NULL,
  -- 제품 아이디
  `product_id` VARCHAR(50) NOT NULL,
  -- 개당 금액
  `product_price` int NOT NULL,
  -- 갯수
  `product_count` int NOT NULL,

  PRIMARY KEY (`order_detail_seq`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`like` (
  -- 좋아요 시퀀스
  `like_seq` int AUTO_INCREMENT,
  -- 좋아요한 제품 아이디
  `like_product_id` int NOT NULL,
  -- 좋아요한 유저의 아이디
  `like_user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`like_seq`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`product` (
  -- 고유번호
  `product_seq` INT AUTO_INCREMENT NOT NULL,
  -- 장르 [국내도서, 외국도서, 전집, 토이/교구, 부모님의 서재]
  `product_genre` VARCHAR(45) NOT NULL,
  -- 고유번호
  `product_isbn` INT,
  -- 제목
  `product_title` text NOT NULL,
  -- 저자
  `product_writer` VARCHAR(45) NULL,
  -- 출판사
  `product_publisher` VARCHAR(45),
  -- 연령 [0~3세, 4~7세, 부모]
  `product_age` VARCHAR(45) NOT NULL,
  -- 출판일
  `product_publication_date` DATE NOT NULL,
  -- 가격
  `product_price` INT NOT NULL,
  -- 할인가격
  `product_sales_price` INT NOT NULL,
  -- 재고
  `product_stock` INT DEFAULT 0,
  -- 좋아요
  `product_like` INT DEFAULT 0,
  -- 입고일
  `product_stocking_date` DATE default NULL,
  -- 상세 설명
  `product_introduce_dtl` text NOT NULL,
  -- 간단한 설명
  `product_introduce` text NOT NULL,
  -- 이미지
  `product_image_url` text NOT NULL,
  -- 판매량
  `product_sales_count` int DEFAULT 0,
  PRIMARY KEY (`product_seq`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`user` (
  -- 아이디
  `user_id` VARCHAR(45) NOT NULL,
  -- 비밀번호
  `user_password` VARCHAR(45) NOT NULL,
  -- 이메일
  `user_email` VARCHAR(45) NOT NULL,
  -- 주소
  `user_address` TEXT NOT NULL,
  -- 상세 주소
  `user_address_detail` TEXT NOT NULL,
  -- 이름
  `user_name` VARCHAR(45) NOT NULL,
  -- 전화번호
  `user_phone` VARCHAR(45) NOT NULL,
  -- 등급
  `user_grade` int DEFAULT 0,
  -- 누적 금액 
  `user_total_amount` INT NOT NULL,
  -- 아이 생일
  `user_kid_birth` VARCHAR(45) DEFAULT NULL,
  -- 가입 날짜
  `user_sign_up_date` DATETIME NOT NULL,
  -- 탈퇴 날짜
  `user_withdraw` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`recommend`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`recommend` (
    -- 추천인 테이블 시퀀스
	`recommend_seq` int AUTO_INCREMENT,
    -- 추천인 (추천 당한 사람)
    `recommended_user_id` VARCHAR(45) NOT NULL, 
    -- 추천 (추천한 사람)
    `recommending_user_id` VARCHAR(45) NOT NULL, 
  PRIMARY KEY (`recommend_seq`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`ask`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`ask` (
    -- 문의 번호
	`ask_id` int NOT NULL AUTO_INCREMENT,
    -- 작성자 아이디 (참조)
	`ask_writer` VARCHAR(45) NOT NULL,
    -- 문의 카테고리
	`ask_sort` VARCHAR(45) NOT NULL,
    -- 문의 내용
	`ask_content` TEXT NOT NULL,
    -- 문의 날짜
	`ask_datetime` DATETIME NOT NULL,
    -- 문의 상태 [-1: 삭제, 0: 문의 접수, 1: 답변완료 상태]
	`ask_status` INT NOT NULL,
    -- 문의 답변
    `ask_reply` TEXT,
  PRIMARY KEY (`ask_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`review` (
	-- 리뷰 시퀀스
    `review_id` int NOT NULL AUTO_INCREMENT,
    -- 리뷰 작성자 아이디
	`review_writer_id` VARCHAR(45) NOT NULL,
    -- 제품 목록
	`review_product_id` INT NOT NULL,
    -- 별점
    `review_score` INT NOT NULL,
    -- 리뷰 내용
	`review_content` VARCHAR(45) NOT NULL,
    -- 리뷰 이미지
    `review_image` TEXT,
    -- 리뷰 날짜
	`review_datetime` DATETIME NOT NULL,
  PRIMARY KEY (`review_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`cart` (
    -- 카트 시퀀스
  `cart_id` int NOT NULL AUTO_INCREMENT,
  -- 유저 아이디
  `cart_user_id` VARCHAR(45) NOT NULL,
  -- 제품 아이디
	`cart_product_id` INT NOT NULL,
  -- 제품 이름
	`cart_product_name` VARCHAR(45) NOT NULL,
  -- 제품 이미지
	`cart_product_image` VARCHAR(45) NOT NULL,
  -- 제품 개당 가격
	`cart_product_price` INT,
  -- 제품 개 수
	`cart_product_amount` INT,
  PRIMARY KEY (`cart_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`grade` (
  -- 등급 아이디 [0, 1, 2, 3, 4]
  `grade_id` int AUTO_INCREMENT,
  -- 등급 이름 [씨앗, 새싹, 풀잎, 나무, 열매]
  `grade_name` varchar(45) NOT NULL,
  -- 할인율 [0, 3, 5, 7, 10]
  `grade_discount` INT NOT NULL,
  -- 기준 누적 금액 [0, 10, 30, 50, 70]
  `grade_total_price` INT NOT NULL,
  PRIMARY KEY (`grade_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`coupon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`coupon` (
    -- 쿠폰 코드
	`coupon_code` VARCHAR(10),
    -- 쿠폰 이름
    `coupon_name` varchar(200) NOT NULL,
    -- 쿠폰 종류
    `coupon_class` varchar(5) NOT NULL,
    -- 혜택가
    `coupon_benefit` INT NOT NULL,
    -- 쿠폰 설명
    `coupon_description` INT NOT NULL,
    -- 쿠폰 이미지
    `coupon_image` TEXT,
  PRIMARY KEY (`coupon_code`))

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`coupon_use`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`coupon_use` (
    -- 쿠폰 사용 순번
	`coupon_use_id` INT AUTO_INCREMENT,
    -- 쿠폰 사용 유저 아이디
    `coupon_use_user_id` varchar(45) NOT NULL,
    -- 쿠폰 사용 쿠폰 코드
    `coupon_use_coupon_code` varchar(5) NOT NULL,
    -- 쿠폰 사용 가능 여부
    `coupon_use_state` boolean default true,
    -- 쿠폰 등록일
    `coupon_use_date` date,
  PRIMARY KEY (`coupon_use_id`))

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;

-- -----------------------------------------------------
-- Table `mmbs_database`.`gift`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mmbs_database`.`gift` (
    -- 사은품 코드
	`gift_code` VARCHAR(2),
    -- 사은품 이름
    `gift_name` VARCHAR(255) NOT NULL,
    -- 사은품 이미지
    `gift_image` TEXT NOT NULL,
  PRIMARY KEY (`gift_code`))

ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci;