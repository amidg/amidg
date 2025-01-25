# DEV NOTES
`compose.yml` provided here targets podman and Fedora Linux, thus docker compatibility is not guaranteed

## Prereqs:
Requires `.env` file of the following structure:
```
# Environment for the application (e.g., development, production)
NODE_ENV=production

# Database configuration
DATABASE_CLIENT=postgres # or mysql, sqlite, etc.
DATABASE_HOST=strapiDB
DATABASE_PORT=5433
DATABASE_NAME=gusevtech_blog_db
DATABASE_USERNAME=username
DATABASE_PASSWORD=password

# JWT Secrets (for authentication)
JWT_SECRET="your key"

# Admin Panel JWT Secret
ADMIN_JWT_SECRET="your key"

# Session Cookie Keys
APP_KEYS=key1,key2

# salt token
API_TOKEN_SALT=

# Optional: Set the host and port for Strapi to listen on
HOST=0.0.0.0
PORT=1337
```

To generate new keys do this:
```
node -e "console.log(require('crypto').randomBytes(16).toString('base64'));"

OR

openssl rand -base64 16
```

## How to start development:
To start in detached mode do `up -d`. To kill containers do:
```
podman compose --profile NAME down
```

Basic commands are shown below:
### Strapi + Website:
```
podman compose --profile dev up --build
```

### Portfolio ONLY:
```
podman compose --profile web-dev up --build
```

### Blog ONLY:
```
podman compose --profile strapi-dev up --build
```
