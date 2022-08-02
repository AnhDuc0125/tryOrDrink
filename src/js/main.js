const nextBtn = document.querySelector(".btn__next");
const cardElm = document.querySelector(".card__inner");
const titleElm = document.querySelector(".card__title");
const iconElm = document.querySelector(".card__icon img");
const configBtn = document.querySelector(".btn__config");
const cardList = document.querySelector(".card__list");
const cardListContainer = document.querySelector(".card__list--container");
const closeBtn = document.querySelector(".btn__close");
const soundElm = document.querySelector("audio");
const addBtn = document.querySelector(".btn__add");

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
      soundElm.play();
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

    configBtn.onclick = function () {
      cardList.classList.remove("hide");
    };

    closeBtn.onclick = function () {
      cardList.classList.add("hide");
    };

    // _this.removeBtns.forEach((btn, index) => {
    //   btn.onclick = function () {
    //     let isConfirm = confirm("Bạn chắc chắn muốn xóa thẻ này chứ?");

    //     if (!isConfirm) return;

    //     _this.data.splice(index, 1);
    //     _this.render();
    //   };
    // });
    // _this.editBtns.forEach((btn) => {
    //   btn.onclick = function () {
    //     let element = btn;
    //     while (element.parentElement) {
    //       element = element.parentElement;
    //       if (element.classList.contains("card__item")) {
    //         break;
    //       }
    //     }

    //     element.querySelector("textarea").focus();
    //     element
    //       .querySelector("textarea")
    //       .setSelectionRange(0, this.value.length - 1);
    //   };
    // });

    cardListContainer.onclick = function (e) {
      let removeBtn = e.target.closest(".btn__remove");
      let editBtn = e.target.closest(".btn__edit");

      if (removeBtn) {
        let dataId = removeBtn.dataset.id;
        let isConfirmed = confirm("Bạn chắc chắn muốn xóa thẻ này chứ?");

        if (isConfirmed) {
          _this.data.splice(dataId, 1);
          _this.render();
        }
      }

      if (editBtn) {
        let dataId = editBtn.dataset.id;
        let element = editBtn;
        while (element.parentElement) {
          element = element.parentElement;
          if (element.classList.contains("card__item")) {
            break;
          }
        }

        let textareaElm = element.querySelector("textarea");
        let btnElm = element.querySelector(".btn");

        btnElm.classList.add("check");

        textareaElm.focus();
        textareaElm.setSelectionRange(0, textareaElm.value.length);

        btnElm.onclick = function () {
          _this.data.splice(dataId, 1, { title: textareaElm.value });
          _this.render();
        };
      }
    };

    addBtn.onclick = function () {
      let cardItem = document.createElement("div");

      cardItem.classList.add("card__item");
      cardItem.innerHTML = `
          <div class="card__item--title">
            <textarea rows="3" class="form__add"></textarea>
          </div>
          <div class="card__item--controller">
            <button class="btn btn__horizontal btn__confirm" disabled>Thêm</button>
          </div>
        `;

      cardListContainer.prepend(cardItem);
      let textArea = cardItem.querySelector("textarea");
      let confirmBtn = cardItem.querySelector(".btn__confirm");

      textArea.focus();
      textArea.onblur = function () {
        confirmBtn.disabled = this.value.trim() ? false : true;
      };

      textArea.oninput = function () {
        confirmBtn.disabled = false;
      };

      confirmBtn.onclick = function () {
        _this.data.unshift({ title: textArea.value });
        console.log(_this.data);
        textArea.value = "";

        _this.render();
      };
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

    Object.defineProperty(this, "cards", {
      get() {
        return document.querySelectorAll(".card__item");
      },
    });

    Object.defineProperty(this, "removeBtns", {
      get() {
        return document.querySelectorAll(".btn__remove");
      },
    });

    Object.defineProperty(this, "editBtns", {
      get() {
        return document.querySelectorAll(".btn__edit");
      },
    });
  },
  render() {
    let html = this.data
      .map(
        (item, index) => `
          <div class="card__item">
            <div class="card__item--title">
              <textarea  spellcheck="false" rows="3">${item.title}</textarea>
            </div>
            <div class="card__item--controller">
              <button data-id="${index}" class="btn btn__horizontal btn__edit ">
                <img class="icon__edit" src="./src/icons/edit-btn.svg" alt="" />
                <img class="icon__check" src="./src/icons/check-btn.svg" alt="" />
              </button>
              <button data-id="${index}" class="btn btn__horizontal btn__remove">
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
    this.render();
    this.defineProperties();
    this.handleEvents();
    this.getCurrentCard();
  },
};

app.start();
