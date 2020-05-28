# สำหรับนักพัฒนา

## 1. การติดตั้งสภาพแวดล้อมเพื่อการพัฒนา

[PLEASE TRANSLATE ME]

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/en/)|10.19.0 หรือสูงกว่า|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/en/)| |When executing this program with `yarn`|
|[docker compose](https://docs.docker.com/compose/install/)| |When executing this program with `docker compose`|
|[Vagrant](https://www.vagrantup.com/)| |When executing this program with `Vagrant`|

### 1-1. Extensions for Visual Studio Code

To use Visual Studio Code, install the following extension.

| Extensions | Installation conditions |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|Any|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|Any|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|Any|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|Any|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|When developing with Visual Studio Code and Remote Containers|

---

## 2. Run this program

The command is executed in the working copy root directory.

[/PLEASE TRANSLATE ME]

### 2-1. ใช้ `yarn`

[PLEASE TRANSLATE ME]

#### 2-1-1. Install dependencies

[/PLEASE TRANSLATE ME]

```bash
# install dependencies
$ yarn install
```

[PLEASE TRANSLATE ME]

#### 2-1-2. Run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

##### 2-1-2-1. Normal

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

[PLEASE TRANSLATE ME]

##### 2-1-2-2. Faster

You can disable accessibility auditing, which would make your local server faster.

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

[PLEASE TRANSLATE ME]

### 2-1-3. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-1-3-1. การแก้ปัญหา `Cannot find module ****` error

[PLEASE TRANSLATE ME]

Build the dependency again and run the program.

[/PLEASE TRANSLATE ME]

### 2-2. ใช้ `docker compose`

[PLEASE TRANSLATE ME]

#### 2-2-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

[PLEASE TRANSLATE ME]

### 2-2-2. Troubleshoot

[/PLEASE TRANSLATE ME]

#### 2-2-2-1. การแก้ปัญหา `Cannot find module ****` error

[PLEASE TRANSLATE ME]

Stop the program and execute the following command.

[/PLEASE TRANSLATE ME]

```bash
$ docker-compose run --rm app yarn install
```

### 2-3. ใช้ `Vagrant`

[PLEASE TRANSLATE ME]

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

[/PLEASE TRANSLATE ME]

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. การพัฒนาด้วย Visual Studio Code + Remote Container

[PLEASE TRANSLATE ME]

#### 2-4-1. Install dependencies and run this program

[/PLEASE TRANSLATE ME]

คลิกที่มุมซ้ายล่างของ Visual Studio Code [Quick start: Try a dev container (เว็บไซต์ภายนอก)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)) จากนั้นเลือก "Open Folder in Container" แล้วเลือก root ของ repository นี้ สภาพแวดล้อมสำหรับการพัฒนาจะถูกสร้างขึ้น

[PLEASE TRANSLATE ME]

You can check the program under development by accessing http://localhost:3000 after building the environment.

[/PLEASE TRANSLATE ME]

#### 2-4-2. หัวข้อ

- ถ้าต้องการเปลี่ยนการตั้งค่า ให้แก้แฟ้ม `.devcontainer/devcontainer.json` ดู [devcontainer.json reference (เว็บไซต์ภายนอก)](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) สำหรับรายละเอียด
- เมื่อเรียกใช้งาน Remote Container จะมีการแนะนำส่วนขยาย "ESLint" โปรดพิจารณาเพิ่มลงใน `extensions` ของ `.devcontainer/devcontainer.json`ตามความจำเป็น โปรดดู [Managing extensions (เว็บไซต์ภายนอก)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions) สำหรับคำแนะนำรายละเอียด
- หากต้องการสร้างสภาพแวดล้อมการพัฒนาขึ้นใหม่ ให้ดำเนินการ "Rebuild Container" โดยคลิกที่มุมซ้ายล่าง

---

[PLEASE TRANSLATE ME]

## 3. Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.  
Please use the variable to detect which enviroinment is used at the runtime.

[/PLEASE TRANSLATE ME]

---

## 4. ขั้นตอนการ deploy ไปยัง production

[PLEASE TRANSLATE ME]

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://stopcovid19.metro.tokyo.lg.jp/|
|`staging`|`gh-pages`|The staging site https://stg-covid19-tokyo.netlify.app/|
|`development`|`dev-pages`|The development site https://dev-covid19-tokyo.netlify.app/|

[/PLEASE TRANSLATE ME]

---

## 5. กฎการใช้ branch

pull request เปิดรับได้ที่ `development` เท่านั้น
โปรดตั้งชื่อ branch ดังนี้

[PLEASE TRANSLATE ME]

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|การสร้างฟีเจอร์|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

[/PLEASE TRANSLATE ME]

### 5-1. branch หลัก

| จุดประสงค์ | branch | URL | People who can make pull requests | หมายเหตุ |
| ---- | ---- | ---- | ---- | ---- |
| Development | development | https://dev-covid19-tokyo.netlify.app/ | All developers | branch หลัก ใช้ในการรับ pull request |
| Staging | staging | https://stg-covid19-tokyo.netlify.app/ | Only administrators | ใช้สำหรับ staging ทดสอบตัวปรับปรุง ก่อน deploy ลง production - ห้ามสร้าง pull request ยกเว้นจาก admin เอง |
| Production | master | https://stopcovid19.metro.tokyo.lg.jp/ | Only administrators | ห้ามสร้าง pull request ยกเว้นจาก admin เอง |

### 5-2. branch ที่ถูกใช้โดยระบบ

| จุดประสงค์ | branch | URL | หมายเหตุ |
| ---- | ---- | ---- | ---- |
| Production site HTML | production | https://stopcovid19.metro.tokyo.lg.jp/ | HTML สำหรับ production |
| Staging site HTML | gh-pages | https://stg-covid19-tokyo.netlify.app/ | HTML สำหรับ staging |
| สำหรับ OGP working directory | deploy / new_ogp | None | สำหรับปรับปรุง OGP |