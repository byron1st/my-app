<script lang="ts">
	import ProjectChallenge from '$lib/component/Project/ProjectChallenge.svelte';
	import ProjectContentSection from '$lib/component/Project/ProjectContentSection.svelte';
	import ProjectContentSectionItem from '$lib/component/Project/ProjectContentSectionItem.svelte';
	import type { ProjectContentSerialized } from '$lib/models/projectcontents';

	export let content: ProjectContentSerialized;
</script>

<ProjectContentSection label="프로젝트 개요">
	<p>
		이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
		서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현 설계는 제가
		했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해, 서버 자체도 로컬에서
		복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가 Ethereum 쪽에서 오는 결과를
		모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게 되었습니다. 서버는 Fastify
	</p>
</ProjectContentSection>

<ProjectContentSection label="주요 난제">
	<ProjectChallenge
		title="분산구조"
		challenge={`이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
    서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현
    설계는 제가 했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해,
    서버 자체도 로컬에서 복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가
    Ethereum 쪽에서 오는 결과를 모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게
    되었습니다. 서버는 Fastify`}
		solution={`이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
    서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현
    설계는 제가 했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해,
    서버 자체도 로컬에서 복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가
    Ethereum 쪽에서 오는 결과를 모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게
    되었습니다. 서버는 Fastify`}
	/>
	<ProjectChallenge
		title="분산구조"
		challenge={`이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
    서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현
    설계는 제가 했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해,
    서버 자체도 로컬에서 복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가
    Ethereum 쪽에서 오는 결과를 모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게
    되었습니다. 서버는 Fastify`}
		solution={`이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
    서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현
    설계는 제가 했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해,
    서버 자체도 로컬에서 복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가
    Ethereum 쪽에서 오는 결과를 모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게
    되었습니다. 서버는 Fastify`}
	/>
</ProjectContentSection>

<ProjectContentSection label="기술 소감">
	<ProjectContentSectionItem
		label="Fastify"
		content={`이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
    서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현
    설계는 제가 했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해,
    서버 자체도 로컬에서 복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가
    Ethereum 쪽에서 오는 결과를 모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게
    되었습니다. 서버는 Fastify`}
	/>
	<ProjectContentSectionItem
		label="Ethereum"
		content={`이 프로젝트의 최대 난제는 분산 구조입니다. 중앙 집중화된 서버 없이, 거래 참여자들이 각자의
    서버를 갖고 통신하는 구조였기 때문에, UML Sequence Diagram 으로 설계된(구체적인 구현
    설계는 제가 했습니다) 통신 구조가 꽤 복잡했습니다. 이게 4년차 때는 별도 암호화를 위해,
    서버 자체도 로컬에서 복수 개의 프로세스로 돌아가게 되면서 더욱 복잡해졌습니다. 게다가
    Ethereum 쪽에서 오는 결과를 모두 이벤트로 받아야 하면서, 복잡성은 저 멀리 치솟게
    되었습니다. 서버는 Fastify`}
	/>
</ProjectContentSection>
