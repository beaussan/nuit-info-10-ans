#!/bin/bash
if [ "$TRAVIS_BRANCH" == "develop" ]; then
  ./gradlew bootRepackage -Pprod -x test
  ./gradlew deployHeroku
fi
