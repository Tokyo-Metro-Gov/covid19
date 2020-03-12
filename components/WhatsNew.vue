<template>
  <div class="WhatsNew">
    <h2 class="WhatsNew-heading">
      <v-icon size="24" class="WhatsNew-heading-icon">
        mdi-information
      </v-icon>
      {{ $t('最新のお知らせ') }}
    </h2>
    <ul class="WhatsNew-list">
      <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
        <a
          class="WhatsNew-list-item-anchor"
          :href="item.url"
          target="_blank"
          rel="noopener"
        >
          <time
            class="WhatsNew-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ item.date }}
          </time>
          <span class="WhatsNew-list-item-anchor-link">
            {{ $t(item.text) }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="WhatsNew-item-ExternalLinkIcon"
              size="12"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<i18n>
{
  "ja": {
    "最新のお知らせ": "最新のお知らせ",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "都の備蓄マスク20万枚を都内全区市町村へ提供",
    "都内医療機関及び保健所等へのマスクの配布について": "都内医療機関及び保健所等へのマスクの配布について"
  },
  "en": {
    "最新のお知らせ": "What's new",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "Tokyo Metropolitan Government provides the stockpile of masks for all the wards, and the municipalities in Tokyo (in Japanese)",
    "都内医療機関及び保健所等へのマスクの配布について": "About distribution of the mask for the medical facilities and the public health centers in Tokyo (in Japanese)"
  },
  "zh-cn": {
    "最新のお知らせ": "最新消息",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "东京都政府向都内全部区市町村提供20万枚口罩（内容为日语）",
    "都内医療機関及び保健所等へのマスクの配布について": "东京都政府向都内医疗机构及保健所配发口罩的通告（内容为日语）"
  },
  "zh-tw": {
    "最新のお知らせ": "最新消息",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "東京都向都內全部區市町村提供20萬枚口罩（日文網站）",
    "都内医療機関及び保健所等へのマスクの配布について": "東京都向都內醫療機關及保健所配給口罩的相關資訊（日文網站）"
  },
  "ko": {
    "最新のお知らせ": "최신소식",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "도쿄도의 비축 마스크 20만장을 도쿄도 내의 모든 구, 시정촌에 제공 (일본어)",
    "都内医療機関及び保健所等へのマスクの配布について": "도쿄도 내의 의료기관 및 보건소등에서 마스크 배포에 대해 (일본어)"
  },
  "pt-BR": {
    "最新のお知らせ": "",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "",
    "都内医療機関及び保健所等へのマスクの配布について": ""
  },
  "ja-basic": {
    "最新のお知らせ": "いちばん あたらしい おしらせ",
    "都の備蓄マスク20万枚を都内全区市町村へ提供": "とうきょうと が もっている マスク を とうきょう の し や まち に くばります",
    "都内医療機関及び保健所等へのマスクの配布について": "びょういん や ほけんじょ に マスク を くばること の おはなし"
  }
}
</i18n>

<script>
import { convertDateToISO8601Format } from '@/utils/formatDate'

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString) {
      return convertDateToISO8601Format(dateString)
    }
  }
}
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();
  padding: 10px;
  margin-bottom: 20px;
}

.WhatsNew-heading {
  display: flex;
  align-items: center;
  @include card-h2();
  margin-bottom: 12px;
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }
}

.WhatsNew .WhatsNew-list {
  padding-left: 0px;
  list-style-type: none;

  &-item {
    &-anchor {
      display: flex;
      text-decoration: none;
      margin: 5px;
      font-size: 14px;

      @include lessThan($medium) {
        flex-wrap: wrap;
      }

      &-time {
        flex: 0 0 90px;
        @include lessThan($medium) {
          flex: 0 0 100%;
        }
        color: $gray-1;
      }

      &-link {
        flex: 0 1 auto;
        @include text-link();
        @include lessThan($medium) {
          padding-left: 8px;
        }
      }

      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $gray-3 !important;
      }
    }
  }
}
</style>
