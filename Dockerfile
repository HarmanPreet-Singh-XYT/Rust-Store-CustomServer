FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY server.js jsconfig.json ./

ENV FRONTEND_SERVER_ORIGIN=""
ENV MONGODB_URI=""
ENV PORT=4000

EXPOSE ${PORT}

CMD ["node", "server.js"]
