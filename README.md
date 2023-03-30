# joeladmin
### 개인카페의 상품, 직원, 출근을 관리하기 위한 AdminPage입니다.

---

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


