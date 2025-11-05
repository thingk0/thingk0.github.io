# Assets 디렉토리

이 디렉토리는 프로젝트에서 사용하는 이미지, 데이터 등의 리소스 파일을 관리합니다.

## 디렉토리 구조

### 📁 `images/`
프로젝트에서 사용할 이미지 파일들을 넣는 곳입니다.

**추천 구조:**
```
images/
├── profile/          # 프로필 사진
├── projects/         # 프로젝트 스크린샷, 썸네일
├── icons/            # 아이콘 이미지
└── background/       # 배경 이미지
```

**사용 예시:**
```jsx
import profileImg from './assets/images/profile/photo.jpg';

function Hero() {
  return <img src={profileImg} alt="Profile" />;
}
```

### 📁 `data/`
프로젝트 정보, 스킬 목록 등의 데이터를 JSON 파일로 관리하는 곳입니다.

**추천 파일:**
- `projects.json` - 프로젝트 목록 및 상세 정보
- `skills.json` - 기술 스택 정보
- `experience.json` - 경력 정보

**사용 예시:**
```jsx
import projectsData from './assets/data/projects.json';

function Projects() {
  return projectsData.map(project => (
    <div key={project.id}>{project.title}</div>
  ));
}
```

## 지원 파일 형식

### 이미지
- `.jpg`, `.jpeg` - 사진
- `.png` - 투명 배경이 필요한 이미지
- `.svg` - 아이콘, 로고 (권장)
- `.webp` - 최적화된 웹 이미지

### 데이터
- `.json` - 구조화된 데이터
