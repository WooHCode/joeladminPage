#  -- joeladmin --
### &#x2615; 개인카페의 상품, 직원, 출근을 관리하기 위한 AdminPage입니다.

##### 개발기간 : 22.12.25 ~ 23.03.25
##### 개발인원 : 1인

##### 접속링크 : http://joeladmin.store/

---

### &#x1F4BB; 사용 기술스택:
<img src="https://img.shields.io/badge/vue.js-221144?style=flat-square&logo=vue.js&logoColor=green">

- vue3, vue Router, vuex 

<img src="https://img.shields.io/badge/javascript-ffff00?style=flat-square&logo=javascript&logoColor=green">

- javascript ES6

<img src="https://img.shields.io/badge/html5-FF818D?style=flat-square&logo=html5&logoColor=">

- HTML5

<img src="https://img.shields.io/badge/css3-7CB1F7?style=flat-square&logo=css3&logoColor=blue">

- CSS3

## &#x1F517; 연동 api 서버:

https://github.com/WooHCode/joelpage

---

#### &#x1F4D8; 개발과정 중 애로사항

1. CORS에러
- 문제 : 로컬환경에서 개발할때는 신경쓰지않아도 될 문제였지만, 서버를 ec2에 배포를 한 후 진행을 하니 지속적으로 CORS에러 발생
- 해결 : proxy서버를 통해 요청을 보내던 api요청을 직접연결로 변경하여 CORS문제를 해결
- 관련링크 : https://github.com/WooHCode/joeladminPage/blob/master/src/scripts/api.js

2. 렌더링 시점 문제
- 문제: chart.js를 활용하여 매출데이터를 화면에 출력하는데 chart.js가 화면에 먼저 출력이 되고 그 이후에 데이터가 바인딩되어 화면이 출력되었을 때 빈 데이터 출력
- 해결 : async, await로 메소드를 변경하여 api로 데이터가 완전히 받아진 후 데이터를 바인딩하게 하였음.
- 관련링크 : https://github.com/WooHCode/joeladminPage/blob/master/src/pages/Home.vue   --> 44~54 Line

---


# &#x1F4DD; 기능설명

#### &#x2B50;로그인&#x2B50;

![image](https://user-images.githubusercontent.com/112393201/228716703-149be613-9a41-4d15-8889-cc2e7a366ffb.png)

* 접속을 하게되면 해당페이지로 넘어오게 되고 로그인을 해야 다른 페이지로 이동할 수 있게 됩니다.
  - 사용기술: vue Router의 네비게이션 가드
![image](https://user-images.githubusercontent.com/112393201/228717062-018518dc-639d-4d7d-872e-8d60e5b83459.png)


* 로그인을 하게되면 해당 페이지로 이동하게됩니다.
![image](https://user-images.githubusercontent.com/112393201/228717098-0207a87a-abef-406e-9a97-43199f80b125.png)

#### &#x2B50;마이페이지&#x2B50;

* 마이페이지를 누르면 로그인한 계정의 id값을 api uri로 보내 계정의 정보를 수정할 수 있습니다.

![image](https://user-images.githubusercontent.com/112393201/228717354-fe5c83a3-cb79-47fe-8311-c5f3c628ae95.png)

* 화면 중앙에 보이는 그래프는 chart.js를 활용하여 화면생성시점에 async axios로 데이터를 가져와 화면에 출력하게됩니다.
![image](https://user-images.githubusercontent.com/112393201/228717566-73ab7b53-b3cc-4220-abd4-57489777f6f7.png)

#### &#x2B50;매출현황&#x2B50;

* 매출관리에 들어가게 되면 초기화면에는 등록되어있는 전체 상품의 수가 나타나게 되고 오른쪽상단의 일별, 월별, 상품별 매출을 선택하여 해당 데이터를 볼수있습니다.
![image](https://user-images.githubusercontent.com/112393201/228717823-57adce31-719a-44a4-b4b4-2026c9fc0c6f.png)
![image](https://user-images.githubusercontent.com/112393201/228717859-801f5658-ae10-4675-b9d8-7c5ddd7042c4.png)
![image](https://user-images.githubusercontent.com/112393201/228717890-8d61192d-0ed6-459e-bb31-754808bfd425.png)
![image](https://user-images.githubusercontent.com/112393201/228718008-284b2f95-c81a-43bf-a9b8-7e4603e91d46.png)

* 또한 매출등록을 통해 금일 매출을 상품별 개수로 입력하여 등록할 수 있습니다.

![image](https://user-images.githubusercontent.com/112393201/228718322-dbcf31db-ae77-4f47-a84e-7e56593771d7.png)

#### &#x2B50;상품관리&#x2B50;

* 상품관리를 들어가면 전체 상품을 한 화면에 5개씩 페이징하여 보여주고 개별 상품명을 선택하면 상품정보를 수정할수있습니다.
* 또한 상품명을 통해 검색(ex. 망고스무디 or 망고) 상품코드로검색을 선택하면 상품코드로도 검색이가능합니다.
![image](https://user-images.githubusercontent.com/112393201/228718753-e1c69de1-1726-4d75-942e-044b8247c87e.png)

#### &#x2B50; 직원출근, 직원관리&#x2B50;

* 회원가입 시 관리자계정인지 일반직원인지(관리자 : 0, 일반직원 : 1)를 입력하여 관리자로 접속하면 직원관리 페이지, 일반직원으로 접속하면 출근관리 페이지가 보이게됩니다.

![image](https://user-images.githubusercontent.com/112393201/228721630-a8c4ffd4-4373-4969-b1ae-dae957b40504.png)

* 직원관리페이지에서는 직원의 상세정보, 직원등록 등을 할 수 있습니다.

![image](https://user-images.githubusercontent.com/112393201/228721786-adfb31ae-cfc5-4fce-9ab1-caf78af6d6a4.png)

* 출근관리 페이지에서는 출근정보가 보여지고 출근하기, 퇴근하기로 금일 출근기록을 작성할 수 있습니다.

![image](https://user-images.githubusercontent.com/112393201/228723043-467da6f7-3a14-4dd4-b165-9adba96d747f.png)

![image](https://user-images.githubusercontent.com/112393201/228723085-8c888e1e-1c72-4ac8-9991-35a9e4b2f938.png)

* 출근과, 퇴근 시 시간차를 계산하여 월급이 적용되며 이번달 출근일수가 자동으로 기록됩니다.(시급 * 시간)

![image](https://user-images.githubusercontent.com/112393201/228723362-6f970927-86b9-478e-bf7f-1e1acc283c35.png)

* 추가적으로 sidebar하단에서 인스타그램 계정과 네이버 리뷰관리, 배달의 민족 관리를 할수있도록 링크를 설정하였고, 추가/ 고객관리페이지는 요청에 의해 추후 개발될 예정입니다.


---

#### &#x1F4D8; 아쉬운 점 및 추후 공부해야 할 내용
1. CORS에러를 조금 더 잘 대응할 수 있어야함.
   - 에러가 발생하는 경우 CrossOrigin의 Path를 지정해줘야하는데 이에 따른 어려움이 있음.
2. vue의 컴포넌트 관리
   - vue는 컴포넌트 단위로 속성을 활용하는데 아직 그 부분이 능숙하지않음.
3. 스타일적인 부분 미흡
   - bootstrap과 css요소에 대한 활용에 대한 부분이 조금 더 능숙해야함.
4. cookie데이터와 로컬스토리지, 세션스토리지
   - 어떤 데이터를 어떤 저장소에 저장하고 활용해야할지에 대해 조금 더 연구할 것임. 로컬스토리지와 세션스토리지는 데이터의 변경이 자유롭기 때문에 보안에 위협이 적은 데이터만 활용해야함.
