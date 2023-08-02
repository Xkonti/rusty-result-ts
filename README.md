# rusty-result-ts

A very simple recreation of Rust's Return type for TypeScript.

## Usage example

Install the package:

```bash
npm install rusty-result-ts
```

Create a method that returns the `Result<success, error>` type:

```ts
function ValidateNumber(value: number): Result<number, string> {
    if (value > 0) {
        return ok(value);
    } else {
        return err('value must be greater than 0');
    }
};
```

Use the method:

```ts
const result = ValidateNumber(10);
if (result.isOk()) {
    console.log(result.value);
} else {
    console.log(`Encountered error: ${result.error}`);
}
```

## Development

- This project is using [pnpm](https://pnpm.io/) as a package manager.
- Run `pnpm install` to install dependencies.
- Run `pnpm test` to run tests once.
- Run `pnpm test:watch` to run tests in watch mode.
- Run `pnpm build` to build the project - this will also run the linter (EsLint).
