@jacoscaz/mqtt-smol
===================

This is a _smol_ fork of the [mqtt][0] package significantly decreases
dependency count by:

1. Dropping all features beside MQTT and MQTTS connectivity over TCP and TLS.
2. Replacing isomorphic dependencies with equivalent Node.js built-in modules.

This package tracks upstream changes and follows the versioning scheme of the
original [mqtt][0] package.

[0]: https://www.npmjs.com/package/mqtt
