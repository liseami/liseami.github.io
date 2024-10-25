# 使用轻量级的基础镜像
FROM registry.cn-hangzhou.aliyuncs.com/mindbook/node:20-alpine

# 设置工作目录
WORKDIR /app

# 安装curl
# 使用阿里云镜像源安装curl
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk add --no-cache curl

# 设置npm镜像源为淘宝镜像
RUN npm config set registry https://registry.npmmirror.com

# 复制package.json和package-lock.json（如果存在）
COPY package*.json ./  

# 安装所有依赖（包括开发依赖），使用淘宝源
RUN npm install --registry=https://registry.npmmirror.com

# 复制项目文件
COPY . .  

# 设置环境变量
ENV NODE_ENV=production
