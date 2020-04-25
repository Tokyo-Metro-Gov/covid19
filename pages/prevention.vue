<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon aria-hidden="true" />
      <page-header class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症対策') }}
      </page-header>
    </div>
    <div>
      <StaticCard>
        <h3>{{ $t('個人でできる感染予防対策') }}</h3>
        <p>
          {{ $t('島根県が公表している予防策・正しい手洗いについてです。') }}
        </p>
        <ul>
          <li>
            <a
              href="https://www.pref.shimane.lg.jp/medical/yakuji/kansensyo/other/topics/bukan2020.data/200225sinngatakoronahuseguniha.pdf"
              >{{ $t('新型コロナウイルスを防ぐには（リーフレット）') }}</a
            >
          </li>
          <li>
            <a
              href="https://www.pref.shimane.lg.jp/medical/yakuji/kansensyo/other/topics/bukan2020.data/tearai.pdf"
              >{{ $t('正しい手洗い方法について') }}</a
            >
          </li>
          <li>
            <a
              href="https://www.pref.shimane.lg.jp/medical/yakuji/kansensyo/other/topics/bukan2020.data/syoudoku.pdf"
              >{{ $t('新型コロナウイルスの消毒について') }}</a
            >
          </li>
          <li>
            <a
              href="https://www.pref.shimane.lg.jp/medical/yakuji/kansensyo/other/topics/bukan2020.data/000614802.pdf"
              >{{ $t('３つの密を避けましょう！（リーフレット）') }}</a
            >
          </li>
        </ul>
      </StaticCard>
      <StaticCard>
        <h3>{{ $t('新型コロナウイルス感染症講習会動画') }}</h3>
        <p>
          {{
            $t(
              'この動画は、一般法人島根県医師会の新型コロナウイルス感染症対策に役立てていただくことを目的とする標記講習会における動画です。'
            )
          }}
        </p>
        <div class="only-pc" aria-hidden="true">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SU4WQjg3KbE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="only-sp">
          <iframe
            width="350"
            height="100"
            src="https://www.youtube.com/embed/SU4WQjg3KbE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <p>
          <a
            href="https://www.shimane.med.or.jp/files/original/202003191626015541ea84588.pdf"
            >{{ $t('スライドの資料') }}
          </a>
        </p>
        <p>
          <a href="https://www.shimane.med.or.jp/to_medical/news_medical/631">
            {{
              $t('一般社団法人 島根県医師会 | 新型コロナウイルス感染症について')
            }}
          </a>
        </p>
      </StaticCard>
    </div>
    <div v-for="(item, i) in items" :key="i">
      <yfigure-card :title="item.title" :image-path="item.imagePath" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import CovidIcon from '@/static/covid.svg'
import PageHeader from '@/components/PageHeader.vue'
import YfigureCard from '@/components/YfigureCard.vue'
import StaticCard from '@/components/StaticCard.vue'

type Item = {
  title: string
  imagePath: string
}

export default Vue.extend({
  components: {
    CovidIcon,
    PageHeader,
    StaticCard,
    YfigureCard
  },
  computed: {
    items(): Item[] {
      return [
        {
          title: '布マスクの洗い方',
          imagePath: '/y_figures/covid19_2.png'
        },
        {
          title: 'ソーシャルディスタンス',
          imagePath: '/y_figures/covid19_5.png'
        },
        {
          title: 'Stay Home',
          imagePath: '/y_figures/covid19_6.png'
        },
        {
          title: '人との接触を減らすポイント',
          imagePath: '/y_figures/covid19_8.png'
        }
      ]
    }
  },
  head(): any {
    const title: TranslateResult = this.$t('新型コロナウイルス感染症対策')
    return {
      title
    }
  }
})
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;

  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > svg {
      width: 30px;
      height: 30px;

      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }

    &-Title {
      margin-left: 8px;
    }
  }

  &-Card-Button {
    @include button-text('md');
    @include font-size(20);

    width: 100%;
    max-width: 600px;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    color: $green-1 !important;

    &-Wrapper {
      text-align: center;
      margin-bottom: 20px;
    }

    &:hover {
      color: $white !important;
    }

    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }

    &-Description {
      margin-bottom: 12px;
      display: block;
      font-weight: normal;
      text-align: left;
    }
  }

  &-PullRight {
    margin: 0 0 0 auto;
  }
}

@include largerThan($medium) {
  .only-sp {
    @include visually-hidden;
  }

  .only-pc {
    display: block;
  }
}

@include lessThan($medium) {
  .only-pc {
    display: none;
  }
}
</style>
