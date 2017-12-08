#!/bin/bash
if [ "$TRAVIS_BRANCH" == "prod" ]; then
  ./gradlew bootRepackage -Pprod -x test
  ./gradlew deployHeroku
fi
