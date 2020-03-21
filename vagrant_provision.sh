#!/bin/bash
sudo apt-get update -y

# nodejsのインストール
# https://github.com/nodesource/distributions/blob/master/README.md
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs

# yarnのインストール
sudo npm install -g yarn

# ソースのコピー
cp -pr /vagrant/ ./covid19
# /vagrantがホストと共有できない場合は、githubからクローンする
#git clone https://github.com/tokyo-metropolitan-gov/covid19.git
cd covid19

# インストール
sudo chown vagrant:vagrant ../.config
yarn install

# 起動スクリプト
cat << EOF > /home/vagrant/covid19.sh
#!/bin/bash
cd /home/vagrant/covid19
HOST=0.0.0.0 /usr/bin/yarn dev
EOF

# systemd定義
sudo tee /etc/systemd/system/covid19.service << EOF
[Unit]
Description = covid19 daemon

[Service]
ExecStart = /bin/bash /home/vagrant/covid19.sh
Restart = always
Type = simple
User = vagrant
Group = vagrant

[Install]
WantedBy = multi-user.target
EOF

# サービス設定
sudo systemctl enable covid19
sudo systemctl start covid19
