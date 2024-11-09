FROM node:18-alpine

# Set build arguments and environment variables
ARG SHOPIFY_API_KEY
ENV SHOPIFY_API_KEY=$SHOPIFY_API_KEY
ENV VITE_SHOPIFY_API_KEY=$SHOPIFY_API_KEY

EXPOSE 8081

# Copy the rest of the application
WORKDIR /app
COPY web .
COPY .env .
RUN yarn install

# Build frontend with explicit API key
WORKDIR /app


COPY .env .
RUN cd frontend && yarn install && SHOPIFY_API_KEY=$SHOPIFY_API_KEY VITE_SHOPIFY_API_KEY=$SHOPIFY_API_KEY  yarn build

# Set working directory back to main app folder
WORKDIR /app
CMD ["yarn", "serve"]