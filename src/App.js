import { css } from "@emotion/react";
import Avatar from "./components/common/Avatar";
import Container from "./components/common/Container";
import Typography from "./components/common/Typography";
import Header, { Block } from "./components/layout/Header";
import SideBar from "./components/layout/SideBar";
import MediaBox from "./components/common/MediaBox";
import Badge from "./components/common/Badge";
import MediaCard from "./components/common/MediaCard";
import { sliceMap } from "./utils/tools";
import { Fragment, useEffect, useRef, useState } from "react";

const tags = [
  "전체",
  "게임",
  "음악",
  "실시간",
  "믹스",
  "랩",
  "만화 영화",
  "액션 어드벤처 게임",
  "요리",
  "최근에 업로드된 동영상",
  "감상한 동영상",
  "새로운 맞춤 동영상",
];

//  유튜브 자료 긁어오기
// JSON.stringify([...document.querySelectorAll('ytd-rich-item-renderer')].map(_=>({
//   title: _.querySelector('#video-title')?.textContent,
//   src: _.querySelector('yt-img-shadow img')?.getAttribute('src'),
//   author: _.querySelector('a.yt-formatted-string')?.textContent,
//   avatar: _.querySelector('a#avatar-link img')?.getAttribute('src'),
//   view: _.querySelector('#metadata-line .style-scope:nth-child(1)')?.textContent,
//   timestamp: _.querySelector('#metadata-line .style-scope:nth-child(2)')?.textContent
// })).filter(_=>_));

const mediaDatas = [
  {
    title:
      "🛻 [𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭] 이거 틀면 리얼;; 옆차선에서 노래 제목 알려달라고 한다. feat.국내힙합",
    src: "https://i.ytimg.com/vi/-iPoqSkgkEE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQrIDMVXgZ0D9EgeBTd7lb7XoxNQ",
    author: "쉐어룸 ꜱʜᴀʀᴇ ʀᴏᴏᴍ",
    avatar:
      "https://yt3.ggpht.com/Ozqhv1ThEZo5WTqQXtKc3U6gxER88myw8_vcQ9IQYquXk22JWJLld5GfLEc8UIuPhTpUStDe0o0=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 50만회",
    timestamp: "5개월 전",
  },
  {
    title:
      "[Christian lofi mix 1.0🎵]  12 Hour STUDY  WITH ME ft. 25 Minute focused pomodoro timer + 5-min Break",
    src: "https://i.ytimg.com/vi/tZGRAXOWhdk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-lC4nEn8wUJcbZG7kMnvFHgjJ6g",
    author: "Dr. Queen's Corner TV",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLSYeMR31DYKJuvAIaC2DqP7txidhMGS7WkzkhoNFA=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 30만회",
    timestamp: "스트리밍 시간: 1년 전",
  },
  {
    title: "React.Fragment는 무엇? 리액트 개발자라면 꼭 알아야됨",
    src: "https://i.ytimg.com/vi/XuF6Qem0cTE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUeqdzoEpOHy88eknhKp_gfmeYtQ",
    author: "별코딩",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLRKgG532ebNLy46EmuofIn9IExeZbLh2yEmhveL=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 317회",
    timestamp: "1일 전",
  },
  {
    title:
      "잘 듣다가 훅에서 너무 좋아서 뒷목 잡고 쓰러져도 책임 못져 ✨ Relaxing Pop Music, Soft Pop Music 2022 💝Lofi Hip Hop Vol.13",
    src: "https://i.ytimg.com/vi/gkH-Lc-h3rA/hq720_live.jpg?sqp=COTF7pUG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYphiiXCV8eoAGNeefWXI4yUwMiQ",
    author: " Deep Mood",
    avatar:
      "https://yt3.ggpht.com/Udu_Pbt5N-4_c1-J-sdqGViDgtX9HeCimWhEIM8fQFuERrIUDFCQ_zh9rDCxVwlFq0YHp2KNf2I=s88-c-k-c0x00ffffff-no-rj",
    view: "412명 시청 중",
    timestamp: "",
  },
  {
    title: "혼자 텐션 서서히 끌어올릴 때 듣는 박재범 노래",
    src: "https://i.ytimg.com/vi/rxZg9nZBC7g/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5mtTLfs0vTBMylQigWMNkGykwIQ",
    author: "준개의 렛뮤 let’s music",
    avatar:
      "https://yt3.ggpht.com/GfjJpRGZHlxIIvoS_9URmUSdvAUtps1FDJOvmJ_GVVi6uBJqv2s6z6uSZUEMuqxMI_ahb637R00=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 4.4만회",
    timestamp: "1년 전",
  },
  {
    title: "[Playlist] 여행 갈까? 물론 준비물은 너야｜kpop, travel, ready",
    src: "https://i.ytimg.com/vi/kpk6PETaKqw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCghJCD3z6-DbKwvLTJoVB_GKv3mQ",
    author: "KozyPop Girl - 𝗣𝗹𝗮𝘆𝗹𝗶𝘀𝘁",
    avatar:
      "https://yt3.ggpht.com/wN_XgvmJXL8LEs5fsj7oYiUh9vrK1_7fycqJMprXH9z5HQasQbT7jPway5Ym-ucrPIOdnBBq0Q=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 1천회",
    timestamp: "15시간 전",
  },
  {
    title:
      "Ghibli Relaxing || 지브리 피아노 💓 편안한 음악 🎶🎶 치히로의 행방불명, 천공의 성, 하울의 움직이는 성,...",
    src: "https://i.ytimg.com/vi/BVKVeqVIeHQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXh8w79ocY3MDjPh05JfuGPAUKTw",
    author: "Ghibli Piano Music",
    avatar:
      "https://yt3.ggpht.com/sdPYhKVyKGvw7lepJFWJ5QjkXRHUB6QUi_zsNc6Gy479x4SUcLUnSZrj2uvUTC43DVXzg7PDPYc=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 135만회",
    timestamp: "8개월 전",
  },
  {
    title: "IE 추모식에 [개발자] 들을 초대합니다.",
    src: "https://i.ytimg.com/vi/tPd36oJS3Oo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBILTl0PL4MI1XzxDw9hvPJCt646A",
    author: "노마드 코더 Nomad Coders",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLTUh5DI9RQkZcNRxzVqXMfyO2jB99F1k49ttgFbrA=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 2.5만회",
    timestamp: "2일 전",
  },
  {
    title:
      "[inflaylist] 공부/작업 할 때 집중해서 듣기 좋은 음악✍ | 4 hour playlist | lofi, piano | 직장인 | 대학생 | 프리랜서 | 취준생",
    src: "https://i.ytimg.com/vi/qMwzWk81tVM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXGs9frK8ne87AX0AFcYyts8jYwQ",
    author: "인프런 - 지식을 배우고 나눠요",
    avatar:
      "https://yt3.ggpht.com/D-H9olfc9jwCSLlluq3_vnpMltSkLlVEwBXGsEm72WacL4sGNYL7GIH4CGO-99Qj4GEFtCDAXA=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 121만회",
    timestamp: "1년 전",
  },
  {
    title:
      "박재범의 30분 논스탑 콘서트🤘 | [DF CONCERT] Jay Park with TOMMY JEANS",
    src: "https://i.ytimg.com/vi/z7TqTp8ZHF0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCotV_-qPHqv9oj4LJ6YU5z7la0A",
    author: "dingo freestyle",
    avatar:
      "https://yt3.ggpht.com/ytc/AKedOLThNDRUPv0RosQ1iyBPvHytgl12-Sc3-xNUtGdAsg=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 212만회",
    timestamp: "1년 전",
  },
  {
    title:
      "기분전환이 필요할 때 - 기분전환시키는 Soul/R&b곡 - Playlist Soul 2022",
    src: "https://i.ytimg.com/vi/5nQ_C0MjgbM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_jkmCB-etQRK7_LVtkY3codzLGQ",
    author: "1 Billion view",
    avatar:
      "https://yt3.ggpht.com/TwZY_CXG8gsoqGwySzR7br2ZxwmZ0AW8rsQKdUlEjw1aHiv_MG6VgDCSxVm06xIGrCbZTUti=s68-c-k-c0x00ffffff-no-rj",
    view: "조회수 50만회",
    timestamp: "4개월 전",
  },
  {
    title:
      "99%가 잘못알고 있는 승모근의 발달 | 책상앞에서 5분만 투자해보세요! 확달라집니다",
    src: "https://i.ytimg.com/vi/6837LCEQza0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6XN6Uukqt72LHnt3tvtFn3lU_9g",
    author: "운동하는데이브",
    avatar: null,
    view: "조회수 121만회",
    timestamp: "4개월 전",
  },
  {
    title: "나의 해방일지 - 부름에 따를 용기",
    src: "https://i.ytimg.com/vi/roL7Ph56hNY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVhWvB_bOvnmN6mnuQcdtlMAmUAA",
    author: "HigherSelfKorea",
    avatar: null,
    view: "조회수 1.1만회",
    timestamp: "13일 전",
  },
  {
    title: "C 언어 무료 강의 (입문부터 게임 개발까지)",
    src: "https://i.ytimg.com/vi/q6fPjQAzll8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-Ks3uF_Os-SRW3nIFAJxD0qaqLA",
    author: "나도코딩",
    avatar: null,
    view: "조회수 118만회",
    timestamp: "1년 전",
  },
  {
    title:
      "[𝐩𝐥𝐚𝐲𝐥𝐢𝐬𝐭] 비 올 때 틀어 놓기 좋은 감성힙합 모음🎵🎶 I 에픽하이, 헤이즈, 다이나믹듀오, 페노메코 + ..",
    src: "https://i.ytimg.com/vi/4FRRTSuhIBk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_95wIh6x-zYeXGda2R_966LS2vg",
    author: "힙재 HIPJAE 🎵",
    avatar: null,
    view: "조회수 17만회",
    timestamp: "12일 전",
  },
  {
    title: "LO:FI",
    src: null,
    author: "InYourChill",
    avatar: null,
    view: "1천명 시청 중",
    timestamp: "",
  },
  {
    title: "제발 깃허브 액션🔥 모르는 개발자 없게해 주세요 🙏",
    src: null,
    author: "드림코딩",
    avatar: null,
    view: "조회수 6천회",
    timestamp: "16시간 전",
  },
  {
    title:
      "[playlist] 나만 듣고 싶은 국내 인디 음악 I 유희열의 라디오 천국 감성 I 숨은 명곡 모음 I 바이닐 감성",
    src: null,
    author: "유튜브앤레코드",
    avatar: null,
    view: "조회수 8.4천회",
    timestamp: "5개월 전",
  },
  {
    title:
      "아이유(IU)의 킬링보이스를 라이브로! - 하루 끝, 너의 의미, 스물셋, 밤편지, 팔레트, 가을 아침, 삐삐, Blueming, 에잇, Coin, 라일락 ㅣ 딩고뮤직",
    src: null,
    author: "딩고 뮤직 / dingo music",
    avatar: null,
    view: "조회수 4638만회",
    timestamp: "1년 전",
  },
  {
    title: "FULL VINYL | Late 70's Japanese Jazz | KMGT",
    src: null,
    author: "The Moment",
    avatar: null,
    view: "조회수 36만회",
    timestamp: "3개월 전",
  },
  {
    title: "[AutoCAD강좌][13강] 태극기그리기_위메이드아이앤씨",
    src: null,
    author: "Wemade I&C위메이드아이앤씨",
    avatar: null,
    view: "조회수 4.8만회",
    timestamp: "6년 전",
  },
  {
    title:
      "[playlist] 올 여름도 청량 없인 못 견디지#2 | 우리의 청춘스타🎵가 들려주는 시원한 여름 노래 모음 | 청량한 아이돌 노래모음 | Kpop",
    src: null,
    author: "조거북",
    avatar: null,
    view: "조회수 9.5만회",
    timestamp: "9일 전",
  },
  {
    title:
      "[Playlist] OST만 들으면서 일해도 하루는 순삭이지!!😉 | 2,30대를 위한 추억의 드라마 OST모음 Vol.08",
    src: null,
    author: " Deep Mood",
    avatar: null,
    view: "887명 시청 중",
    timestamp: "",
  },
];

let load = false;

function App() {
  const [loading, setLoading] = useState(false);
  const [stacks, setStacks] = useState([]);

  const contents = () =>
    sliceMap(
      mediaDatas,
      ({ title, src, author, avatar, view, timestamp }, idx) => (
        <MediaCard
          key={title + idx}
          title={title}
          src={src}
          author={author}
          avatar={avatar}
          view={view}
          timestamp={timestamp}
        />
      ),
      (sliced) => (
        <Container
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 15px;
            margin-top: 22px;
          `}>
          {sliced}
        </Container>
      ),
      4
    );

  useEffect(() => {
    let done = false;
    const handleScroll = () => {
      const height = document.body.scrollHeight - window.innerHeight;
      if (document.body.scrollTop === height) {
        done = false;
        if (done) return;
        done = true;
        console.log("더보기");
        setStacks(stacks.concat(contents()));
      } else {
        done = true;
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stacks]);

  return (
    <Container
      maxWidth={"full"}
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}>
      <Header brand={"kimtube"} />
      <Container
        maxWidth='full'
        css={{
          display: "flex",
          flex: 1,
        }}>
        <SideBar menuList={[]} />
        <Container
          css={css`
            flex: 1;
            margin-left: 240px;
          `}>
          <Block
            css={css`
              display: flex;
              justify-content: center;
              gap: 10px;
              padding: 12px;
              border-top-width: 1px;
              border-top-style: solid;
              border-top-color: #99999935;
              border-bottom-width: 1px;
              border-bottom-style: solid;
              border-bottom-color: #99999935;
            `}>
            {tags.map((tag, idx) => (
              <Badge
                key={tag + idx}
                color={idx === 0 ? "dark" : "gray"}
                variant={"circle"}
                size={"normal"}
                style={{
                  fontSize: 14,
                  ...(idx !== 0 && {
                    backgroundColor: "#99999935",
                    borderColor: "#99999965",
                  }),
                }}>
                {tag}
              </Badge>
            ))}
          </Block>
          <Container
            maxWidth={"full"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "90%",
              rowGap: 25,
            }}>
            {contents()}
            {stacks.map((_, idx) => (
              <Fragment key={idx}>{_}</Fragment>
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
