<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      新型コロナウイルス感染予防に係る学校の一斉休校等について
    </h2>
    <TextCard title="一斉休校について">
      <dl class="Parent-Definitions">
        <dt>市立小中学校</dt>
        <dd>2020/3/3 〜 2020/3/24 まで一斉休校</dd>
        <dt>市立高等学校</dt>
        <dd>2020/3/3 〜 2020/3/24 まで一斉休校</dd>
        <dt>市立特別支援学校</dt>
        <dd>休校せず、通常通り</dd>
      </dl>
    </TextCard>
    <TextCard title="感染予防・健康管理">
      <ul class="Parent-Bullets">
        <li>
          感染拡大防止のため、ショッピングセンターや繁華街など、人が集まる場所には近寄らず、不要不急の外出は控えてください。
        </li>
        <li>
          公園や校庭などの屋外では、近い距離での接触がない限り感染を心配することはありませんので、公園等での少人数の遊びを制限する必要はありません。
        </li>
      </ul>
    </TextCard>
    <TextCard title="休校期間中の児童の受け入れ">
      <p>
        小学校1～4年生及び特別支援学級の児童については、保護者の就労等で自宅待機が困難な場合、希望者に限って8時から14時30分まで、通学している学校において児童の受け入れを行います。
      </p>
      <p>
        その際の児童の見守りは学校職員が行いますが、授業等は実施しません。
      </p>
      <p>
        詳細は、
        <a
          href="https://www.city.chiba.jp/kyoiku/gakkokyoiku/gakuji/covid19-kyuko.html#ukeire"
          target="_blank"
          rel="noopener"
        >
          千葉市の学校の一斉休校に関するページ
          <v-icon
            class="ListItem-ExternalLinkIcon"
            size="12"
          >
            mdi-open-in-new
          </v-icon>
        </a>
        にてご確認ください。
      </p>
    </TextCard>
  </div>
</template>
<script lang="ts">
import TextCard from '@/components/TextCard.vue'
export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: 'お子様をお持ちの皆様へ'
    }
  }
}
</script>
<style lang="scss">
.Parent {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }

  &-Definitions {
    margin: 6px;

    dd {
      padding-left: 8px;

      & + dt {
        margin-top: 8px;
      }
    }
  }

  &-Bullets {
    margin: 6px;
    list-style-type: '\25EF';

    li {
      padding-left: 8px;
    }
  }
}
a {
  @include text-link();
}
</style>
