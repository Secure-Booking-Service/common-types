<div align="center">
    <img src="https://raw.githubusercontent.com/Secure-Booking-Service/common-types/main/logo.svg" alt="Share Icon by Bootstrap" width="100">
    <br>
    <h2>Secure Booking Service - Common Types</h2>
    <br>
</div>

[![Badge](https://img.shields.io/badge/project-Secure%20Booking%20Service-blue)](https://github.com/Secure-Booking)
[![CI](https://github.com/Secure-Booking-Service/common-types/actions/workflows/ci.yml/badge.svg)](https://github.com/Secure-Booking-Service/common-types/actions/workflows/ci.yml)
[![CD](https://github.com/Secure-Booking-Service/common-types/actions/workflows/cd.yml/badge.svg)](https://github.com/Secure-Booking-Service/common-types/actions/workflows/cd.yml)

This package includes typescript type definitions and code used by the [frontend](https://github.com/Secure-Booking-Service/frontend) and [backend](https://github.com/Secure-Booking-Service/backend) application. It is published at GitHub's NPM registry. 

https://github.com/Secure-Booking-Service/common-types/packages/1096992

## How to use this package
To use this package, you need to log in your NPM client to the GitHub registry. To do so, use the following command:

```sh
npm login --scope=@secure-booking-service --registry=https://npm.pkg.github.com
```

* As **User**    : Your GitHub username
* As **Password**: Create a [personal access token](https://github.com/settings/tokens) with the `repo` and `read:packages` scope
* As **E-Mail**  : Choose your or a random email address

Afterwards, tell NPM to download *Secure Booking Service* packages from GitHub. Create a `.npmrc` file if it does not already exist with the following content:

```
@secure-booking-service:registry=https://npm.pkg.github.com
```

Now you are ready to install the package with `npm install --save-dev @secure-booking-service/common-types`

---
<div align="left">
    Icon by <a href="https://github.com/twbs/icons">Bootstrap</a> published under <a href="https://github.com/twbs/icons/blob/main/LICENSE.md">MIT licence</a>.
</div>