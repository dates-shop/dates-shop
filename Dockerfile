# 1) Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy source & generate Prisma client
COPY prisma ./prisma
COPY . .
RUN npx prisma generate
RUN npm run build

# 2) Run stage
FROM node:18-alpine AS runner
WORKDIR /app

# copy built artifacts + node_modules + Prisma client
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next       ./.next
COPY --from=builder /app/public      ./public
COPY --from=builder /app/prisma      ./prisma
COPY --from=builder /app/package.json ./

# expose and default start
EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]

