"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[10181],{95513:e=>{e.exports=JSON.parse('{"pluginId":"docs-apisix","version":"3.8","label":"3.8","banner":null,"badge":true,"className":"docs-version-3.8","isLast":true,"docsSidebars":{"version-3.8/docs":[{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Get APISIX","href":"/docs/apisix/getting-started/README"},{"type":"link","label":"Configure Routes","href":"/docs/apisix/getting-started/configure-routes"},{"type":"link","label":"Load Balancing","href":"/docs/apisix/getting-started/load-balancing"},{"type":"link","label":"Key Authentication","href":"/docs/apisix/getting-started/key-authentication"},{"type":"link","label":"Rate Limiting","href":"/docs/apisix/getting-started/rate-limiting"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Installation","href":"/docs/apisix/installation-guide"},{"type":"link","label":"Architecture","href":"/docs/apisix/architecture-design/apisix"},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Expose API","href":"/docs/apisix/tutorials/expose-api"},{"type":"link","label":"Protect API","href":"/docs/apisix/tutorials/protect-api"},{"type":"category","label":"Observability","items":[{"type":"link","label":"Observe APIs","href":"/docs/apisix/tutorials/observe-your-api"},{"type":"link","label":"Health Check","href":"/docs/apisix/tutorials/health-check"},{"type":"link","label":"Monitor API Health Check with Prometheus","href":"/docs/apisix/tutorials/monitor-api-health-check"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Manage API Consumers","href":"/docs/apisix/tutorials/manage-api-consumers"},{"type":"link","label":"Cache API responses","href":"/docs/apisix/tutorials/cache-api-responses"},{"type":"link","label":"Add multiple API versions","href":"/docs/apisix/tutorials/add-multiple-api-versions"},{"type":"link","label":"Configure mTLS for client to APISIX","href":"/docs/apisix/tutorials/client-to-apisix-mtls"},{"type":"link","label":"WebSocket Authentication","href":"/docs/apisix/tutorials/websocket-authentication"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Terminology","items":[{"type":"link","label":"API Gateway","href":"/docs/apisix/terminology/api-gateway"},{"type":"link","label":"Consumer","href":"/docs/apisix/terminology/consumer"},{"type":"link","label":"Consumer Group","href":"/docs/apisix/terminology/consumer-group"},{"type":"link","label":"Global Rules","href":"/docs/apisix/terminology/global-rule"},{"type":"link","label":"Plugin","href":"/docs/apisix/terminology/plugin"},{"type":"link","label":"Plugin Config","href":"/docs/apisix/terminology/plugin-config"},{"type":"link","label":"Plugin Metadata","href":"/docs/apisix/terminology/plugin-metadata"},{"type":"link","label":"Route","href":"/docs/apisix/terminology/route"},{"type":"link","label":"Router","href":"/docs/apisix/terminology/router"},{"type":"link","label":"Script","href":"/docs/apisix/terminology/script"},{"type":"link","label":"Service","href":"/docs/apisix/terminology/service"},{"type":"link","label":"Upstream","href":"/docs/apisix/terminology/upstream"},{"type":"link","label":"Secret","href":"/docs/apisix/terminology/secret"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Plugins","items":[{"type":"category","label":"General","items":[{"type":"link","label":"batch-requests","href":"/docs/apisix/plugins/batch-requests"},{"type":"link","label":"redirect","href":"/docs/apisix/plugins/redirect"},{"type":"link","label":"echo","href":"/docs/apisix/plugins/echo"},{"type":"link","label":"gzip","href":"/docs/apisix/plugins/gzip"},{"type":"link","label":"brotli","href":"/docs/apisix/plugins/brotli"},{"type":"link","label":"real-ip","href":"/docs/apisix/plugins/real-ip"},{"type":"link","label":"server-info","href":"/docs/apisix/plugins/server-info"},{"type":"link","label":"ext-plugin-pre-req","href":"/docs/apisix/plugins/ext-plugin-pre-req"},{"type":"link","label":"ext-plugin-post-req","href":"/docs/apisix/plugins/ext-plugin-post-req"},{"type":"link","label":"ext-plugin-post-resp","href":"/docs/apisix/plugins/ext-plugin-post-resp"},{"type":"link","label":"inspect","href":"/docs/apisix/plugins/inspect"},{"type":"link","label":"workflow","href":"/docs/apisix/plugins/workflow"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Transformation","items":[{"type":"link","label":"response-rewrite","href":"/docs/apisix/plugins/response-rewrite"},{"type":"link","label":"proxy-rewrite","href":"/docs/apisix/plugins/proxy-rewrite"},{"type":"link","label":"grpc-transcode","href":"/docs/apisix/plugins/grpc-transcode"},{"type":"link","label":"grpc-web","href":"/docs/apisix/plugins/grpc-web"},{"type":"link","label":"fault-injection","href":"/docs/apisix/plugins/fault-injection"},{"type":"link","label":"mocking","href":"/docs/apisix/plugins/mocking"},{"type":"link","label":"degraphql","href":"/docs/apisix/plugins/degraphql"},{"type":"link","label":"body-transformer","href":"/docs/apisix/plugins/body-transformer"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Authentication","items":[{"type":"link","label":"key-auth","href":"/docs/apisix/plugins/key-auth"},{"type":"link","label":"jwt-auth","href":"/docs/apisix/plugins/jwt-auth"},{"type":"link","label":"jwe-decrypt","href":"/docs/apisix/plugins/jwe-decrypt"},{"type":"link","label":"basic-auth","href":"/docs/apisix/plugins/basic-auth"},{"type":"link","label":"authz-keycloak","href":"/docs/apisix/plugins/authz-keycloak"},{"type":"link","label":"authz-casdoor","href":"/docs/apisix/plugins/authz-casdoor"},{"type":"link","label":"wolf-rbac","href":"/docs/apisix/plugins/wolf-rbac"},{"type":"link","label":"openid-connect","href":"/docs/apisix/plugins/openid-connect"},{"type":"link","label":"cas-auth","href":"/docs/apisix/plugins/cas-auth"},{"type":"link","label":"hmac-auth","href":"/docs/apisix/plugins/hmac-auth"},{"type":"link","label":"authz-casbin","href":"/docs/apisix/plugins/authz-casbin"},{"type":"link","label":"ldap-auth","href":"/docs/apisix/plugins/ldap-auth"},{"type":"link","label":"opa","href":"/docs/apisix/plugins/opa"},{"type":"link","label":"forward-auth","href":"/docs/apisix/plugins/forward-auth"},{"type":"link","label":"multi-auth","href":"/docs/apisix/plugins/multi-auth"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Security","items":[{"type":"link","label":"cors","href":"/docs/apisix/plugins/cors"},{"type":"link","label":"uri-blocker","href":"/docs/apisix/plugins/uri-blocker"},{"type":"link","label":"ip-restriction","href":"/docs/apisix/plugins/ip-restriction"},{"type":"link","label":"ua-restriction","href":"/docs/apisix/plugins/ua-restriction"},{"type":"link","label":"referer-restriction","href":"/docs/apisix/plugins/referer-restriction"},{"type":"link","label":"consumer-restriction","href":"/docs/apisix/plugins/consumer-restriction"},{"type":"link","label":"csrf","href":"/docs/apisix/plugins/csrf"},{"type":"link","label":"public-api","href":"/docs/apisix/plugins/public-api"},{"type":"link","label":"GM","href":"/docs/apisix/plugins/gm"},{"type":"link","label":"chaitin-waf","href":"/docs/apisix/plugins/chaitin-waf"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Traffic","items":[{"type":"link","label":"limit-req","href":"/docs/apisix/plugins/limit-req"},{"type":"link","label":"limit-conn","href":"/docs/apisix/plugins/limit-conn"},{"type":"link","label":"limit-count","href":"/docs/apisix/plugins/limit-count"},{"type":"link","label":"proxy-cache","href":"/docs/apisix/plugins/proxy-cache"},{"type":"link","label":"request-validation","href":"/docs/apisix/plugins/request-validation"},{"type":"link","label":"proxy-mirror","href":"/docs/apisix/plugins/proxy-mirror"},{"type":"link","label":"api-breaker","href":"/docs/apisix/plugins/api-breaker"},{"type":"link","label":"traffic-split","href":"/docs/apisix/plugins/traffic-split"},{"type":"link","label":"request-id","href":"/docs/apisix/plugins/request-id"},{"type":"link","label":"proxy-control","href":"/docs/apisix/plugins/proxy-control"},{"type":"link","label":"client-control","href":"/docs/apisix/plugins/client-control"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Observability","items":[{"type":"category","label":"Tracers","items":[{"type":"link","label":"zipkin","href":"/docs/apisix/plugins/zipkin"},{"type":"link","label":"skywalking","href":"/docs/apisix/plugins/skywalking"},{"type":"link","label":"opentelemetry","href":"/docs/apisix/plugins/opentelemetry"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Metrics","items":[{"type":"link","label":"prometheus","href":"/docs/apisix/plugins/prometheus"},{"type":"link","label":"node-status","href":"/docs/apisix/plugins/node-status"},{"type":"link","label":"datadog","href":"/docs/apisix/plugins/datadog"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Loggers","items":[{"type":"link","label":"http-logger","href":"/docs/apisix/plugins/http-logger"},{"type":"link","label":"skywalking-logger","href":"/docs/apisix/plugins/skywalking-logger"},{"type":"link","label":"tcp-logger","href":"/docs/apisix/plugins/tcp-logger"},{"type":"link","label":"kafka-logger","href":"/docs/apisix/plugins/kafka-logger"},{"type":"link","label":"rocketmq-logger","href":"/docs/apisix/plugins/rocketmq-logger"},{"type":"link","label":"udp-logger","href":"/docs/apisix/plugins/udp-logger"},{"type":"link","label":"clickhouse-logger","href":"/docs/apisix/plugins/clickhouse-logger"},{"type":"link","label":"syslog","href":"/docs/apisix/plugins/syslog"},{"type":"link","label":"log-rotate","href":"/docs/apisix/plugins/log-rotate"},{"type":"link","label":"error-log-logger","href":"/docs/apisix/plugins/error-log-logger"},{"type":"link","label":"sls-logger","href":"/docs/apisix/plugins/sls-logger"},{"type":"link","label":"google-cloud-logging","href":"/docs/apisix/plugins/google-cloud-logging"},{"type":"link","label":"splunk-hec-logging","href":"/docs/apisix/plugins/splunk-hec-logging"},{"type":"link","label":"file-logger","href":"/docs/apisix/plugins/file-logger"},{"type":"link","label":"loggly","href":"/docs/apisix/plugins/loggly"},{"type":"link","label":"elasticsearch-logger","href":"/docs/apisix/plugins/elasticsearch-logger"},{"type":"link","label":"tencent-cloud-cls","href":"/docs/apisix/plugins/tencent-cloud-cls"},{"type":"link","label":"loki-logger","href":"/docs/apisix/plugins/loki-logger"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Serverless","items":[{"type":"link","label":"serverless","href":"/docs/apisix/plugins/serverless"},{"type":"link","label":"azure-functions","href":"/docs/apisix/plugins/azure-functions"},{"type":"link","label":"openwhisk","href":"/docs/apisix/plugins/openwhisk"},{"type":"link","label":"aws-lambda","href":"/docs/apisix/plugins/aws-lambda"},{"type":"link","label":"openfunction","href":"/docs/apisix/plugins/openfunction"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Other protocols","items":[{"type":"link","label":"dubbo-proxy","href":"/docs/apisix/plugins/dubbo-proxy"},{"type":"link","label":"mqtt-proxy","href":"/docs/apisix/plugins/mqtt-proxy"},{"type":"link","label":"kafka-proxy","href":"/docs/apisix/plugins/kafka-proxy"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"API","items":[{"type":"link","label":"Admin API","href":"/docs/apisix/admin-api"},{"type":"link","label":"Control API","href":"/docs/apisix/control-api"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Development","items":[{"type":"link","label":"Building APISIX from source","href":"/docs/apisix/building-apisix"},{"type":"link","label":"Support FIPS in APISIX","href":"/docs/apisix/support-fips-in-apisix"},{"type":"link","label":"External Plugin","href":"/docs/apisix/external-plugin"},{"type":"link","label":"Wasm","href":"/docs/apisix/wasm"},{"type":"link","label":"CODE_STYLE","href":"https://github.com/apache/apisix/blob/master/CODE_STYLE.md"},{"type":"category","label":"internal","items":[{"type":"link","label":"The Implementation of Plugin Runner","href":"/docs/apisix/internal/plugin-runner"},{"type":"link","label":"Introducing APISIX\'s testing framework","href":"/docs/apisix/internal/testing-framework"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Plugin Develop","href":"/docs/apisix/plugin-develop"},{"type":"link","label":"Debug mode","href":"/docs/apisix/debug-mode"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Deployment modes","href":"/docs/apisix/deployment-modes"},{"type":"link","label":"FAQ","href":"/docs/apisix/FAQ"},{"type":"category","label":"Others","items":[{"type":"category","label":"Discovery","items":[{"type":"link","label":"Integration service discovery registry","href":"/docs/apisix/discovery"},{"type":"link","label":"DNS","href":"/docs/apisix/discovery/dns"},{"type":"link","label":"consul","href":"/docs/apisix/discovery/consul"},{"type":"link","label":"consul_kv","href":"/docs/apisix/discovery/consul_kv"},{"type":"link","label":"nacos","href":"/docs/apisix/discovery/nacos"},{"type":"link","label":"eureka","href":"/docs/apisix/discovery/eureka"},{"type":"link","label":"Control Plane Service Discovery","href":"/docs/apisix/discovery/control-plane-service-discovery"},{"type":"link","label":"Kubernetes","href":"/docs/apisix/discovery/kubernetes"}],"collapsible":true,"collapsed":true},{"type":"category","label":"PubSub","items":[{"type":"link","label":"PubSub","href":"/docs/apisix/pubsub"},{"type":"link","label":"Apache Kafka","href":"/docs/apisix/pubsub/kafka"}],"collapsible":true,"collapsed":true},{"type":"category","label":"xRPC","items":[{"type":"link","label":"redis","href":"/docs/apisix/xrpc/redis"},{"type":"link","label":"xRPC","href":"/docs/apisix/xrpc"}],"collapsible":true,"collapsed":true},{"type":"link","label":"router-radixtree","href":"/docs/apisix/router-radixtree"},{"type":"link","label":"Stream Proxy","href":"/docs/apisix/stream-proxy"},{"type":"link","label":"gRPC Proxy","href":"/docs/apisix/grpc-proxy"},{"type":"link","label":"Customize Nginx configuration","href":"/docs/apisix/customize-nginx-configuration"},{"type":"link","label":"Certificate","href":"/docs/apisix/certificate"},{"type":"link","label":"Batch Processor","href":"/docs/apisix/batch-processor"},{"type":"link","label":"Benchmark","href":"/docs/apisix/benchmark"},{"type":"link","label":"Install Dependencies","href":"/docs/apisix/install-dependencies"},{"type":"link","label":"APISIX variable","href":"/docs/apisix/apisix-variable"},{"type":"link","label":"Running APISIX in AWS with AWS CDK","href":"/docs/apisix/aws"},{"type":"link","label":"Mutual TLS Authentication","href":"/docs/apisix/mtls"},{"type":"link","label":"Debug Function","href":"/docs/apisix/debug-function"},{"type":"link","label":"Configuration based on environments","href":"/docs/apisix/profile"},{"type":"link","label":"SSL Protocol","href":"/docs/apisix/ssl-protocol"}],"collapsible":true,"collapsed":true},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix/blob/master/CHANGELOG.md"},{"type":"link","label":"Upgrade Guide","href":"/docs/apisix/upgrade-guide-from-2.15.x-to-3.0.0"}]}}')}}]);