const nextBtn = document.querySelector(".btn__next");
const cardElm = document.querySelector(".card__inner");
const titleElm = document.querySelector(".card__title");
const iconElm = document.querySelector(".card__icon img");
const addBtn = document.querySelector(".btn__add");
const cardList = document.querySelector(".card__list");
const cardListContainer = document.querySelector(".card__list--container");
const closeBtn = document.querySelector(".btn__close");

const app = {
  repeatArr: [],
  currentIndex: 0,
  isFliped: false,
  data: [
    {
      title: "Uống nếu bạn đã từng crush ai đó trong đây",
      icon: "./src/icons/heart.svg",
    },
    {
      title: "Nốc 1 ly nếu bạn đã từng thất bại trong tình yêu",
      icon: "./src/icons/breakedHeart.svg",
    },
    {
      title: "Ai đã từng xem phim con heo thì uống đi",
      icon: "./src/icons/18.svg",
    },
    {
      title: "Hãy mời người đối diện của bạn uống 1 ly",
      icon: "./src/icons/glass.svg",
    },
    {
      title: "‘Chụt’ vào má đứa ngồi bên phải bạn",
      icon: "./src/icons/kiss.svg",
    },
    {
      title: "Cùng chơi nối từ, ai thua cuộc thì phải uống 2 ly",
      icon: "./src/icons/wordPlay.svg",
    },
    {
      title:
        "Chọn 1 người và đoán màu nội y của họ. Nếu bạn đoán đúng thì họ uống và ngược lại",
      icon: "./src/icons/underwear.svg",
    },
    {
      title: "Các bạn nữ nốc đi",
      icon: "./src/icons/girl.svg",
    },
    {
      title: "Thử thách 1 người làm theo ý của bạn. Họ làm theo hoặc uống 2 ly",
      icon: "./src/icons/command.svg",
    },
    {
      title: "Hãy mời người ngồi bên trái bạn uống 1 ly",
      icon: "./src/icons/glass.svg",
    },
    {
      title: "Cho mọi người xem ảnh ngố nhất của bạn hoặc là bạn uống",
      icon: "./src/icons/glass.svg",
    },
    {
      title: "Ai là cung bọ cạp thì uống đi, nếu không có thì cả lũ uống 2 ly",
      icon: "./src/icons/scorpio.svg",
    },
    {
      title: "Ai đang fa thì uống đi",
    },
    {
      title: "Uống 1 ly",
      icon: "./src/icons/glass.svg",
    },
    {
      title: "Các bạn nam nốc đi",
      icon: "./src/icons/boy.svg",
    },
    {
      title: "Tất cả đều phải uống … trừ bạn",
    },
    {
      title: "Tất cả cùng cạn 1 ly ‘Mãi bên nhau bạn nhớ’",
    },
    {
      title: "Chọn ra 2 người để hôn nhau hoặc họ phải uống gấp đôi",
      icon: "./src/icons/kiss2.svg",
    },
    {
      title: "Chọn ra 1 người để đấu mắt, ai thua uống 3 ly",
      icon: "./src/icons/eye.svg",
    },
    {
      title:
        "Hãy hát một bài hát của SẾP và hát 4 câu đầu tiên, ai không thuộc thì cạn nhé",
      icon: "./src/icons/sing.svg",
    },
    {
      title: "Kể 1 câu chuyện cười, nếu không ai cười thì uống 1 ly đi",
      icon: "./src/icons/laugh.svg",
    },
    {
      title: "Lấy ly của 1 người khác và uống",
      icon: "./src/icons/glass.svg",
    },
    {
      title: "Mắc mông 15 giây hoặc uống gấp đôi",
    },
    {
      title: "Cốc ai còn đầu nhất thì uống thêm 1 ly",
      icon: "./src/icons/laugh.svg",
    },
    {
      title: "Ai hút thuốc thì uống đi",
      icon: "./src/icons/cigarette.svg",
    },
    {
      title: "Sấp ngửa đi! Bên nào đông hơn thì uống",
    },
    {
      title: "Massage cho 1 người trong 30 giây hoặc uống",
    },
    {
      title:
        "Người bốc phải bài này sẽ chọn người chịu thử thách thay mình trong 3 vòng",
    },
    {
      title: "Ai vừa phải nốc  vòng trước thì uống đi",
    },
    {
      title:
        "Mọi người chọn một người và chụp trong với người đó, đăng lên mạng xã hội bất kỳ",
    },
    {
      title:
        "Ngồi cạnh dựa vai người khác giới bất kỳ do mọi người chọn  trong 2 vòng hoặc uống 3 ly",
    },
    {
      title:
        "Ngồi lên đùi người khác giới bất kỳ cho mọi người chọn trong 3 vòng và hai người cùng bốc và cùng chơi thử thách",
    },
    {
      title:
        "Mọi người trong đây khi đến lượt đều phải uống 1 ly mà không dùng tay trừ người bốc trong 2 vòng",
    },
  ],
  handleEvents() {
    let _this = this;

    cardElm.onclick = function () {
      cardElm.classList.toggle("is-flipped");
      if (!_this.isFliped) {
        _this.getRandIndex();
      }
      _this.isFliped = true;
      _this.getCurrentCard();
    };

    nextBtn.onclick = function () {
      cardElm.classList.remove("is-flipped");
      _this.getRandIndex();
    };

    addBtn.onclick = function () {
      cardList.classList.remove("hide");
    };

    closeBtn.onclick = function () {
      cardList.classList.add("hide");
    };
  },
  getRandIndex() {
    while (this.repeatArr.includes(this.currentIndex)) {
      this.currentIndex = Math.floor(Math.random() * this.data.length);
    }
    if ((this.repeatArr.length = this.data.length)) {
      this.repeatArr.push(this.currentIndex);
    } else {
      this.repeatArr = [];
    }
  },
  getCurrentCard() {
    titleElm.textContent = this.currentCard.title;
    if (this.currentCard.icon) {
      iconElm.parentElement.style.display = "block";
      iconElm.src = this.currentCard.icon;
    } else {
      iconElm.parentElement.style.display = "none";
    }
  },
  defineProperties() {
    Object.defineProperty(this, "currentCard", {
      get() {
        return this.data[this.currentIndex];
      },
    });

    function remove(id) {
      console.log(id);
    }
  },
  list() {
    let html = this.data
      .map(
        (item, index) => `
          <div class="card__item">
            <div class="card__item--title">${item.title}</div>
            <div class="card__item--controller">
              <button onclick="config(${index})" class="btn btn__horizontal btn__config">
                <img src="./src/icons/config-btn.svg" alt="" />
              </button>
              <button onclick="remove(${index})" class="btn btn__horizontal btn__remove">
                <img src="./src/icons/remove-btn.svg" alt="" />
              </button>
            </div>
          </div>
        `
      )
      .join("");
    cardListContainer.innerHTML = html;
  },
  start() {
    this.list();
    this.defineProperties();
    this.handleEvents();
    this.getCurrentCard();
  },
};

app.start();
