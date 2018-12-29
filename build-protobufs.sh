#!/usr/bin/env bash

docker run --rm -v $(pwd):$(pwd) -w $(pwd) znly/protoc \
 --proto_path=protobuf \
 --js_out=import_style=commonjs,binary:src/protocol \
 protobuf/core/*.proto protobuf/api/*.proto
