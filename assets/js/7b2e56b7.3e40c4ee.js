"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[20845],{52106:e=>{e.exports=JSON.parse('{"pluginId":"docs-apisix","version":"3.2","label":"3.2","banner":"unmaintained","badge":true,"className":"docs-version-3.2","isLast":false,"docsSidebars":{"version-3.2/docs":[{"type":"link","label":"Getting started","href":"/docs/apisix/3.2/getting-started"},{"type":"link","label":"Installation","href":"/docs/apisix/3.2/installation-guide"},{"type":"link","label":"Architecture","href":"/docs/apisix/3.2/architecture-design/apisix"},{"type":"category","label":"Tutorials","items":[{"type":"link","label":"Expose API","href":"/docs/apisix/3.2/tutorials/expose-api"},{"type":"link","label":"Protect API","href":"/docs/apisix/3.2/tutorials/protect-api"},{"type":"link","label":"Observe APIs","href":"/docs/apisix/3.2/tutorials/observe-your-api"},{"type":"link","label":"Manage API Consumers","href":"/docs/apisix/3.2/tutorials/manage-api-consumers"},{"type":"link","label":"Cache API responses","href":"/docs/apisix/3.2/tutorials/cache-api-responses"},{"type":"link","label":"Add multiple API versions","href":"/docs/apisix/3.2/tutorials/add-multiple-api-versions"},{"type":"link","label":"Health Check","href":"/docs/apisix/3.2/tutorials/health-check"},{"type":"link","label":"Configure mTLS for client to APISIX","href":"/docs/apisix/3.2/tutorials/client-to-apisix-mtls"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Terminology","items":[{"type":"link","label":"API Gateway","href":"/docs/apisix/3.2/terminology/api-gateway"},{"type":"link","label":"Consumer","href":"/docs/apisix/3.2/terminology/consumer"},{"type":"link","label":"Consumer Group","href":"/docs/apisix/3.2/terminology/consumer-group"},{"type":"link","label":"Global Rules","href":"/docs/apisix/3.2/terminology/global-rule"},{"type":"link","label":"Plugin","href":"/docs/apisix/3.2/terminology/plugin"},{"type":"link","label":"Plugin Config","href":"/docs/apisix/3.2/terminology/plugin-config"},{"type":"link","label":"Route","href":"/docs/apisix/3.2/terminology/route"},{"type":"link","label":"Router","href":"/docs/apisix/3.2/terminology/router"},{"type":"link","label":"Script","href":"/docs/apisix/3.2/terminology/script"},{"type":"link","label":"Service","href":"/docs/apisix/3.2/terminology/service"},{"type":"link","label":"Upstream","href":"/docs/apisix/3.2/terminology/upstream"},{"type":"link","label":"Secret","href":"/docs/apisix/3.2/terminology/secret"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Plugins","items":[{"type":"category","label":"General","items":[{"type":"link","label":"batch-requests","href":"/docs/apisix/3.2/plugins/batch-requests"},{"type":"link","label":"redirect","href":"/docs/apisix/3.2/plugins/redirect"},{"type":"link","label":"echo","href":"/docs/apisix/3.2/plugins/echo"},{"type":"link","label":"gzip","href":"/docs/apisix/3.2/plugins/gzip"},{"type":"link","label":"real-ip","href":"/docs/apisix/3.2/plugins/real-ip"},{"type":"link","label":"server-info","href":"/docs/apisix/3.2/plugins/server-info"},{"type":"link","label":"ext-plugin-pre-req","href":"/docs/apisix/3.2/plugins/ext-plugin-pre-req"},{"type":"link","label":"ext-plugin-post-req","href":"/docs/apisix/3.2/plugins/ext-plugin-post-req"},{"type":"link","label":"ext-plugin-post-resp","href":"/docs/apisix/3.2/plugins/ext-plugin-post-resp"},{"type":"link","label":"inspect","href":"/docs/apisix/3.2/plugins/inspect"},{"type":"link","label":"workflow","href":"/docs/apisix/3.2/plugins/workflow"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Transformation","items":[{"type":"link","label":"response-rewrite","href":"/docs/apisix/3.2/plugins/response-rewrite"},{"type":"link","label":"proxy-rewrite","href":"/docs/apisix/3.2/plugins/proxy-rewrite"},{"type":"link","label":"grpc-transcode","href":"/docs/apisix/3.2/plugins/grpc-transcode"},{"type":"link","label":"grpc-web","href":"/docs/apisix/3.2/plugins/grpc-web"},{"type":"link","label":"fault-injection","href":"/docs/apisix/3.2/plugins/fault-injection"},{"type":"link","label":"mocking","href":"/docs/apisix/3.2/plugins/mocking"},{"type":"link","label":"degraphql","href":"/docs/apisix/3.2/plugins/degraphql"},{"type":"link","label":"body-transformer","href":"/docs/apisix/3.2/plugins/body-transformer"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Authentication","items":[{"type":"link","label":"key-auth","href":"/docs/apisix/3.2/plugins/key-auth"},{"type":"link","label":"jwt-auth","href":"/docs/apisix/3.2/plugins/jwt-auth"},{"type":"link","label":"basic-auth","href":"/docs/apisix/3.2/plugins/basic-auth"},{"type":"link","label":"authz-keycloak","href":"/docs/apisix/3.2/plugins/authz-keycloak"},{"type":"link","label":"authz-casdoor","href":"/docs/apisix/3.2/plugins/authz-casdoor"},{"type":"link","label":"wolf-rbac","href":"/docs/apisix/3.2/plugins/wolf-rbac"},{"type":"link","label":"openid-connect","href":"/docs/apisix/3.2/plugins/openid-connect"},{"type":"link","label":"cas-auth","href":"/docs/apisix/3.2/plugins/cas-auth"},{"type":"link","label":"hmac-auth","href":"/docs/apisix/3.2/plugins/hmac-auth"},{"type":"link","label":"authz-casbin","href":"/docs/apisix/3.2/plugins/authz-casbin"},{"type":"link","label":"ldap-auth","href":"/docs/apisix/3.2/plugins/ldap-auth"},{"type":"link","label":"opa","href":"/docs/apisix/3.2/plugins/opa"},{"type":"link","label":"forward-auth","href":"/docs/apisix/3.2/plugins/forward-auth"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Security","items":[{"type":"link","label":"cors","href":"/docs/apisix/3.2/plugins/cors"},{"type":"link","label":"uri-blocker","href":"/docs/apisix/3.2/plugins/uri-blocker"},{"type":"link","label":"ip-restriction","href":"/docs/apisix/3.2/plugins/ip-restriction"},{"type":"link","label":"ua-restriction","href":"/docs/apisix/3.2/plugins/ua-restriction"},{"type":"link","label":"referer-restriction","href":"/docs/apisix/3.2/plugins/referer-restriction"},{"type":"link","label":"consumer-restriction","href":"/docs/apisix/3.2/plugins/consumer-restriction"},{"type":"link","label":"csrf","href":"/docs/apisix/3.2/plugins/csrf"},{"type":"link","label":"public-api","href":"/docs/apisix/3.2/plugins/public-api"},{"type":"link","label":"GM","href":"/docs/apisix/3.2/plugins/gm"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Traffic","items":[{"type":"link","label":"limit-req","href":"/docs/apisix/3.2/plugins/limit-req"},{"type":"link","label":"limit-conn","href":"/docs/apisix/3.2/plugins/limit-conn"},{"type":"link","label":"limit-count","href":"/docs/apisix/3.2/plugins/limit-count"},{"type":"link","label":"proxy-cache","href":"/docs/apisix/3.2/plugins/proxy-cache"},{"type":"link","label":"request-validation","href":"/docs/apisix/3.2/plugins/request-validation"},{"type":"link","label":"proxy-mirror","href":"/docs/apisix/3.2/plugins/proxy-mirror"},{"type":"link","label":"api-breaker","href":"/docs/apisix/3.2/plugins/api-breaker"},{"type":"link","label":"traffic-split","href":"/docs/apisix/3.2/plugins/traffic-split"},{"type":"link","label":"request-id","href":"/docs/apisix/3.2/plugins/request-id"},{"type":"link","label":"proxy-control","href":"/docs/apisix/3.2/plugins/proxy-control"},{"type":"link","label":"client-control","href":"/docs/apisix/3.2/plugins/client-control"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Observability","items":[{"type":"category","label":"Tracers","items":[{"type":"link","label":"zipkin","href":"/docs/apisix/3.2/plugins/zipkin"},{"type":"link","label":"skywalking","href":"/docs/apisix/3.2/plugins/skywalking"},{"type":"link","label":"opentelemetry","href":"/docs/apisix/3.2/plugins/opentelemetry"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Metrics","items":[{"type":"link","label":"prometheus","href":"/docs/apisix/3.2/plugins/prometheus"},{"type":"link","label":"node-status","href":"/docs/apisix/3.2/plugins/node-status"},{"type":"link","label":"datadog","href":"/docs/apisix/3.2/plugins/datadog"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Loggers","items":[{"type":"link","label":"http-logger","href":"/docs/apisix/3.2/plugins/http-logger"},{"type":"link","label":"skywalking-logger","href":"/docs/apisix/3.2/plugins/skywalking-logger"},{"type":"link","label":"tcp-logger","href":"/docs/apisix/3.2/plugins/tcp-logger"},{"type":"link","label":"kafka-logger","href":"/docs/apisix/3.2/plugins/kafka-logger"},{"type":"link","label":"rocketmq-logger","href":"/docs/apisix/3.2/plugins/rocketmq-logger"},{"type":"link","label":"udp-logger","href":"/docs/apisix/3.2/plugins/udp-logger"},{"type":"link","label":"clickhouse-logger","href":"/docs/apisix/3.2/plugins/clickhouse-logger"},{"type":"link","label":"syslog","href":"/docs/apisix/3.2/plugins/syslog"},{"type":"link","label":"log-rotate","href":"/docs/apisix/3.2/plugins/log-rotate"},{"type":"link","label":"error-log-logger","href":"/docs/apisix/3.2/plugins/error-log-logger"},{"type":"link","label":"sls-logger","href":"/docs/apisix/3.2/plugins/sls-logger"},{"type":"link","label":"google-cloud-logging","href":"/docs/apisix/3.2/plugins/google-cloud-logging"},{"type":"link","label":"splunk-hec-logging","href":"/docs/apisix/3.2/plugins/splunk-hec-logging"},{"type":"link","label":"file-logger","href":"/docs/apisix/3.2/plugins/file-logger"},{"type":"link","label":"loggly","href":"/docs/apisix/3.2/plugins/loggly"},{"type":"link","label":"elasticsearch-logger","href":"/docs/apisix/3.2/plugins/elasticsearch-logger"},{"type":"link","label":"tencent-cloud-cls","href":"/docs/apisix/3.2/plugins/tencent-cloud-cls"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Serverless","items":[{"type":"link","label":"serverless","href":"/docs/apisix/3.2/plugins/serverless"},{"type":"link","label":"azure-functions","href":"/docs/apisix/3.2/plugins/azure-functions"},{"type":"link","label":"openwhisk","href":"/docs/apisix/3.2/plugins/openwhisk"},{"type":"link","label":"aws-lambda","href":"/docs/apisix/3.2/plugins/aws-lambda"},{"type":"link","label":"openfunction","href":"/docs/apisix/3.2/plugins/openfunction"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Other protocols","items":[{"type":"link","label":"dubbo-proxy","href":"/docs/apisix/3.2/plugins/dubbo-proxy"},{"type":"link","label":"mqtt-proxy","href":"/docs/apisix/3.2/plugins/mqtt-proxy"},{"type":"link","label":"kafka-proxy","href":"/docs/apisix/3.2/plugins/kafka-proxy"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"API","items":[{"type":"link","label":"Admin API","href":"/docs/apisix/3.2/admin-api"},{"type":"link","label":"Control API","href":"/docs/apisix/3.2/control-api"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Development","items":[{"type":"link","label":"Building APISIX from source","href":"/docs/apisix/3.2/building-apisix"},{"type":"link","label":"Support FIPS in APISIX","href":"/docs/apisix/3.2/support-fips-in-apisix"},{"type":"link","label":"External Plugin","href":"/docs/apisix/3.2/external-plugin"},{"type":"link","label":"Wasm","href":"/docs/apisix/3.2/wasm"},{"type":"link","label":"CODE_STYLE","href":"https://github.com/apache/apisix/blob/master/CODE_STYLE.md"},{"type":"category","label":"internal","items":[{"type":"link","label":"The Implementation of Plugin Runner","href":"/docs/apisix/3.2/internal/plugin-runner"},{"type":"link","label":"Introducing APISIX\'s testing framework","href":"/docs/apisix/3.2/internal/testing-framework"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Plugin Develop","href":"/docs/apisix/3.2/plugin-develop"},{"type":"link","label":"Debug mode","href":"/docs/apisix/3.2/debug-mode"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Deployment modes","href":"/docs/apisix/3.2/deployment-modes"},{"type":"link","label":"FAQ","href":"/docs/apisix/3.2/FAQ"},{"type":"category","label":"Others","items":[{"type":"category","label":"Discovery","items":[{"type":"link","label":"Integration service discovery registry","href":"/docs/apisix/3.2/discovery"},{"type":"link","label":"DNS","href":"/docs/apisix/3.2/discovery/dns"},{"type":"link","label":"consul","href":"/docs/apisix/3.2/discovery/consul"},{"type":"link","label":"consul_kv","href":"/docs/apisix/3.2/discovery/consul_kv"},{"type":"link","label":"nacos","href":"/docs/apisix/3.2/discovery/nacos"},{"type":"link","label":"eureka","href":"/docs/apisix/3.2/discovery/eureka"},{"type":"link","label":"Control Plane Service Discovery","href":"/docs/apisix/3.2/discovery/control-plane-service-discovery"},{"type":"link","label":"Kubernetes","href":"/docs/apisix/3.2/discovery/kubernetes"}],"collapsible":true,"collapsed":true},{"type":"category","label":"PubSub","items":[{"type":"link","label":"PubSub","href":"/docs/apisix/3.2/pubsub"},{"type":"link","label":"Apache Kafka","href":"/docs/apisix/3.2/pubsub/kafka"}],"collapsible":true,"collapsed":true},{"type":"category","label":"xRPC","items":[{"type":"link","label":"redis","href":"/docs/apisix/3.2/xrpc/redis"},{"type":"link","label":"xRPC","href":"/docs/apisix/3.2/xrpc"}],"collapsible":true,"collapsed":true},{"type":"link","label":"Router radixtree","href":"/docs/apisix/3.2/router-radixtree"},{"type":"link","label":"Stream Proxy","href":"/docs/apisix/3.2/stream-proxy"},{"type":"link","label":"gRPC Proxy","href":"/docs/apisix/3.2/grpc-proxy"},{"type":"link","label":"Customize Nginx configuration","href":"/docs/apisix/3.2/customize-nginx-configuration"},{"type":"link","label":"Certificate","href":"/docs/apisix/3.2/certificate"},{"type":"link","label":"Batch Processor","href":"/docs/apisix/3.2/batch-processor"},{"type":"link","label":"Benchmark","href":"/docs/apisix/3.2/benchmark"},{"type":"link","label":"Install Dependencies","href":"/docs/apisix/3.2/install-dependencies"},{"type":"link","label":"APISIX variable","href":"/docs/apisix/3.2/apisix-variable"},{"type":"link","label":"Running APISIX in AWS with AWS CDK","href":"/docs/apisix/3.2/aws"},{"type":"link","label":"Mutual TLS Authentication","href":"/docs/apisix/3.2/mtls"},{"type":"link","label":"Debug Function","href":"/docs/apisix/3.2/debug-function"},{"type":"link","label":"Configuration file switching based on environment variables","href":"/docs/apisix/3.2/profile"}],"collapsible":true,"collapsed":true},{"type":"link","label":"CHANGELOG","href":"https://github.com/apache/apisix/blob/master/CHANGELOG.md"},{"type":"link","label":"Upgrade Guide","href":"/docs/apisix/3.2/upgrade-guide-from-2.15.x-to-3.0.0"}]}}')}}]);