# Public 디렉토리

이 디렉토리는 정적 파일을 관리하는 곳입니다. 이 폴더의 파일들은 빌드 시 그대로 복사됩니다.

## 용도

여기에 넣는 파일들은 **절대 경로**로 참조됩니다:
- `/favicon.ico`
- `/robots.txt`
- `/logo.png`

## 추천 파일

- `favicon.ico` - 브라우저 탭 아이콘
- `logo192.png`, `logo512.png` - PWA 아이콘
- `robots.txt` - SEO 설정
- `manifest.json` - PWA 설정

## src/assets와의 차이점

| public/ | src/assets/ |
|---------|-------------|
| 절대 경로로 참조 (`/image.png`) | import로 참조 |
| 빌드 시 그대로 복사 | 빌드 시 최적화 |
| HTML에서 직접 사용 | 컴포넌트에서 import |
| 파일명 변경 안됨 | 해시가 추가되어 캐싱 최적화 |

## 사용 예시

```html
<!-- index.html에서 -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta property="og:image" content="/og-image.jpg" />
```

**일반적으로 포트폴리오 이미지는 `src/assets/images/`에 넣는 것을 권장합니다!**
