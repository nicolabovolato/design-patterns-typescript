# Proxy Pattern

Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object. [source](https://refactoring.guru/design-patterns/proxy)

In this example [WireTransferProxy](Proxy.ts) is a proxy of [WireTransfer](Proxy.ts) and does not allow uncovered transfers.
