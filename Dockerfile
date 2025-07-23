# Dockerfile

# ——— builder stage ———
FROM node:18-alpine AS builder
WORKDIR /app

# 1. Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# 2. Copy Prisma schema & generate client
COPY prisma ./prisma
RUN npx prisma generate

# 3. Copy the rest of your code & build Next
COPY . .
RUN npm run build

# ——— runner stage ———
FROM node:18-alpine AS runner
WORKDIR /app

# 1. Bring over only what we need
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next       ./.next
COPY --from=builder /app/public       ./public
COPY --from=builder /app/prisma       ./prisma
COPY --from=builder /app/package.json ./

# 2. Expose and start
EXPOSE 3000
CMD ["npm","start"]

