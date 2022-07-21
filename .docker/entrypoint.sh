#!/bin/sh

if [ ! -f ".env.local" ]; then
    cp .env.example .env
fi

npm install

tail -f /dev/null

# npm run dev
