<script lang="ts">
	import EducationItem from '$lib/component/About/EducationItem.svelte';
	import PaperItem from '$lib/component/About/PaperItem.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';

	type EducationType = {
		degree: string;
		school: string;
		from: Date;
		to?: Date;
		note?: string;
		link?: string;
	};

	let educations: EducationType[] = [
		{
			degree: '박사',
			school: 'KAIST, 전산학부, Software Architecture Lab',
			from: new Date('2012-03-01'),
			link: 'http://salab.kaist.ac.kr'
		},
		{
			degree: '석사',
			school: 'KAIST, 소프트웨어공학프로그램 학과',
			from: new Date('2010-09-01'),
			to: new Date('2012-02-28'),
			note: 'KAIST-CMU MSIT-SE 공동학위 프로그램'
		},
		{
			degree: '석사',
			school: 'Carnegie Mellon University, MSIT-SE',
			from: new Date('2010-09-01'),
			to: new Date('2012-02-28'),
			note: 'KAIST-CMU MSIT-SE 공동학위 프로그램',
			link: 'https://mse.s3d.cmu.edu/program-history/msit-se/index.html'
		},
		{
			degree: '학사',
			school: 'KAIST, 전산학과',
			from: new Date('2005-02-01'),
			to: new Date('2010-08-31'),
			link: 'https://cs.kaist.ac.kr'
		}
	];

	type PaperType = {
		title: string;
		authors: string[];
		link: string;
		date: Date;
		conference?: { title: string; location: string; date: string };
		journal?: { title: string; volume: string; pages: string; date: string };
	};

	let papers: PaperType[] = [
		{
			title:
				'Reconstruction of execution architecture view using dependency relationships and execution traces',
			authors: ['Hwi Ahn', 'Sungwon Kang', 'Seonah Lee'],
			conference: {
				title: 'The 33rd ACM/SIGAPP Symposium On Applied Computing',
				location: 'Pau, France',
				date: 'April 9 - 13, 2018'
			},
			link: 'https://www.sigapp.org/sac/sac2018/',
			date: new Date('2018-04-09')
		},
		{
			title: 'Poster: Reconstruction of Runtime Software Architecture for Object-Oriented Systems',
			authors: ['Hwi Ahn'],
			conference: {
				title: 'The 30th ACM/SIGAPP Symposium On Applied Computing - Student Research Competition',
				location: 'Salamanca, Spain',
				date: 'April 13 - 17, 2015'
			},
			link: 'https://www.sigapp.org/sac/sac2015/',
			date: new Date('2015-04-13')
		},
		{
			title:
				'A Case Study Comparison of Variability Representation Mechanisms with the HeRA Product Line',
			authors: ['Hwi Ahn', 'Sungwon Kang', 'Jihyun Lee'],
			conference: {
				title: 'The 13th IEEE International Conference on Computer and Information Technology',
				location: 'Sydney, Australia',
				date: 'Dec 3 - 5, 2013'
			},
			link: 'https://conference.researchbib.com/view/event/27549/',
			date: new Date('2013-12-03')
		},
		{
			title: 'Analysis of Software Product Line Architecture Representation Mechanisms',
			authors: ['Hwi Ahn', 'Sungwon Kang'],
			conference: {
				title:
					'9th ACIS International Conference on Software Engineering Research, Management and Applications',
				location: 'Baltimore, Maryland, USA',
				date: 'August 10 - 12, 2011'
			},
			link: 'http://orion.towson.edu/~sera/',
			date: new Date('2011-08-10')
		},
		{
			title: '휘처 모델을 위한 가변성 표현 방법의 비교',
			authors: ['안휘', '강성원'],
			conference: {
				title: '2010 한국 소프트웨어공학 학술대회 (KSEJW2010)',
				location: '제주도, 대한민국',
				date: '8월 20 - 21, 2010'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2010-08-20')
		},
		{
			title:
				'A Comparison of Software Product Line Architecture Design Methods from the Practicality Viewpoint',
			authors: ['안휘', '강성원'],
			conference: {
				title: '2009 한국 소프트웨어공학 학술대회 (KCSE2009)',
				location: '평창, 대한민국',
				date: '2월 09 - 11, 2009'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2009-02-09')
		},
		{
			title: '도메인 뷰포인트를 통한 소프트웨어 프로덕트 라인 아키텍처 설계방법들의 비교',
			authors: ['안휘', '강성원', '김진규'],
			journal: {
				title: '소프트웨어공학소사이어티 논문지',
				volume: '21(4)',
				pages: '107',
				date: '2008년 12월'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2008-12-01')
		}
	].sort((a, b) => b.date.getTime() - a.date.getTime());

	let papers2: PaperType[] = [
		{
			title:
				'Poster: Architecture Reconstruction and Evaluation of Blockchain Open Source Platform',
			authors: ['Jungho Kim', 'Sungwon Kang', 'Chan-Gun Lee', 'Hwi Ahn', 'Changsup Keum'],
			conference: {
				title: 'The 40th International Conference on Software Engineering',
				location: 'Gotenburg, Sweden',
				date: 'May 27 - June 3, 2018'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2018-05-27')
		},
		{
			title: 'Critical Analysis of Feature Model Evolution',
			authors: ['Sungwon Kang', 'Younghun Han', 'Hwi Ahn', 'Jihyun Lee'],
			conference: {
				title: 'The 8th International Conference on Software Engineering and Service Science',
				location: 'Beijing, China',
				date: 'November 24-26, 2017'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2017-11-24')
		},
		{
			title: 'Comparison of Software Product Line Test Derivation Methods from the Reuse Viewpoint',
			authors: ['Sungwon Kang', 'Jungmin Kim', 'Haeun Baek', 'Hwi Ahn', 'Pilsu Jung', 'Jihyun Lee'],
			conference: {
				title: 'The 6th International Conference on Software and Computer Applications',
				location: 'Bangkok, Tailand',
				date: 'Febuary 26 - 28, 2017'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2017-02-26')
		},
		{
			title:
				'소프트웨어 제품라인 개발을 위한 합성적 피처 모델 CFM과 CFM을 지원하는 가변성 모델링 도구 SVM',
			authors: ['강성원', '한영훈', '안휘', '이지현'],
			journal: {
				title: '한국정보과학회지',
				volume: '36(4)',
				pages: '9-17',
				date: '2018년 4월'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2018-04-01')
		},
		{
			title: '아키텍처 변환 패턴을 이용한 소프트웨어 시스템 진화 프레임워크',
			authors: ['박태현', '안휘', '강성원', '박종빈', '황상철'],
			journal: {
				title: '한국정보과학회 소프트웨어공학 소사이어티 논문지',
				volume: '26(1)',
				pages: '17-29',
				date: '2013년 3월'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2013-03-01')
		},
		{
			title: '인공신경망을 이용한 코드 변경 추천 시스템',
			authors: ['이준범', '강성원', '안휘', '정필수', '이선아'],
			conference: {
				title: '제 20회 한국 소프트웨어공학 학술대회(KCSE 2018)',
				location: '평창, 대한민국',
				date: '1월 29 - 31, 2018년'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2018-01-29')
		},
		{
			title: '피처-요구사항 간 플랫폼 추적성 구축 관리 도구',
			authors: ['심재선', '안휘', '한영훈', '강성원'],
			conference: {
				title: '2016 한국 한국컴퓨터종합학술대회 (KCC 2016)',
				location: '제주도, 대한민국',
				date: '6월 29 - 7월 01, 2016년'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2016-06-29')
		},
		{
			title: '사용 시나리오 분석을 위한 부분 실행 아키텍처의 도출 방법',
			authors: ['정필수', '허준행', '안휘', '강성원', '권오인', '서만수'],
			conference: {
				title: '제 17회 한국 소프트웨어공학 학술대회(KCSE 2015)',
				location: '제주도, 대한민국',
				date: '1월 28 - 30일, 2015년'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2015-01-28')
		},
		{
			title: '소프트웨어 프로덕트 라인 가변성 표현 언어의 비교',
			authors: ['강성주', '안휘', '강성원', '신영미', '김상기'],
			conference: {
				title: '2010 한국 소프트웨어공학 학술대회(KCSE 2010)',
				location: '제주도, 대한민국',
				date: '2월 08 - 10일, 2010년'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2010-02-08')
		},
		{
			title: '전술 정보 교환을 위한 VMF와 Link-16 메시지 간의 변환 기술',
			authors: ['김진규', '강성원', '이우진', '안휘', '이지현', '김명철', '임원기', '이노복'],
			conference: {
				title: '2009 한국소프트웨어공학기술 합동워크샵 프로그램',
				location: '제주도, 대한민국',
				date: '7월 23 - 25, 2009년'
			},
			link: 'http://salab.kaist.ac.kr/pubs',
			date: new Date('2009-07-23')
		}
	].sort((a, b) => b.date.getTime() - a.date.getTime());
</script>

<div class="flex w-full flex-col gap-6">
	<Section title="학력">
		{#each educations as { degree, school, from, to, note, link }, index}
			<SectionItem title={degree} isLast={index === educations.length - 1}>
				<EducationItem text={school} {from} {to} subText={note} {link} />
			</SectionItem>
		{/each}
	</Section>

	<Section title={`논문 (1저자): ${papers.length}편`}>
		{#each papers as { title, authors, conference, journal, link }, index}
			<SectionItem
				title={conference ? '학회' : journal ? '저널' : ''}
				isLast={index === papers.length - 1}
			>
				<PaperItem {title} {authors} {conference} {journal} {link} />
			</SectionItem>
		{/each}
	</Section>

	<Section title={`논문 (기타): ${papers2.length}편`}>
		{#each papers2 as { title, authors, conference, journal, link }, index}
			<SectionItem
				title={conference ? '학회' : journal ? '저널' : ''}
				isLast={index === papers2.length - 1}
			>
				<PaperItem {title} {authors} {conference} {journal} {link} />
			</SectionItem>
		{/each}
	</Section>
</div>
