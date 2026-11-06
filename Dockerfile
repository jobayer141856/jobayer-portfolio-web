# Build stage
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build:ssr

# Runtime stage
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4200

COPY --from=build /app/dist/jobayer-portfolio-web ./dist/jobayer-portfolio-web
COPY --from=build /app/package.json ./package.json

EXPOSE 4200

CMD ["node", "dist/jobayer-portfolio-web/server/server.mjs"]

