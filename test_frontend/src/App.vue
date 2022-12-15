<template>
  <div class="container">
    <Top @toggleSignup="toggleSignup()" @toggleLogin="toggleLogin()"/>
    <Header  @switch="course()" @change="degree()" @toggle="abroad()" 
    @hamswitch="switchham()" :isOpenHam=isOpenHam />
    <Head :isOpenCourse=isOpenCourse />
    <Degrees :isOpenDegree=isOpenDegree />
    <Abroad :isOpenAbroad=isOpenAbroad />
    <Mobilenav :isOpenHam=isOpenHam />
  </div>
  <div class="bodyPart">
    <div class="search-area">
      <SignUpPage :isOpenSignUp=isOpenSignUp @logintoggle="toggleLogin()" />
      <LogInPage :isOpenLogin=isOpenLogin @signuptoggle="toggleSignup()" />
      <p class="search-title">"Find Your Desired Degrees"</p>
      <div class="search">
        <input class='search-input' type="text" placeholder="Search here" />
         <my-icons class="search" icon="fa-solid fa-magnifying-glass"/>
      </div>
    </div>
    <div class="compare-area">
      <ComparePage />
    </div>
    
  </div>
  <IconList />
</template>

<script>
  import ComparePage from './components/ComparePage.vue'
  import LogInPage from './components/LogInPage.vue'
  import SignUpPage from './components/SignUpPage.vue'
  import Header from './components/Header.vue'
  import IconList from './components/IconList.vue'
  import Top from './components/Top.vue'
  import Head from './components/Head.vue'
  import Degrees from './components/Degrees.vue'
  import Abroad from './components/Abroad.vue'
  import Mobilenav from './components/Mobilenav.vue'

  export default{
    name: "App",
    components: {
      Header,
      IconList,
      Top,
      Head,
      Degrees,
      Abroad,
      Mobilenav,
      SignUpPage,
      LogInPage,
      ComparePage
    },
    data () {
      return{
        isOpenCourse: false,
        isOpenDegree: false,
        isOpenAbroad: false,
        isOpenHam: false,
        isOpenSignUp: false,
        isOpenLogin: false
    }},
    methods: {
      course(){
        this.isOpenCourse=!this.isOpenCourse
        this.isOpenDegree= false
        this.isOpenAbroad= false
        this.isOpenLogin= false
        this.isOpenSignUp= false
      },
      degree(){
        this.isOpenDegree=!this.isOpenDegree
        this.isOpenCourse= false
        this.isOpenAbroad= false
        this.isOpenLogin= false
        this.isOpenSignUp= false
      },
      abroad(){
        this.isOpenAbroad=!this.isOpenAbroad
        this.isOpenDegree= false
        this.isOpenCourse= false
        this.isOpenLogin= false
        this.isOpenSignUp= false
      },
      switchham(){
        this.isOpenHam= !this.isOpenHam
        this.isOpenLogin= false
        this.isOpenSignUp= false
      },
      toggleSignup(){
        this.isOpenSignUp= !this.isOpenSignUp
        this.isOpenLogin= false
        this.isOpenCourse= false
        this.isOpenDegree= false
        this.isOpenAbroad= false
      },
      toggleLogin(){
        this.isOpenLogin= !this.isOpenLogin
        this.isOpenSignUp= false
        this.isOpenCourse= false
        this.isOpenDegree= false
        this.isOpenAbroad= false
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .head{
    background-color: rgba(20,20,20,0.4);
    width: 50%;
    position: absolute;
    display: flex;
    left: 30%;
    z-index: 100;
    margin-top: 10px;
  }

  .container{
    width: 100%;
    margin: 0 auto;
    background: white;
    position: fixed;
    z-index: 1;
  }
  .bodyPart{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    /* flex-direction: column; */
    min-height: 85vh;
    position: relative;
    background-image: linear-gradient(rgba(255,255,255,0.35),rgba(255,255,255,0.35)),url("./Images/bg.jpg");
    background-size:cover;
  }

  .search-title{
    margin: 1rem;
    margin-top: 15rem;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 1px;
  }
  .search-input{
    border: none;
    background: rgb(228, 228, 228);
    border-radius: 1rem;
    margin: 1rem;
    padding: 0.7rem;
    width: 60%;
    opacity: 1;
  }
  .search{
    margin-left: -2.8rem;
    cursor: pointer;
  }

  .bodyPart input:focus{
    outline: none;
    background-color: white;
  }
  .search-area{
    width: 100%;
    margin: 0 auto;
  }
  .compare-area{
    top: 7rem;
    width: 25rem;
    margin-right: 7.5%;
    position: relative;
    background-color: rgb(255, 255, 255);
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .back{
    width: 85%;
    background-color: rgba(46, 84, 255, 0.25);
    margin: 0 auto;
    margin-top: -2rem;
    border-radius: 1rem;
    position: relative;
  }
  .list-control{
    display: flex;
    /* flex-wrap: wrap; */
    /* align-items: center; */
    justify-content: space-between;
    margin: 0.2rem 1rem;
    padding: .5rem 0 ;
  }
  .item{
    font-size: .9rem;
    list-style: none;
    margin: 0.5rem;
    cursor: pointer;
    text-align: center;
  }
  .square{
    display: block;
    width: 3rem;
    margin: 0.5rem auto;
    font-size: 1.5rem;
    padding: 0.7rem 0;
    background: rgba(255, 36, 200, 0.35);
    border-radius: 6rem;
  }
@media (max-width: 600px) {
  .right{
    display: none;
  }
  .righter{
    display: none;
  }
  .head{
    display: none;
  }
  .header{
    padding: 0.5rem;
    padding-left: 1rem;
  }
  .hamburger{
    display: flex;
    position: absolute;
    right: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
  }
  .cross{
    display: none;
    position: absolute;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .search-title{
    margin-top: 10rem;
    letter-spacing: 0px;
    font-size: 1.8rem;
  }
  .bodyPart{
    flex-direction: column;
  }
  .compare-area{
    margin: 1rem auto;
    top: 0;
    width: 70%;
  }
  .back{
    margin-top: 0;
  }
}
@media (max-width: 450px){
  .list-control{
    display: inline;
  }
}
.topbar{
        display: flex;
        justify-content: right;
        background: rgb(31, 31, 31);
        color: white;
    }
</style>
