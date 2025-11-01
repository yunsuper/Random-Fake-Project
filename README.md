# 🇰🇷 Local Korean Data Generator

로컬 환경에서 Node.js와 Express를 사용하여 한국 특화된 더미(Dummy) 사용자 정보를 무한으로 생성하는 간단한 API 서버입니다.

## ✨ 주요 특징 (Features)

- **한국 특화 데이터**: 이름(한글 3글자), 전화번호(010-xxxx-xxxx) 등 한국 환경에 맞춘 형식의 데이터를 생성합니다.
- **무한 생성**: URL 파라미터를 통해 원하는 만큼의 사용자 정보를 즉시 생성할 수 있습니다.
- **간편한 접근**: 단일 엔드포인트를 통해 데이터에 쉽게 접근하고 테스트할 수 있습니다.
- **기술 스택**: Node.js와 Express.js를 사용하여 빠르고 가볍게 구현되었습니다.

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 | 설명 |
| --- | --- | --- |
| **Backend** | Node.js (ESM), Express.js | API 서버 구동 및 라우팅 |
| **Data Generation** | `faker-js/faker` | 랜덤 데이터 생성 라이브러리 (한국어 로케일 사용) |

## 📦 설치 및 사용법 (Installation & Usage)

### 1. 전제 조건

- **Node.js**: Node.js 18 이상 버전이 설치되어 있어야 합니다.

### 2. 의존성 설치

프로젝트 루트에서 Express와 Faker 라이브러리를 설치합니다.

```
npm install express @faker-js/faker

```

### 3. 서버 실행

터미널에서 서버를 실행합니다.

```
node index.js

```

### 4. 사용 방법 (무한 생성)

브라우저의 주소창에 다음 형식으로 접속하면 랜덤한 한국 특화 사용자 목록을 JSON 형식으로 볼 수 있습니다.

🔗 **URL 형식**: `http://localhost:{PORT}/list/{숫자}`

**예시**:

- 10명의 사용자 생성: `http://localhost:3001/list/10`
- 100명의 사용자 생성: `http://localhost:3001/list/100`
