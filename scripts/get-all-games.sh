#!/bin/bash

curl --include --request GET http://localhost:4741/games \
  --header "Authorization: Token token=$TOKEN" \
  --data ''
  # --header "Content-Type: application/json"
  # --data

echo
