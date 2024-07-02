# 1Panel 应用商店的首个非官方应用适配库 - okxlin/appstore

[![**点我打赏，用爱发电**](https://pic1.afdiancdn.com/user/23e549ae343011ee8e395254001e7c00/common/a9646d838a96c60f68a6dc21a9013aee_w1440_h360_s180.png?imageView2/1/w/3000/h/800)](https://afdian.net/a/dockerapps)


## 仓库地址

[https://github.com/okxlin/appstore](https://github.com/okxlin/appstore)

## 1. 简介

这是一些适配`1Panel`商店的 docker 应用配置。

致力于一键运行各种 Docker 应用。无需复杂配置，享受便利和高效。

## 2. 使用方式

默认 `1Panel` 安装在 `/opt/` 路径下，如果不是请按需修改。

### 2.1 境内网络

> GitHub加速方式
>> - (本仓库已添加)自建：https://github.com/hunshcn/gh-proxy
>> - https://mirror.ghproxy.com

#### 2.1.1 使用 git 命令获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令，

```shell
git clone -b localApps https://mirror.ghproxy.com/https://github.com/okxlin/appstore /opt/1panel/resource/apps/local/appstore-localApps
cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/
rm -rf /opt/1panel/resource/apps/local/appstore-localApps
```

然后应用商店刷新本地应用即可。

#### 2.1.2 使用压缩包方式获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令，

```shell
wget -P /opt/1panel/resource/apps/local https://mirror.ghproxy.com/https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip
unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip
cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/
rm -rf /opt/1panel/resource/apps/local/appstore-localApps
rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

然后应用商店刷新本地应用即可。

### 2.2 境外网络

#### 2.2.1 使用 git 命令获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令，

```shell
git clone -b localApps https://github.com/okxlin/appstore /opt/1panel/resource/apps/local/appstore-localApps
cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/
rm -rf /opt/1panel/resource/apps/local/appstore-localApps
```

然后应用商店刷新本地应用即可。

#### 2.2.2 使用压缩包方式获取应用

`1Panel` 计划任务类型 `Shell 脚本` 的计划任务框里，添加并执行以下命令，或者终端运行以下命令，

```shell
wget -P /opt/1panel/resource/apps/local https://github.com/okxlin/appstore/archive/refs/heads/localApps.zip
unzip -o -d /opt/1panel/resource/apps/local/ /opt/1panel/resource/apps/local/localApps.zip
cp -rf /opt/1panel/resource/apps/local/appstore-localApps/apps/* /opt/1panel/resource/apps/local/
rm -rf /opt/1panel/resource/apps/local/appstore-localApps
rm -rf /opt/1panel/resource/apps/local/localApps.zip
```

然后应用商店刷新本地应用即可。


## 3. 备注

**未显示在本地应用列表里的，表示未完全适配应用商店面板操作**

**但是支持直接终端运行。**

> 本仓库应用基本支持直接 `docker-compose up` 运行

以 `rustdesk` 为例


```shell
# 进入 rustdesk 的最新版本目录
cd /opt/1panel/resource/apps/local/rustdesk/versions/latest/

# 复制 .env.sample 为 .env
cp .env.sample .env

# 编辑 .env 文件，修改参数
nano .env

# 启动 RustDesk
docker-compose up -d

# 查看连接所需密钥
cat ./data/hbbs/id_ed25519.pub
```