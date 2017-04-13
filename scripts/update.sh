#!/bin/bash

curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
    "index": 0,
    "value": "x"
  },
  "over": false
}
  }'

echo
