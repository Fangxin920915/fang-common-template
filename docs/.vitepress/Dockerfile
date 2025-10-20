# 使用 Nginx 基础镜像
FROM jfrog.fang-tech.com/fang-docker-test/nginx:1.25.2-alpine-slim

# 创建 app 目录
RUN mkdir -p /app

# 将 dist 目录下的文件拷贝到容器的 app 目录
COPY dist/ /app

# 拷贝自定义的 nginx.conf 到容器中
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
