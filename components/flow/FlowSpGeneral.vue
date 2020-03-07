<template>
  <div :class="$style.General">
    <div class="mx-2 mb-5">
      <HumanIcon :class="$style.GeneralIcon"/>
      <p :class="$style.GeneralHeader">一般の方</p>
    </div>

    <div :class="$style.GeneralFlex">
      <div :class="$style.GeneralFlexItem">
        <CheckIcon />
        <p class="pt-1">風邪<span>のような症状</span></p>
      </div>
      <div :class="$style.GeneralFlexItem">
        <CheckIcon />
        <p>
          <span>発熱</span><br>
          37.5℃以上
        </p>
      </div>
      <div :class="$style.GeneralFlexItem">
        <CheckIcon />
        <p>強いだるさ</p>
      </div>
      <div :class="$style.GeneralFlexItem">
        <CheckIcon />
        <p>息苦しさ</p>
      </div>
    </div>

    <p :class="$style.GeneralText">
      <span>
        <strong>４</strong>日以上
      </span>
      続いている
    </p>

    <a :class="$style.GeneralBtn" href="#consult">
        <p>新型コロナ受診相談窓口へ<ArrowIcon/></p>
    </a>
  </div>
</template>

<script>
  import HumanIcon from '@/static/flow/accessibility-24px.svg'
  import CheckIcon from '@/static/flow/check_circle-24px.svg'
  import ArrowIcon from '@/static/flow/arrow_forward-24px.svg'
  export default {
    components: { HumanIcon,CheckIcon,ArrowIcon },
  }
</script>

<style module lang="scss">
.General {
  @include card-container();
  text-align: center;
  padding: 30px 20px;
  margin-bottom: 20px;
  &Icon{
    width: 34px;
    height: 34px;
  }
  &Header{
    @include font-size(14);
    color: $gray-1;
    font-weight: bold;
  }
  &Flex{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &Item{
      width: 48%;
      margin: 4% 2%;
      line-height: 14px;
      border-radius: 4px;
      border: 2px solid #00A040;
      position: relative;
      &:nth-child(odd){
        margin-left: 0;
      }
      &:nth-child(even){
        margin-right: 0;
      }
      &:nth-child(2){
        p{
          line-height: 1;
        }
      }
      svg{
        position: absolute;
        left: 50%;
        top: -2px;
        background: #fff;
        height: 24px;
        width: 24px;
        transform: translate(-50%, -50%);
      }
      p{
        @include font-size(18);
        color: $gray-2;
        font-weight: 600;
        padding: 8px;
        margin: 0;
        line-height: 34px;
        span{
          @include font-size(12);
        }
      }
    }
  }
  &Text{
    @include font-size(14);
    color: $gray-2;
    font-weight: bold;
    margin-bottom: 8px;
    span{
      border-bottom: 4px solid $green-1;
      letter-spacing: -2px;
      @include font-size(20);
      margin-right: 4px;
      strong{
        @include font-size(34);
      }
    }
  }
  &Btn{
    text-decoration: none;
    p{
      color: $gray-2;
      text-align: left;
      font-size: 14px;
      font-weight: bold;
      padding: 16px 22px;
      background: #FFE200;
      margin: 0;
      border-radius: 4px;
      box-shadow: -1px 3px 3px 0px rgba(0,0,0,0.2);
      position: relative;
      svg{
          position: absolute;
          width: 36px;
          height: 36px;
          top: 50%;
          right: -8px;
          transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }
}
</style>
