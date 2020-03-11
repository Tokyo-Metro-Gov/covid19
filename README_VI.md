# Cổng thông tin chống dịch CoVid-19 của TP Tokyo 

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Cổng thông tin chống dịch CoVid-19 của TP Tokyo](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### 日本語 | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md)

## Làm thế nào để đóng góp
Mọi đóng góp của các bạn đều được chào đón. 
Xin vui lòng đọc [tại đây](./.github/CONTRIBUTING_VI.md) để biết thêm chi tiết.


## Quy tắc ứng xử
Chi tiết vui lòng xem [tại đây](./.github/CODE_OF_CONDUCT_VI.md)

## Giấy phép
Phần mềm này được phân phối dưới giấy phép [MIT](./LICENSE.txt)

## Thông tin cho nhà phát triển

### Xây dựng môi trường

- Node.js phiên bản: 10.19.0 hoặc cao hơn

**Nếu dùng yarn**
``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Nếu dùng docker compose**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### Triển khai lên môi trường staging và production 

Khi nhánh `master` được cập nhật, file HTML sẽ tự động được build dựa trên nhánh `production`. Sau đó https://stopcovid19.metro.tokyo.lg.jp/ sẽ được cập nhật.

Khi nhánh `staging` được cập nhật, file HTML sẽ tự động được build dựa trên nhánh `gh-pages`. Sau đó https://stg-covid19-tokyo.netlify.com/ sẽ được cập nhật.

Khi nhánh `development` được cập nhật, file HTML sẽ tự động được build dựa trên nhánh `dev-pages`. Sau đó https://dev-covid19-tokyo.netlify.com/ sẽ được cập nhật.
