## Common Types
This package includes typescript type definitions used by the frontend and backend application. It is published at GitHub's NPM registry. 

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
