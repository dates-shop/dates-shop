# ─── base dependencies stage ───
FROM node:18-alpine AS deps
WORKDIR /app

# only copy package.json / lockfile, install all deps
COPY package.json package-lock.json ./
RUN npm ci

# ─── builder: compile your Next.js app ───
FROM node:18-alpine AS builder
WORKDIR /app

# bring in deps & source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# build the production artifacts
RUN npm run build

# ─── runner: lean production image ───
FROM node:18-alpine AS runner
WORKDIR /app

# run in production mode
ENV NODE_ENV=production

# copy only what Next needs to run
COPY --from=builder /app/.next       ./.next
COPY --from=builder /app/public       ./public
# finally, bring in only the production deps
COPY --from=deps    /app/node_modules ./node_modules
COPY package.json    ./package.json

EXPOSE 3000

# use next’s built-in start command
CMD ["npx", "next", "start"]

