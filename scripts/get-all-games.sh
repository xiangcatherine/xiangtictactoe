#!/bin/bash

curl --include --request GET http://tic-tac-toe.wdibos.com/games \
  --header "Authorization: Token token=$TOKEN" \
  # --header "Content-Type: application/json"
  # --data

echo
