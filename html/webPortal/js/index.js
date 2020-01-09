'use strict';

// vue实例
var vm = new Vue({
  el: '#app',
  directives: {
    bgurl: {
      bind(el, binding){
        el.style.background = `url(${binding.value}) no-repeat`;
      }
    }
  },

  // component: {
  //   'child-form': childForm
  // },

  data: {
    // banner图片
    banners: [
      "/webPortal/img/pic1.jpg",
      "/webPortal/img/pic2.jpg",
      "/webPortal/img/pic3.jpg",
      "/webPortal/img/pic4.jpg",
    ],
    // 标签项数据
    labels: [
      {
        icon: "&#xe637;",
        text: "拒签退全款"
      },
      {
        icon: "&#xe658;",
        text: "顺丰包邮回寄"
      },
      {
        icon: "&#xe67e;",
        text: "智能自动填表"
      },
      {
        icon: "&#xe7a3;",
        text: "免费证件照"
      },
      {
        icon: "&#xe660;",
        text: "资料多国服用"
      },
      {
        icon: "&#xe60c;",
        text: "资料安全管家"
      },
    ],
    // 身份护照等信息数据
    infoList: [
      {
        mainTitle: "智能识别身份信息",
        smallTitle: "拍一拍，智能填写身份信息",
        pic: "/webPortal/img/visa4.jpg",
        promotTexts: [
          "OCR黑科技只能识别",
          "基础资料一键搞定，省时省事",
          "手机扫描自动填写身份证信息",
          "智能填写，避免身份证号码输入错误"
        ]
      },
      {
        mainTitle: "智能识别护照信息",
        smallTitle: "智能识别护照，自动填写护照信息",
        pic: "/webPortal/img/visa2.jpg",
        promotTexts: [
          "OCR黑科技只能识别",
          "基础资料一键搞定，省时省事",
          "手机扫描自动填写身份证信息",
          "智能填写，避免人工录入错误"
        ]
      },
      {
        mainTitle: "手机拍摄证件照",
        smallTitle: "手机拍摄证件照，无需再跑照相馆",
        pic: "/webPortal/img/visa3.jpg",
        promotTexts: [
          "自动检测是否佩戴不合格饰品",
          "智能检测光线是否有阴阳脸",
          "智能提示照片是否符合要求",
          "自动抠图并替换不同国家背景色",
          "自动生成不同国家签证照片尺寸",
          "后天直接打印实体照片",
        ]
      },
    ],
    // 资料复用的数据内容
    material: {
      mainTitle: "资料重复利用",
      smallTitle: "资料复用 ,上传资料更轻松",
      pText: `办签证，资料很繁琐，一个列表准备下来，人累得够呛。
      更重要的是，那些资料，似曾相似，之前已经提交过的。重复工作，是否很烦人？`,
      promotTexts: [
        "告别重复提交资料，省心省力",
        "护照首页、身份证、户口本、婚姻证明，一次提交，多国复用",
        "手机拍照，智能检测，不用跑照相馆，在线就能办签证",
        "繁琐的签证流程，如申根国家，最后提交的资料，只有在职证明和银行流水？so easy！",
      ]
    },
    // 申请表复用的数据内容
    form: {
      mainTitle: "申请表多国复用",
      smallTitle: "一张申请表多国复用，省心填表不出错",
      pText: `拿着护照一个字一个字的敲打？身份证号码一一输入？
      工作信息、学校信息、家庭信息，办一次签证重复填写一次？
      累吗？觉得这样的重复工作是否很无奈？`,
      promotTexts: [
        "黑科技智能识别，自助填写护照/身份证等基础信息",
        "申请表一次填写，多国复用，不用重复填写同样的内容",
        "一张表格，覆盖多个国家，办完美国或申根国家，下次办理基本不用填表了",
      ]
    },
    codePicUrl: "/webPortal/img/visa1.jpg",
    sumCount: null,
    aniTime: 0,
    curIndex: 0,
    duration: 500,
    slata: "",
  },
  methods: {
    init(){
      // 绑定事件
      window.onmousewheel = (e) => {
        return this.scrollFunc(e);
      };
    },
    scrollFunc(e){
      //如果动画还没执行完，则return
      if(new Date().getTime() < this.aniTime + this.duration){
        return;
      }
      e = e || window.event;
      var t = 0;
      if (e.wheelDelta) {//IE/Opera/Chrome
				t = e.wheelDelta;
				if (t > 0 && this.curIndex > 0) {
					this.movePrev();
				} else if (t < 0 && this.curIndex < this.sumCount - 1) {
					this.moveNext();
				}
			} else if (e.detail) {//Firefox
				t = e.detail;
				if (t < 0 && this.curIndex > 0) {
					this.movePrev();
				} else if (t > 0 && this.curIndex <this.sumCount - 1) {
					this.moveNext();
				}
			}
    },

    //下滚动
    moveNext(){
      //获取动画开始时的时间
      this.aniTime = new Date().getTime();
      if(this.curIndex === this.sumCount - 2){
        this.slata = `-${(this.curIndex) * window.innerHeight + 95}px`;
        ++this.curIndex;
      }else{
        this.slata = `-${(++this.curIndex) * window.innerHeight}px`;
      }
      console.log(this.slata)
    },

    //上滚动
    movePrev(){
      //获取动画开始时的时间
      this.aniTime = new Date().getTime();
      console.log(this.curIndex, this.sumCount);
      if(this.curIndex === this.sumCount - 1){
        console.log((this.curIndex) * window.innerHeight);
        this.slata = `-${(--this.curIndex) * window.innerHeight}px`;
      }else{
        this.slata = `-${(--this.curIndex) * window.innerHeight}px`;
      }
      console.log(this.slata)
    },
    
  },
  mounted() {
    this.sumCount = document.querySelectorAll(".section").length;
    this.init();
  },
});

Vue.component('child-slogan', {
  template: `
  <div class="slogan-text">
    <div class="top-section">
      <h1 class="title-big">{{ material.mainTitle }}</h1>
      <h3 class="title-small">{{ material.smallTitle }}</h3>
      <p class="text-box">{{ material.pText }}</p>
    </div>
    <ul class="bg-section">
      <li class="item p-flex" v-for="(item, index) in material.promotTexts" :key="index">
        <span>{{ item }}</span>
      </li>
    </ul>
    <div class="bottom-line">
      <span class="dot" :style="position"></span>
    </div>
  </div>`,
  props: ['material', 'position']
})