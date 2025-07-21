# ─── 1) Builder ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS builder
WORKDIR /app

# install all deps (including dev)
COPY package.json package-lock.json ./
RUN npm ci

# copy sources & build
COPY . .
RUN npm run build

# ─── 2) Runtime ──────────────────────────────────────────────────────────────
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# copy only what's needed to run
COPY --from=builder /app/.next       ./.next
COPY --from=builder /app/public      ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["npm", "start"]

