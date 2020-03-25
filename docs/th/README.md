# Tokyo COVID-19 Task Force website

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![Tokyo COVID-19 Task Force website](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)


### [日本語](./../../README.md) | [English](./../en/README.md) | [Español](./../es/README.md) | [한국어](./../ko/README.md) | [繁體中文](./../zh_TW/README.md) | [简体中文](./../zh_CN/README.md) | [Tiếng Việt](./../vi/README.md) | ภาษาไทย | [Français](./../fr/README.md)


## การร่วมพัฒนา

เปิดรับการพัฒนาและการปรับปรุงต่างๆ!
โปรดอ่าน [คู่มือการพัฒนา](./CONTRIBUTING.md)

## ข้อปฏิบัติ

โปรดอ่าน [Code of conduct for developers](./CODE_OF_CONDUCT.md)

## สัญญาอนุญาต

ซอฟต์แวร์นี้เผยแพร่ภายใต้สัญญาอนุญาต [MIT License](./../../LICENSE.txt)

## สำหรับนักแปล

โปรดดูเอกสารแนะนำการเข้าร่วมแปลที่ [How to translate](./../../TRANSLATION.md)

## สำหรับนักพัฒนา

### การติดตั้งสภาพแวดล้อมเพื่อการพัฒนา

- ต้องการ Node.js รุ่น 10.19.0 หรือสูงกว่า

**ใช้ yarn**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**ใช้ docker**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### การแก้ปัญหา `Cannot find module ****` error

**ใช้ yarn**
```bash
$ yarn install
```

**ใช้ docker**
```bash
$ docker-compose run --rm app yarn install
```

### การพัฒนาด้วย VSCode + Remote Container

1. ขอแนะนำส่วนขยายของ VSCode ชื่อ ["Remote Development"](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
2. คลิกที่มุมซ้ายล่างของ VS Code [ตามภาพนี้（เว็บไซต์ภายนอก）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container) จากนั้นเลือก "Open Folder in Container" แล้วเลือก root ของ repository นี้ สภาพแวดล้อมสำหรับการพัฒนาจะถูกสร้างขึ้น

#### หัวข้อ

- ถ้าต้องการเปลี่ยนการตั้งค่า ให้แก้แฟ้ม `.devcontainer/devcontainer.json` ดู [การอ้างอิง devcontainer.json](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) สำหรับรายละเอียด
- เมื่อเรียกใช้งาน Remote Container จะมีการแนะนำส่วนขยาย "ESLint" โปรดพิจารณาเพิ่มลงใน `extensions` ของ `devcontainer.json`ตามความจำเป็น โปรดดู [ที่นี่ (เว็บไซต์ภายนอก)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions) สำหรับคำแนะนำรายละเอียด
- หากต้องการสร้างสภาพแวดล้อมการพัฒนาขึ้นใหม่ ให้ดำเนินการ "Rebuild Container" โดยคลิกที่มุมซ้ายล่าง

### ขั้นตอนการ deploy ไปยัง production

ถ้า 'master' ได้รับการแก้ไขหรือปรับปรุง HTML จะถูกสร้างและส่งไปยัง 'production' โดยอัตโนมัติ
และ เว็บไซต์ (https://stopcovid19.metro.tokyo.lg.jp/) จะได้รับการอัพเดท

ถ้า 'staging' ได้รับการแก้ไขหรือปรับปรุง HTML จะถูกสร้างและส่งไปยัง 'gh-pages' โดยอัตโนมัติ
และ เว็บไซต์ (https://stg-covid19-tokyo.netlify.com/) จะได้รับการอัพเดท

ถ้า 'development' ได้รับการแก้ไขหรือปรับปรุง HTML จะถูกสร้างและส่งไปยัง 'dev-pages' โดยอัตโนมัติ
และ เว็บไซต์ (https://dev-covid19-tokyo.netlify.com/) จะได้รับการอัพเดท

### กฎการใช้ branch

pull request เปิดรับได้ที่ `development` และ `dev-hotfix` เท่านั้น
โปรดตั้งชื่อ branch ดังนี้

การสร้างฟีเจอร์: feature/#{ISSUE_ID}-#{branch_title_name}  
hotfix commit: hotfix/#{ISSUE_ID}-{branch_title_name}

#### branch หลัก
| จุดประสงค์ | branch | URL | หมายเหตุ |
| ---- | -------- | ---- | ---- |
| Development | development | http://dev-covid19-tokyo.netlify.com/ | branch หลัก ใช้ในการรับ pull request |
| Hotfix branch | dev-hotfix | None | Branch สำหรับ hotfix ของ production - ใช้ในกรณีที่ admin อนุญาตแล้วเท่านั้น |
| Staging | staging | https://stg-covid19-tokyo.netlify.com/ | ใช้สำหรับ staging ทดสอบตัวปรับปรุง ก่อน deploy ลง production - ห้ามสร้าง pull request ยกเว้นจาก admin เอง |
| Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | ห้ามสร้าง pull request ยกเว้นจาก admin เอง |

#### branch ที่ถูกใช้โดยระบบ
| จุดประสงค์ | branch | URL | หมายเหตุ |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | HTML สำหรับ production |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.com/ | HTML สำหรับ staging |
| สำหรับ OGP working directory | deploy / new_ogp | None | สำหรับปรับปรุง OGP |
